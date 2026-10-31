# Nawy Design & Engineering System

المستودع المرجعي المشترك لهوية وتصميم وهندسة منتجات **ناوي**. يحدد كيف تبدو المنتجات، وكيف تُبنى، وكيف يتعامل معها وكلاء البرمجة بالذكاء الاصطناعي.

> **المبدأ:** هوية مشتركة، وتجارب متخصصة، وهندسة قابلة للصيانة، وادعاءات مبنية على أدلة.

## ابدأ من هنا

### AI Governance
1. [AGENTS.md](AGENTS.md) — تعليمات جذرية لوكلاء البرمجة.
2. [GOVERNANCE.md](GOVERNANCE.md) — نموذج الحوكمة وتصنيف المعرفة.
3. [PRODUCT-FACTS.md](PRODUCT-FACTS.md) — الحقائق المؤكدة والقرارات والافتراضات والمجهولات.
4. [SECURITY-AND-APPROVALS.md](SECURITY-AND-APPROVALS.md) — الأمان والإجراءات التي تحتاج موافقة.
5. [KNOWN-LIMITATIONS.md](KNOWN-LIMITATIONS.md) — ما لم يُنفذ أو لم يتم التحقق منه.
6. [Skill Catalog](SKILL-CATALOG.md) — فهرس المهارات المشتركة ومتى تستخدمها.
7. [Skills](.agents/skills/) — ملفات المهارات التي يحمّلها الوكيل عند الحاجة.
8. [Third-party notices](THIRD-PARTY-NOTICES.md) و[Sources registry](agent-skills.sources.json) — مصدر وترخيص وإصدار المهارات الخارجية.
9. [DECISIONS](DECISIONS/) — سجل القرارات المعمارية.

### التصميم
1. [Design System](DESIGN-SYSTEM.md)
2. [Foundations](foundations/README.md)
3. [Design Tokens CSS](tokens/tokens.css) و[JSON](tokens/tokens.json)
4. [Components and Icons](components/README.md)
5. [Assets and SVG licenses](assets/icons/README.md)

### الهندسة والتطوير
1. [Technology Stack](TECHNOLOGY-STACK.md)
2. [Engineering Standards](ENGINEERING-STANDARDS.md)
3. [Architecture Reference](ARCHITECTURE.md)
4. [Starter Template](starter/react-vite/README.md)
5. [AI Guidelines](AI-GUIDELINES.md)
6. [Optional technology skills](docs/optional-agent-skills.md)

## Automated checks

- `Nawy Governance`: validates required governance files, all Agent Skills manifests and workflows, source provenance, token JSON and starter metadata.
- `Nawy Starter Template CI`: runs typecheck, tests and production build for the starter when it changes.

هذه الفحوصات لا تثبت أن كل تطبيق جاهز للإنتاج ولا تضمن منع كل هلوسة؛ راجع نتائج CI الفعلية قبل الادعاء بالنجاح.

## القرارات الأساسية

- Nawy Blue: `#3D7BFF`.
- الخط العربي الأساسي: Cairo.
- دعم RTL للعربية وLTR للإنجليزية.
- Default Stack: React + TypeScript + Vite + Tailwind CSS.
- Local-first عند ملاءمته: Dexie + IndexedDB.
- أيقونات الواجهة: Google Material Symbols SVG — Outlined.

## سياسة التغيير

أي تغيير في قرار مشترك يجب أن يوضح المشكلة والبدائل والأثر على التطبيقات الحالية. حدّث التوثيق وADR والقالب عند الحاجة. راجع [CHANGELOG](CHANGELOG.md).
