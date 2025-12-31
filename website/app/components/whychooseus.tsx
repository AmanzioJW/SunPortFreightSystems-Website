"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Stage = {
  id: string;
  label: string;
  title: string;
  body: string;
  metric?: string;
};

const STAGES: Stage[] = [
  {
    id: "plan",
    label: "Plan & Quote",
    title: "We start with clarity, not guesswork.",
    body:
      "We analyze your lanes, freight profile, and constraints—then match you with the right mode, carriers, and routing. Transparent pricing, no hidden accessorials, and options for hazmat, oversized, and time-critical shipments.",
    metric: "Mode-optimized quotes in hours, not days.",
  },
  {
    id: "pickup",
    label: "Pickup",
    title: "On-time pickup, built for real-world operations.",
    body:
      "We coordinate carriers, appointment windows, and dock constraints so your freight moves without drama. Our network includes hazmat-certified and specialized equipment to handle sensitive and regulated cargo safely.",
    metric: "Network of vetted, compliant carriers.",
  },
  {
    id: "port",
    label: "Port & Customs",
    title: "Compliance handled before it becomes a problem.",
    body:
      "Documentation, filings, and regulatory checks are managed in advance so your freight doesn’t sit. We work with trusted partners to keep hazmat, international, and high-value cargo moving within regulations.",
    metric: "Reduced port dwell time & exceptions.",
  },
  {
    id: "linehaul",
    label: "Linehaul",
    title: "The right mode for your priorities.",
    body:
      "Whether you need speed, savings, or a hybrid solution, we design multi-modal moves across ocean, air, rail, and over-the-road. Live status, proactive exception alerts, and route optimization come standard.",
    metric: "Ocean, air, rail, and OTR in one plan.",
  },
  {
    id: "final-mile",
    label: "Final Mile",
    title: "Delivery that matches your customer promise.",
    body:
      "We coordinate final-mile carriers, appointment scheduling, and site requirements to ensure clean handoffs and proof of delivery. Your team sees status updates and documents in one place.",
    metric: "Clean PODs and fewer delivery disputes.",
  },
  {
    id: "visibility",
    label: "Visibility & Data",
    title: "One source of truth for your freight.",
    body:
      "Dashboards, real-time tracking, and shipment history give you the visibility you never get from generic brokers. We use your data to spot patterns, reduce cost, and tighten service levels over time.",
    metric: "Single pane of glass for your supply chain.",
  },
];

export default function WhyChooseSunPort() {
  const [activeId, setActiveId] = useState<string>("plan");
  const active = STAGES.find((s) => s.id === activeId) ?? STAGES[0];

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
            Building the roots for your evolving supply chain needs.
          </h2>
          <p className="max-w-xl text-sm text-slate-300 sm:text-base">
            Our mission is to deliver reliable, technology-driven freight solutions that bring
            visibility and control to every part of the supply chain. From day one,
            we strive to be a trusted partner—understanding each customer’s unique challenges,
            shaping services around their specific needs, and maintaining clear, honest
            communication throughout the entire process.
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
                Hover or click a stage to explore
              </span>
            </div>

            {/* Horizontal timeline */}
            <div className="relative mb-6 flex items-center justify-between gap-3">
              <div className="absolute left-[6px] right-[6px] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-cyan-500/60 via-indigo-500/60 to-cyan-400/50 opacity-60" />
              {STAGES.map((stage, index) => {
                const isActive = stage.id === activeId;
                return (
                  <button
                    key={stage.id}
                    onMouseEnter={() => setActiveId(stage.id)}
                    onClick={() => setActiveId(stage.id)}
                    className="relative z-10 flex flex-col items-center gap-1 text-xs sm:text-[13px]"
                  >
                    <motion.div
                      className={`flex h-8 w-8 items-center justify-center rounded-full border ${
                        isActive
                          ? "border-cyan-300 bg-slate-900 shadow-[0_0_18px_rgba(34,211,238,0.6)]"
                          : "border-slate-600 bg-slate-900/60"
                      }`}
                      layoutId="stageDot"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    >
                      <span className="text-[10px] text-slate-100">
                        {index + 1}
                      </span>
                    </motion.div>
                    <span
                      className={`whitespace-nowrap ${
                        isActive ? "text-cyan-100" : "text-slate-400"
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
