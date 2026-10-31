import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const requiredFiles = [
  "AGENTS.md",
  "GOVERNANCE.md",
  "PRODUCT-FACTS.md",
  "ARCHITECTURE.md",
  "GLOSSARY.md",
  "KNOWN-LIMITATIONS.md",
  "SECURITY-AND-APPROVALS.md",
  "TECHNOLOGY-STACK.md",
  "ENGINEERING-STANDARDS.md",
  "AI-GUIDELINES.md",
  "SKILL-CATALOG.md",
  "THIRD-PARTY-NOTICES.md",
  "agent-skills.sources.json",
  "DECISIONS/0001-default-stack.md",
  "DECISIONS/0002-icon-system.md",
  "DECISIONS/0003-local-first-data.md",
  "DECISIONS/0004-ai-governance.md",
  "DECISIONS/0005-agent-skill-library.md",
  "assets/icons/README.md",
  "starter/react-vite/README.md",
  "starter/react-vite/template/package.json",
  "starter/react-vite/template/src/App.tsx",
  "starter/react-vite/template/src/assets/icons/home.svg",
  "starter/react-vite/template/src/assets/icons/LICENSE",
  "docs/optional-agent-skills.md",
];

const skills = [
  "implement-feature",
  "debug-bug",
  "code-review",
  "ui-implementation",
  "database-migration",
  "release-readiness",
  "local-first-engineering",
  "data-safety-and-migrations",
  "arabic-rtl-ux",
  "pwa-offline-audit",
  "mobile-interaction-review",
  "privacy-security-review",
  "web-app-testing",
  "web-interface-review",
  "vercel-react-best-practices",
  "vercel-composition-patterns",
];

const thirdPartySkills = [
  "vercel-react-best-practices",
  "vercel-composition-patterns",
];

const errors = [];
const read = (path) => readFileSync(join(root, path), "utf8");
const check = (condition, message) => {
  if (!condition) errors.push(message);
};

for (const path of requiredFiles) {
  check(existsSync(join(root, path)), "Missing required file: " + path);
}

let sourceRegistry;
try {
  sourceRegistry = JSON.parse(read("agent-skills.sources.json"));
} catch (error) {
  errors.push("agent-skills.sources.json is invalid JSON: " + error.message);
}

for (const skill of skills) {
  const path = ".agents/skills/" + skill + "/SKILL.md";
  if (!existsSync(join(root, path))) {
    errors.push("Missing skill: " + path);
    continue;
  }

  const content = read(path);
  const match = content.match(/^---\r?\nname: ([a-z0-9-]+)\r?\ndescription: (.+)\r?\n/);
  check(Boolean(match), "Invalid Agent Skills frontmatter: " + path);
  if (match) {
    check(match[1] === skill, "Skill name must match folder: " + path);
    check(match[2].trim().length > 0 && match[2].trim().length <= 1024, "Invalid skill description length: " + path);
  }
  check(content.includes("## Workflow"), "Skill must define a workflow: " + path);
  check(content.split(/\r?\n/).length <= 500, "Skill exceeds 500 lines: " + path);
  check(Boolean(sourceRegistry && sourceRegistry.skills && sourceRegistry.skills[skill]), "Missing source registry entry: " + skill);
}

if (sourceRegistry) {
  check(sourceRegistry.schemaVersion === 1, "Unsupported skill source registry schema");
  for (const skill of skills) {
    check(Boolean(sourceRegistry.skills && sourceRegistry.skills[skill]), "Missing registry entry: " + skill);
  }
  for (const skill of thirdPartySkills) {
    const entry = sourceRegistry.skills && sourceRegistry.skills[skill];
    check(entry && entry.origin === "third-party", "Incorrect origin for third-party skill: " + skill);
    check(entry && entry.license === "MIT", "Missing or unreviewed MIT license metadata: " + skill);
    check(entry && /^[a-f0-9]{40}$/.test(entry.commit || ""), "Missing pinned upstream commit: " + skill);
    for (const artifact of (entry && entry.artifacts) || []) {
      const path = ".agents/skills/" + skill + "/" + artifact;
      check(existsSync(join(root, path)), "Missing vendored upstream artifact: " + path);
      if (existsSync(join(root, path))) {
        check(read(path).length > 100, "Vendored upstream artifact appears empty: " + path);
      }
    }
  }
}

let tokens;
let templatePackage;
try {
  tokens = JSON.parse(read("tokens/tokens.json"));
} catch (error) {
  errors.push("tokens/tokens.json is invalid JSON: " + error.message);
}
try {
  templatePackage = JSON.parse(read("starter/react-vite/template/package.json"));
} catch (error) {
  errors.push("Starter package.json is invalid JSON: " + error.message);
}

if (tokens) {
  check(Boolean(tokens.color && tokens.color.brand && tokens.color.brand.primary && tokens.color.brand.primary.value), "Missing Nawy primary color token");
  check(tokens.color.brand.primary.value === "#3D7BFF", "Nawy primary color must remain #3D7BFF unless an ADR changes it");
}

if (templatePackage) {
  const deps = Object.assign({}, templatePackage.dependencies, templatePackage.devDependencies);
  for (const name of ["react", "react-dom", "vite", "typescript", "tailwindcss", "dexie", "zod", "vite-plugin-svgr", "vitest"]) {
    check(Boolean(deps[name]), "Starter is missing required dependency: " + name);
  }
  for (const entry of Object.entries(deps)) {
    check(!/^(latest|\*|x)$/i.test(entry[1]), "Unpinned dependency version: " + entry[0] + "@" + entry[1]);
  }
  check(Boolean(templatePackage.scripts && templatePackage.scripts.typecheck), "Starter must define a typecheck script");
  check(Boolean(templatePackage.scripts && templatePackage.scripts.test), "Starter must define a test script");
  check(Boolean(templatePackage.scripts && templatePackage.scripts.build), "Starter must define a build script");
}

const svgPath = "starter/react-vite/template/src/assets/icons/home.svg";
const svg = existsSync(join(root, svgPath)) ? read(svgPath) : "";
check(svg.includes("<svg") && svg.includes("viewBox") && svg.includes("<path"), "Starter Home icon must be a real SVG vector asset");

const appPath = "starter/react-vite/template/src/App.tsx";
const app = existsSync(join(root, appPath)) ? read(appPath) : "";
check(app.includes("home.svg?react"), "Starter must demonstrate local SVG-to-React import");

if (errors.length > 0) {
  console.error("Nawy governance validation failed:");
  for (const error of errors) console.error("- " + error);
  process.exitCode = 1;
} else {
  console.log("Nawy governance validation passed. Checked " + requiredFiles.length + " required files, " + skills.length + " skills, and " + thirdPartySkills.length + " pinned third-party skills.");
}
