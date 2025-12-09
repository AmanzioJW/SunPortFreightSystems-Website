'use client'

import dynamic from "next/dynamic";

const SupplyChainMap = dynamic(() => import("./SupplyChainMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full animate-pulse rounded-3xl bg-slate-800" />
  ),
});

export default function HeroSupplyChain() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center">
        {/* Left column – copy */}
        <div className="flex-1 space-y-6">
          <p className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-300">
            Live Supply Chain Visibility
          </p>

          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Smart freight connections with
            <span className="text-emerald-300"> global route visibility</span>.
          </h1>

          <p className="max-w-xl text-sm text-slate-300 sm:text-base">
            Watch your shipments move across ocean, air, rail, and road in
            real time. One interactive map to plan routes, track loads, and
            keep your entire supply chain in view.
          </p>

          <div className="flex flex-wrap gap-3">
            <button className="rounded-full bg-emerald-400 px-5 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-300">
              Book a Shipment
            </button>
            <button className="rounded-full border border-slate-600 px-5 py-2 text-sm font-medium text-slate-100 hover:border-slate-400">
              Track a Load
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-6 text-xs text-slate-300 sm:text-sm">
            <div>
              <p className="text-lg font-semibold text-emerald-300">4</p>
              <p>Modes: ocean · air · rail · truck</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-emerald-300">24/7</p>
              <p>Operations monitoring</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-emerald-300">1</p>
              <p>Unified supply chain map</p>
            </div>
          </div>
        </div>

        {/* Right column – interactive map */}
        <div className="flex-1">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-[0_24px_80px_rgba(0,0,0,0.7)]">
            <SupplyChainMap />
            {/* Optional subtle gradient overlay for branding */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-950/60 via-transparent to-emerald-500/10" />
          </div>
        </div>
      </div>
    </section>
  );
}