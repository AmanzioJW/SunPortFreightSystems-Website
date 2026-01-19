"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/app/components/ui/button";

const STAGES = [
  {
    id: "plan",
    label: "Plan & Quote",
    title: "Clarity and options before you commit.",
    body:
      "We review lanes, equipment needs, accessorials, and timing constraints, then build a plan across modes. Pricing is transparent and documented so your teams stay aligned.",
    metric: "Accurate quotes in hours, not days.",
  },
  {
    id: "pickup",
    label: "Pickup",
    title: "Pickup coordination that keeps docks moving.",
    body:
      "Carrier appointment windows, equipment checks, and site rules are confirmed before dispatch. Hazmat and specialized equipment are verified so freight moves safely the first time.",
    metric: "Vetted, compliant carriers with the right equipment.",
  },
  {
    id: "port",
    label: "Port & Customs",
    title: "Compliance handled upstream.",
    body:
      "Documentation, filings, and partner coordination happen early, reducing holds at ports, terminals, and border crossings. We keep stakeholders synced through every milestone.",
    metric: "Fewer holds and faster clearance.",
  },
  {
    id: "linehaul",
    label: "Linehaul",
    title: "Mode selection built around your priorities.",
    body:
      "We design multi-modal routes across ocean, air, rail, and over-the-road to balance speed, cost, and resilience. Live tracking and proactive exception alerts are standard.",
    metric: "One plan for ocean, air, rail, and OTR.",
  },
  {
    id: "final-mile",
    label: "Final Mile",
    title: "Deliveries that protect your customer promise.",
    body:
      "Appointment scheduling, site requirements, and proof of delivery are coordinated for clean handoffs. Your team sees signatures and documents in one place.",
    metric: "Cleaner PODs and fewer delivery disputes.",
  },
  {
    id: "visibility",
    label: "Visibility & Data",
    title: "A single source of truth.",
    body:
      "Dashboards, real-time tracking, and shipment history reveal trends, reduce cost, and tighten service levels over time. You get visibility beyond a standard broker portal.",
    metric: "Real-time visibility with actionable insights.",
  },
];

export default function WhyChooseSunPort() {
  const [activeId, setActiveId] = useState("plan");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const active = STAGES.find((s) => s.id === activeId) ?? STAGES[0];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveId((prev) => {
        const currentIndex = STAGES.findIndex((stage) => stage.id === prev);
        const nextIndex =
          currentIndex === -1 ? 0 : (currentIndex + 1) % STAGES.length;
        return STAGES[nextIndex].id;
      });
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-slate-950 text-slate-50">
      {/* Gradient / glow background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(129,140,248,0.2),_transparent_55%)] opacity-80" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-stretch lg:py-20">
        {/* Left: Headline */}
        <div className="flex-1 space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Why Shippers Choose SunPort
          </p>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Built for the real-world pressures of modern freight.
          </h2>
          <p className="max-w-xl text-sm text-slate-300 sm:text-base">
            SunPort Freight Systems delivers dependable, technology-driven freight solutions
            that bring visibility and control to every shipment. We learn your constraints,
            shape services around your goals, and communicate clearly at every milestone.
          </p>

          <div className="mt-4 flex flex-wrap gap-3 text-xs sm:text-sm">
            <span className="rounded-full border border-cyan-400/60 px-3 py-1 text-cyan-100">
              Multi-modal: ocean · air · rail · truck
            </span>
            <span className="rounded-full border border-indigo-400/60 px-3 py-1 text-indigo-100">
              Hazmat-ready solutions
            </span>
            <span className="rounded-full border border-slate-500/60 px-3 py-1 text-slate-100">
              Real-time visibility & alerts
            </span>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              asChild
              className="bg-cyan-400 text-slate-950 hover:bg-cyan-300"
            >
              <Link href="/Contact">Request a Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-slate-700 text-slate-100 hover:bg-slate-900"
            >
              <Link href="/Services">Explore Services</Link>
            </Button>
          </div>
        </div>

        {/* Right: Interactive journey */}
        <div className="flex-1">
          {/* Path */}
          <div className="relative rounded-2xl border border-slate-800 bg-slate-900/40 p-4 shadow-2xl shadow-cyan-500/10 backdrop-blur">
            <div className="mb-6 flex items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Supply Chain Journey
              </p>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-[11px] text-slate-300">
                Auto-rotates every 30s — click to explore, hover to preview
              </span>
            </div>

            {/* Horizontal timeline */}
            <div className="relative mb-6 flex items-center justify-between gap-3">
              <div className="absolute left-[6px] right-[6px] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-cyan-500/60 via-indigo-500/60 to-cyan-400/50 opacity-60" />
              {STAGES.map((stage, index) => {
                const isActive = stage.id === activeId;
                const isHovered = stage.id === hoveredId;
                const isEmphasized = isActive || isHovered;
                return (
                  <button
                    key={stage.id}
                    onMouseEnter={() => setHoveredId(stage.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onClick={() => setActiveId(stage.id)}
                    type="button"
                    className="relative z-10 flex flex-col items-center gap-1 text-xs sm:text-[13px]"
                  >
                    <motion.div
                      className={`flex h-8 w-8 items-center justify-center rounded-full border ${
                        isActive
                          ? "border-cyan-300 bg-slate-900 shadow-[0_0_18px_rgba(34,211,238,0.6)]"
                          : isHovered
                          ? "border-cyan-300/70 bg-slate-900 shadow-[0_0_12px_rgba(34,211,238,0.35)]"
                          : "border-slate-600 bg-slate-900/60"
                      }`}
                      layoutId="stageDot"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    >
                      <span
                        className={`text-[10px] ${
                          isEmphasized ? "text-cyan-100" : "text-slate-100"
                        }`}
                      >
                        {index + 1}
                      </span>
                    </motion.div>
                    <span
                      className={`whitespace-nowrap ${
                        isEmphasized ? "text-cyan-100" : "text-slate-400"
                      }`}
                    >
                      {stage.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Detail panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 sm:p-5"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  {active.label}
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-50 sm:text-lg">
                  {active.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300">{active.body}</p>

                {active.metric && (
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-[11px] text-cyan-100">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    {active.metric}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
