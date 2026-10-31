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
  "DECISIONS/0001-default-stack.md",
  "DECISIONS/0002-icon-system.md",
  "DECISIONS/0003-local-first-data.md",
  "assets/icons/README.md",
  "starter/react-vite/README.md",
  "starter/react-vite/template/package.json",
  "starter/react-vite/template/src/App.tsx",
  "starter/react-vite/template/src/assets/icons/home.svg",
  "starter/react-vite/template/src/assets/icons/LICENSE",
];

const skills = [
  "implement-feature",
  "debug-bug",
  "code-review",
  "ui-implementation",
  "database-migration",
  "release-readiness",
];

const errors = [];
const read = (path) => readFileSync(join(root, path), "utf8");
const check = (condition, message) => {
  if (!condition) errors.push(message);
};

for (const path of requiredFiles) {
  check(existsSync(join(root, path)), `Missing required file: ${path}`);
}

for (const skill of skills) {
  const path = `.agents/skills/${skill}/SKILL.md`;
  if (!existsSync(join(root, path))) {
    errors.push(`Missing skill: ${path}`);
    continue;
  }

  const content = read(path);
  const match = content.match(/^---\r?\nname: ([a-z0-9-]+)\r?\ndescription: (.+)\r?\n---/);
  check(Boolean(match), `Invalid Agent Skills frontmatter: ${path}`);
  if (match) {
    check(match[1] === skill, `Skill name must match folder: ${path}`);
    check(match[2].length > 0 && match[2].length <= 1024, `Invalid skill description length: ${path}`);
  }
  check(content.includes("## Workflow"), `Skill must define a workflow: ${path}`);
}

let tokens;
let templatePackage;
try {
  tokens = JSON.parse(read("tokens/tokens.json"));
} catch (error) {
  errors.push(`tokens/tokens.json is invalid JSON: ${error.message}`);
}
try {
  templatePackage = JSON.parse(read("starter/react-vite/template/package.json"));
} catch (error) {
  errors.push(`Starter package.json is invalid JSON: ${error.message}`);
}

if (tokens) {
  check(Boolean(tokens.color?.brand?.primary?.value), "Missing Nawy primary color token");
  check(tokens.color.brand.primary.value === "#3D7BFF", "Nawy primary color must remain #3D7BFF unless an ADR changes it");
}

if (templatePackage) {
  const deps = { ...templatePackage.dependencies, ...templatePackage.devDependencies };
  for (const name of ["react", "react-dom", "vite", "typescript", "tailwindcss", "dexie", "zod", "vite-plugin-svgr", "vitest"]) {
    check(Boolean(deps[name]), `Starter is missing required dependency: ${name}`);
  }
  for (const [name, version] of Object.entries(deps)) {
    check(!/^(latest|\*|x)$/i.test(version), `Unpinned dependency version: ${name}@${version}`);
  }
  check(Boolean(templatePackage.scripts?.typecheck), "Starter must define a typecheck script");
  check(Boolean(templatePackage.scripts?.test), "Starter must define a test script");
  check(Boolean(templatePackage.scripts?.build), "Starter must define a build script");
}

const svg = existsSync(join(root, "starter/react-vite/template/src/assets/icons/home.svg"))
  ? read("starter/react-vite/template/src/assets/icons/home.svg")
  : "";
check(svg.includes("<svg") && svg.includes("viewBox") && svg.includes("<path"), "Starter Home icon must be a real SVG vector asset");

const app = existsSync(join(root, "starter/react-vite/template/src/App.tsx"))
  ? read("starter/react-vite/template/src/App.tsx")
  : "";
check(app.includes("home.svg?react"), "Starter must demonstrate local SVG-to-React import");

if (errors.length > 0) {
  console.error("Nawy governance validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Nawy governance validation passed. Checked ${requiredFiles.length} required files and ${skills.length} skills.`);
}
