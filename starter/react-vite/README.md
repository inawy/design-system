# Nawy React + Vite Starter

قالب بداية لتطبيقات ناوي الجديدة. يوفر الحد الأدنى المتفق عليه: React، TypeScript، Vite، Tailwind CSS، Dexie، Zod، Vitest، واستيراد SVG كـ React components.

## ما الذي يتضمنه؟
- React + TypeScript + Vite.
- Tailwind CSS 4 عبر Vite plugin.
- إعداد TypeScript strict.
- CSS tokens أولية متوافقة مع Nawy Blue والثيمين.
- Dexie database entry point محلي.
- Zod للتحقق من البيانات.
- Vitest + Testing Library + jsdom.
- `vite-plugin-svgr` لاستيراد SVG عبر `?react`.
- عينة Google Material Symbols Outlined SVG مع ملف الترخيص والإسناد.
- واجهة عربية RTL كبداية.

## بدء مشروع جديد
1. انسخ محتويات مجلد `template/` إلى مستودع المشروع الجديد.
2. غيّر `name` في `package.json` واسم قاعدة البيانات في `src/lib/database.ts`.
3. ثبّت Node.js 24 LTS وpnpm 12.x.
4. شغّل:

```bash
pnpm install
pnpm dev
```

ثم احفظ `pnpm-lock.yaml` في Git. لا تبدأ التطوير الجماعي قبل حفظ lockfile.

## استخدام SVG

```tsx
import HomeIcon from "./assets/icons/home.svg?react";

<HomeIcon aria-hidden="true" className="size-6 fill-current" />
```

استورد SVG assets المحلية فقط، من مصادر معتمدة. راجع [نظام الأيقونات](../../components/README.md#icon-system).

## أوامر المشروع

```bash
pnpm dev
pnpm typecheck
pnpm test
pnpm build
pnpm preview
```

## CI

يوجد workflow في المستودع للتحقق من القالب عبر:
- TypeScript typecheck.
- Vitest unit/component tests.
- Production build.

لأن قالب البداية لا يحتوي lockfile، ينفذ CI تثبيتًا مؤقتًا غير مقفل. عند نسخ القالب إلى تطبيق، أنشئ lockfile واحفظه، ثم اجعل CI الخاص بالتطبيق يستخدم تثبيتًا مقفلًا.

## إضافات عند الحاجة

```bash
pnpm add react-router
pnpm add @tanstack/react-query
pnpm add -D vite-plugin-pwa
pnpm add react-hook-form @hookform/resolvers
pnpm dlx shadcn@latest init
```

لا تضف هذه الحزم تلقائيًا. أضف ما يحتاجه المنتج فقط، وتحقق من توافق النسخ مع Vite وReact وNode.

## قبل الإنتاج
- استبدل عنوان واسم التطبيق.
- أضف شعارًا وأيقونات وmanifest خاصًا بالمنتج.
- أضف Cairo كملف محلي أو أصل موثوق عند الحاجة؛ القالب لا يحمّله تلقائيًا.
- راجع ألوان الثيم وتباينها على الشاشات الفعلية.
- أضف schema وmigrations حقيقية لقاعدة البيانات.
- أضف backup/export إذا كانت بيانات المستخدم مهمة.
- أضف Playwright لتدفقات المستخدم الحرجة.
- أضف PWA caching بعد تحديد ما يجب تخزينه دون تعريض بيانات خاصة للخطر.
- اضبط `base` في Vite عند استخدام GitHub Pages project path؛ النطاق المستقل غالبًا يستخدم `/`.
- راجع AI Guidelines وEngineering Standards.

**تنبيه:** هذا قالب أساس قابل للبدء والتطوير، وليس تطبيقًا إنتاجيًا جاهزًا بمجرد النسخ.
