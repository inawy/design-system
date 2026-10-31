# Nawy Design & Engineering System

المستودع المرجعي المشترك لهوية وتصميم وهندسة منتجات **ناوي**. يحدد كيف تبدو المنتجات، وكيف تُبنى، وكيف يتعامل معها وكلاء البرمجة بالذكاء الاصطناعي.

> **المبدأ:** هوية مشتركة، وتجارب متخصصة، وهندسة قابلة للصيانة.

## ابدأ من هنا

### التصميم
1. [دليل نظام التصميم](DESIGN-SYSTEM.md)
2. [الأساسيات البصرية](foundations/README.md)
3. [Design Tokens CSS](tokens/tokens.css) و[JSON](tokens/tokens.json)
4. [المكونات](components/README.md) و[أنماط التجربة](patterns/README.md)

### الهندسة والتطوير
1. [Technology Stack](TECHNOLOGY-STACK.md) — التقنيات الافتراضية ومتى نختار غيرها.
2. [Engineering Standards](ENGINEERING-STANDARDS.md) — قواعد المعمارية والكود والبيانات والأمان والاختبارات.
3. [Starter Template](starter/react-vite/README.md) — نقطة بداية لمشروع React + TypeScript + Vite.
4. [AI Guidelines](AI-GUIDELINES.md) — تعليمات وكلاء Vibe Coding.

## هيكل المستودع

```text
design-system/
├── README.md
├── DESIGN-SYSTEM.md
├── TECHNOLOGY-STACK.md
├── ENGINEERING-STANDARDS.md
├── AI-GUIDELINES.md
├── CHANGELOG.md
├── foundations/
├── tokens/
├── components/
├── patterns/
└── starter/
    └── react-vite/
        ├── README.md
        └── template/
```

## القرارات الأساسية

- Nawy Blue: `#3D7BFF`.
- الخط العربي الأساسي: Cairo.
- دعم RTL للعربية وLTR للإنجليزية.
- Default Stack: React + TypeScript + Vite + Tailwind CSS.
- Local-first عند ملاءمته: Dexie + IndexedDB.
- الاختبارات: Vitest + Testing Library، وPlaywright لتدفقات E2E.
- اختيار Next.js أو backend أو cloud database يكون بناءً على احتياج موثق.

## سياسة التغيير

أي تغيير في قرار مشترك يجب أن يوضح المشكلة والبدائل والأثر على التطبيقات الحالية وخطة الترحيل إن وجدت. حدّث التوثيق والقالب معًا عند تغيير الستاك. راجع [CHANGELOG](CHANGELOG.md).

القيم المقترحة أو الإصدارات المرجعية لا تُعامل كحقائق دائمة؛ راجع صفحة Technology Stack عند إنشاء مشروع أو ترقية dependencies.
