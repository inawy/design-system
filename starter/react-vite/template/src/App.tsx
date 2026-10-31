import { useState } from "react";
import HomeIcon from "./assets/icons/home.svg?react";

export default function App() {
  const [started, setStarted] = useState(false);

  return (
    <main className="mx-auto flex min-h-svh w-full max-w-3xl flex-col justify-center gap-6 px-5 py-12">
      <div className="space-y-2">
        <p className="flex items-center gap-2 text-sm font-medium text-brand">
          <HomeIcon aria-hidden="true" className="size-5 fill-current" />
          Nawy · Starter
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          ابدأ مشروع ناوي من هنا
        </h1>
        <p className="max-w-prose text-base leading-8 text-muted">
          بيئة تأسيسية جاهزة. أضف تجربة منتجك، ولا تحتفظ بأي مكون أو شاشة لا
          تخدم هدفه.
        </p>
      </div>

      <section className="rounded-2xl border border-line bg-surface p-5 shadow-sm">
        <p className="mb-4 text-sm text-muted">
          مثال تفاعل للتأكد من عمل React وTailwind.
        </p>
        <button
          className="rounded-xl bg-brand px-5 py-3 font-semibold text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          onClick={() => setStarted((value) => !value)}
          type="button"
        >
          {started ? "تم التفعيل" : "اختبر التفاعل"}
        </button>
      </section>
    </main>
  );
}
