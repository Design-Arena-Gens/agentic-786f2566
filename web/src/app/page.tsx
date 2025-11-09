'use client';

import { useMemo, useState } from "react";
import { format } from "date-fns";

export default function Home() {
  const [name, setName] = useState("");

  const greeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 5) return "It's a quiet night";
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  }, []);

  const displayName = name.trim() ? name.trim() : "there";

  const timestamp = useMemo(() => format(new Date(), "EEEE, MMMM do yyyy"), []);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 px-6 py-16 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.32),_transparent_60%)]" />
      <div className="absolute inset-y-0 right-[-30%] -z-10 h-[120%] w-[70%] rounded-full bg-[radial-gradient(circle,_rgba(244,114,182,0.28),_transparent_65%)] blur-3xl" />

      <main className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/10 p-10 backdrop-blur-lg">
        <span className="text-sm uppercase tracking-[0.3em] text-cyan-200">
          {timestamp}
        </span>
        <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
          Hello, {displayName}!
        </h1>
        <p className="mt-4 text-lg text-cyan-100/80">{greeting}. Stay curious.</p>

        <form
          className="mt-10 flex flex-col gap-3 sm:flex-row"
          onSubmit={(event) => {
            event.preventDefault();
            const form = event.currentTarget;
            const input = form.querySelector("input");
            input?.blur();
          }}
        >
          <label className="flex-1">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-cyan-200/80">
              Share your name
            </span>
            <input
              className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-base text-white outline-none transition focus:border-cyan-200 focus:bg-white/15"
              placeholder="e.g., Ada Lovelace"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <button
            type="submit"
            className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-slate-950 transition hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-100"
          >
            Update
          </button>
        </form>

        <section className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { title: "Wave hello", description: "Send a kind message to someone nearby." },
            { title: "Start something", description: "Sketch an idea, ship a draft, begin a journey." },
            { title: "Take a breath", description: "Pause for ten seconds, look around, notice the details." },
          ].map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-cyan-200/60 hover:bg-black/10"
            >
              <h2 className="text-lg font-semibold text-white">{card.title}</h2>
              <p className="mt-1 text-sm text-cyan-100/80">{card.description}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
