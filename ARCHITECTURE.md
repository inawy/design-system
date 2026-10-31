# Nawy Architecture Reference

هذا الملف يحدد المبادئ المعمارية المشتركة. لا يصف تنفيذ تطبيق بعينه.

## نطاق هذا المستودع

مستودع `inawy/design-system` هو مرجع توثيق ومعايير وقالب بداية. ليس تطبيقًا تشغيليًا ولا backend ولا مكتبة UI منشورة كحزمة npm حتى الآن.

## Architecture defaults للمشروعات الجديدة

عند ملاءمة طبيعة المنتج:
- React + TypeScript + Vite لتطبيق الويب.
- Tailwind CSS مع Nawy Design Tokens.
- طبقة UI منفصلة عن domain logic وdata access.
- Dexie/IndexedDB للتخزين المحلي المنظم عندما تكون Local-first حاجة فعلية.
- repositories/services كحد فاصل بين الواجهة ومصدر البيانات.
- Zod للتحقق عند حدود البيانات.
- Vitest وTesting Library للاختبارات، وPlaywright لتدفقات المستخدم المهمة.

راجع `TECHNOLOGY-STACK.md` و`ENGINEERING-STANDARDS.md`؛ لا تعتبر القائمة إلزامية لكل منتج.

## بنية تطبيق مقترحة

```text
src/
├── app/                  # bootstrap, routing, providers
├── features/             # feature/domain slices
├── shared/               # shared UI and utilities
├── data/
│   ├── db/               # Dexie/database setup
│   ├── repositories/     # data access boundaries
│   └── migrations/       # versioned migrations
├── assets/
│   └── icons/            # approved local SVG assets
└── test/
```

ابدأ ببنية صغيرة، ثم افصل features عندما يظهر حجم أو تكرار يبرر ذلك.

## Required per-product architecture record

أي مشروع منتج يجب أن يحتفظ بوثيقة معمارية خاصة به، مثل `docs/ARCHITECTURE.md`، وتشمل:
- اسم المشروع والغرض والنطاق.
- runtime وframework وإصداراتها الفعلية.
- entry points وتدفق البيانات.
- التخزين المحلي والسحابي، مع توضيح ما يُرسل إلى الخادم.
- auth والحدود الأمنية وRLS إن وجدت.
- sync وbackup وحل التعارضات إن وجدت.
- integrations وواجهات API.
- build/test/deploy commands.
- المخاطر والقيود المعروفة.

وثيقة هذا المستودع لا تحل محل وثيقة التطبيق. لا تفترض أن التطبيق يطابق القالب لمجرد أنه تابع لناوي.
