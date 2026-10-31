# Nawy Technology Stack

المعيار التقني الافتراضي لبناء منتجات ناوي باستخدام البرمجة التقليدية أو Vibe Coding.

> **Default, not dogma:** هذه نقطة البداية لأي مشروع جديد. يجوز تغيير التقنية عندما تفرض طبيعة المنتج ذلك، مع توثيق السبب.

## 1. Default Stack

| الطبقة | الاختيار الافتراضي |
|---|---|
| Runtime | Node.js 24 LTS |
| Package manager | pnpm 12.x |
| UI | React 19.3.x |
| Language | TypeScript 7.x |
| Build tool | Vite 8.x |
| CSS | Tailwind CSS 4.x |
| Local database | Dexie 4.x + IndexedDB |
| Validation | Zod 4.x |
| Unit/component tests | Vitest 5.x + Testing Library |
| Browser E2E | Playwright 1.x |
| Icons | Google Material Symbols — SVG Outlined |
| SVG-to-React | vite-plugin-svgr 5.2.x |
| PWA | vite-plugin-pwa عند الحاجة فقط |

## 2. Baseline checked on 2026-10-31

الإصدارات التالية خط أساس عند تأسيس المعيار وليست أرقامًا دائمة. افحص التوافق قبل بدء مشروع جديد أو ترقية كبرى، وثبّت الإصدارات واحفظ `pnpm-lock.yaml`.

| الحزمة | خط الأساس |
|---|---:|
| Node.js | 24 LTS |
| pnpm | 12.7.0 |
| React / React DOM | 19.3.0 |
| Vite | 8.3.5 |
| @vitejs/plugin-react | 6.1.2 |
| TypeScript | 7.0.2 |
| Tailwind CSS / @tailwindcss/vite | 4.3.3 |
| Dexie | 4.4.7 |
| Zod | 4.x |
| TanStack Query (اختياري) | 5.105.0 |
| Vitest | 5.0.5 |
| Playwright | 1.64.1 |
| Testing Library React | 16.3.3 |
| vite-plugin-svgr | 5.2.0 |

**اختيار Node:** نعتمد Node 24 LTS للاستقرار ولا نطارد Current أو Alpha/Beta/RC في الإنتاج. راجع [جدول إصدارات Node.js](https://github.com/nodejs/Release/blob/main/README.md).

## 3. إنشاء مشروع جديد

ابدأ بقالب Vite الرسمي ثم طبّق إعدادات ناوي، أو انسخ [القالب الرسمي](starter/react-vite/README.md). بعد التثبيت احفظ `pnpm-lock.yaml` في Git قبل بدء العمل الجماعي.

مراجع: [Vite](https://vite.dev/guide/)، [React versions](https://react.dev/versions)، [Tailwind + Vite](https://tailwindcss.com/docs/installation/using-vite)، [Vitest](https://vitest.dev/guide/)، [Dexie](https://dexie.org/).

## 4. حزم اختيارية — لا تثبتها تلقائيًا

| الحاجة | الخيار |
|---|---|
| التنقل بين صفحات | React Router |
| طلبات وحالة بيانات الخادم | TanStack Query |
| حالة مشتركة معقدة فعلًا | Zustand |
| نماذج كبيرة | React Hook Form + Zod |
| مكونات جاهزة قابلة للتعديل | shadcn/ui بشكل انتقائي |
| PWA / Service Worker | vite-plugin-pwa |
| Backend / Auth / Cloud DB | Supabase عند الحاجة المثبتة |
| صفحات محتوى وSEO ثابتة | Astro |
| SSR أو Server Components أو backend مدمج | Next.js أو React Router Framework Mode بعد تقييم الاحتياج |

ابدأ بـ React state وContext. لا تضف Zustand إذا كان React كافيًا، ولا تستخدم TanStack Query لإدارة بيانات IndexedDB المحلية؛ هو لحالة الخادم والطلبات الشبكية.

## 5. SVG assets and icons

- استخدم ملفات SVG فعلية من [Google Material Symbols](https://github.com/google/material-design-icons)، بأسلوب Outlined كاختيار افتراضي.
- استورد الأصول المختارة من المشروع نفسه، لا تعتمد على اتصال خارجي لجلب الأيقونات وقت التشغيل.
- استخدم `vite-plugin-svgr` لتحويل SVG إلى React components عبر `?react`.
- لا تستخدم Emoji أو icon fonts أو مكتبات بديلة كبديل افتراضي لأصول SVG.
- راجع [نظام الأيقونات](components/README.md#icon-system) لحوكمة المصدر والترخيص والإتاحة.

## 6. قواعد اختيار المعمارية

**React + Vite** هو الخيار الأول لأدوات الويب التفاعلية، والمساحات الشخصية، وتطبيقات SPA/PWA التي يمكن تقديمها كملفات ثابتة ولا تحتاج SSR أساسيًا.

اختر إطارًا يدعم SSR عندما تحتاج صفحات عامة إلى SEO قوي، أو rendering على الخادم، أو server components، أو backend مدمج يجعل الإطار مبررًا. لا تستخدم Next.js لمجرد أنه مشهور أو لأن المشروع يستخدم React.

## 7. Data strategy لناوي

الاتجاه المفضل هو **Local-first** عندما يناسب المنتج:
- IndexedDB عبر Dexie للتخزين المنظم داخل المتصفح.
- طبقة repositories/services تفصل واجهة التطبيق عن قاعدة البيانات.
- Zod للتحقق من البيانات عند حدود الإدخال والاستيراد وواجهات API.
- تصدير واستيراد واضحان عندما تكون البيانات مهمة.
- مزامنة أو نسخ احتياطي اختياريان، مع تصميم تعارضات البيانات قبل تفعيل المزامنة.
- Supabase أو أي backend ليس شرطًا لتشغيل التطبيق المحلي.

لا تكتب مباشرة إلى IndexedDB من مكونات الواجهة في كل مكان.

## 8. Hosting & delivery

- SPA/PWA ثابت: GitHub Pages أو Cloudflare Pages أو استضافة ملفات ثابتة مناسبة.
- SSR أو server runtime: استضافة تدعم runtime المطلوب.
- استخدم GitHub Actions لتشغيل typecheck وtests وbuild قبل النشر.
- لا تضع مفاتيح سرية في كود المتصفح أو متغيرات `VITE_*`؛ هذه المتغيرات متاحة للعميل.

## 9. سياسة الإصدارات

- لا تستخدم `latest` في package.json لمشروع إنتاجي.
- احفظ lockfile والتزم بالتثبيت المقفل في CI.
- لا ترفع كل الحزم معًا دون مراجعة changelog والتوافق.
- حدّث الحزم بانتظام مع تشغيل الاختبارات.
- لا تستخدم Alpha/Beta/RC في الإنتاج إلا بقرار موثق.
- أي ترقية كبرى تؤثر في القالب أو المعايير يجب توثيقها في CHANGELOG.

## 10. القرار النهائي

**الافتراضي:** React + TypeScript + Vite + Tailwind CSS.

**التخزين المحلي:** Dexie + IndexedDB.

**الأيقونات:** Google Material Symbols بصيغة SVG — Outlined.

**ضمان الجودة:** Vitest + Testing Library + Playwright.

**السحابة:** Supabase أو خدمة أخرى عند وجود حاجة حقيقية، وليس افتراضيًا.

**لـ Vibe Coding:** ابدأ من القالب الرسمي، اقرأ تعليمات الوكيل، واختبر الناتج بدل الاكتفاء بأن الكود يبدو صحيحًا.
