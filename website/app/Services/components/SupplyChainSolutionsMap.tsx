"use client";

import { useState } from "react";

type ProblemId =
  | "visibility"
  | "cost"
  | "capacity"
  | "compliance"
  | "delays"
  | "communication"
  | "special"
  | "hazmat";

const PROBLEMS: {
  id: ProblemId;
  label: string;
  headline: string;
  problem: string;
  approach: string[];
  outcomes: string[];
  services: string[];
}[] = [
  {
    id: "visibility",
    label: "Limited Visibility",
    headline: "Turn blind spots into clear milestones.",
    problem:
      "Cargo is moving, but teams and customers feel in the dark until delivery. Updates are manual, late, or inconsistent.",
    approach: [
      "Centralize status updates across modes into a single view.",
      "Standardize milestones from pickup to delivery.",
      "Provide secure portal access for shippers and internal teams."
    ],
    outcomes: [
      "Stakeholders always know the latest status.",
      "Fewer “where is my shipment?” emails and calls.",
      "More control over exceptions before they become crises."
    ],
    services: ["Tracking & Visibility", "Customer Portal", "TMS / API Integrations"]
  },
  {
    id: "cost",
    label: "High or Unpredictable Costs",
    headline: "Make freight decisions with cost clarity.",
    problem:
      "Rates swing, accessorials appear after the fact, and routing choices aren’t clear upfront.",
    approach: [
      "Compare routes and modes side-by-side before booking.",
      "Surface accessorial risks and timing trade-offs upfront.",
      "Use lane history to recommend cost-sensitive options."
    ],
    outcomes: [
      "Fewer surprises on invoices.",
      "Ability to choose speed vs. cost with eyes open.",
      "Better budgeting and lane planning over time."
    ],
    services: ["Mode & Lane Optimization", "Rate & Route Planning", "Spend Reporting"]
  },
  {
    id: "capacity",
    label: "Capacity Shortages",
    headline: "Keep freight moving when the market is tight.",
    problem:
      "When demand spikes, finding reliable trucks, rail, or vessel space becomes a daily fire drill.",
    approach: [
      "Tap into multi-mode carrier networks instead of relying on a single option.",
      "Pre-plan critical lanes with preferred capacity where possible.",
      "Provide alternatives when original plans get constrained."
    ],
    outcomes: [
      "Higher odds of securing space when it matters most.",
      "Less scrambling at the last minute.",
      "More consistent performance on critical lanes."
    ],
    services: ["Truckload & LTL", "Ocean & Air", "Intermodal & Rail"]
  },
  {
    id: "compliance",
    label: "Customs & Compliance",
    headline: "Move freight without paperwork holding it back.",
    problem:
      "Missing or incorrect documents create holds, storage charges, and confusion at the worst possible moment.",
    approach: [
      "Clarify what documents are needed for the lane and commodity.",
      "Coordinate information between shipper, carrier, and customs partners.",
      "Track key compliance steps alongside shipment milestones."
    ],
    outcomes: [
      "Fewer avoidable delays at borders and ports.",
      "Less time spent chasing forms and signatures.",
      "More predictable transit from door to door."
    ],
    services: ["Customs Coordination", "Documentation Support", "Compliance Monitoring"]
  },
  {
    id: "delays",
    label: "Delays & Disruptions",
    headline: "Respond fast when plans change.",
    problem:
      "Weather, congestion, mechanical issues, or port backlogs turn a simple move into a costly surprise.",
    approach: [
      "Monitor shipments against planned milestones.",
      "Flag exceptions early so options can be evaluated.",
      "Offer re-routing and re-scheduling paths when needed."
    ],
    outcomes: [
      "More time to react when something goes wrong.",
      "Better decisions on expedite vs. replan.",
      "Less impact to end customers when disruptions hit."
    ],
    services: ["Exception Management", "Expedite Options", "Contingency Routing"]
  },
  {
    id: "communication",
    label: "Fragmented Partners",
    headline: "One accountable point of coordination.",
    problem:
      "Multiple carriers, warehouses, and brokers mean no single party owns the whole picture.",
    approach: [
      "Provide a central coordination point from pickup to delivery.",
      "Align expectations across all parties before the move starts.",
      "Keep communication flowing through one consistent channel."
    ],
    outcomes: [
      "Less finger-pointing between partners.",
      "Simpler escalation when something needs attention.",
      "Clear ownership for the end-to-end move."
    ],
    services: ["Managed Transportation", "Control Tower Support", "Shipper & Carrier Portals"]
  },
  {
    id: "special",
    label: "Specialized & Sensitive Freight",
    headline: "Extra care for freight that can’t afford mistakes.",
    problem:
      "Hazmat, high-value, temperature-sensitive, or oversized freight requires more than standard handling.",
    approach: [
      "Work with carriers that meet required training and equipment standards.",
      "Align documentation and handling instructions before pickup.",
      "Monitor hand-offs closely where risk is highest."
    ],
    outcomes: [
      "Greater confidence for sensitive shipments.",
      "Lower risk of compliance or handling errors.",
      "A partner who understands what’s at stake."
    ],
    services: ["Hazmat-Capable Capacity", "High-Value Coordination", "Special Handling Support"]
  },
  {
    id: "hazmat",
    label: "Hazardous Materials",
    headline: "Compliance-first moves for regulated freight.",
    problem:
      "Dangerous goods require strict documentation, trained handlers, and mode-specific compliance. Mistakes lead to delays, fines, or safety risks.",
    approach: [
      "Verify classification, packaging, and labels before pickup.",
      "Work with carriers holding appropriate hazmat certifications.",
      "Track compliance steps alongside hand-offs and milestones."
    ],
    outcomes: [
      "Greater safety and compliance confidence across the route.",
      "Fewer delays tied to mislabeling or missing paperwork.",
      "Peace of mind with higher-risk products."
    ],
    services: ["Hazmat-Capable Capacity", "Compliance Support", "Documentation Guidance"]
}
];

export function SupplyChainSolutionsMap() {
  const [activeId, setActiveId] = useState<ProblemId>("visibility");

  const active = PROBLEMS.find((p) => p.id === activeId)!;

  return (
    <section className="w-full bg-slate-950 text-slate-50 py-16 px-4 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col gap-4 mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-teal-300">
            SunPort Freight Systems
          </p>
          <h2 className="text-2xl md:text-4xl font-semibold leading-tight">
            High-level view of how SunPort tackles supply chain problems.
          </h2>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl">
            Most supply chain issues fall into a few core buckets. Pick what&apos;s holding you
            back and see how SunPort helps you move from uncertainty to control.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.8fr)] items-start">
          {/* Left: problem selector */}
          <div className="space-y-4">
            <p className="text-xs font-medium text-slate-400 uppercase tracking-[0.18em]">
              Select a challenge
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {PROBLEMS.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className={[
                      "rounded-2xl border text-left text-xs sm:text-sm px-3 py-2.5 transition-all",
                      "hover:border-teal-400/80 hover:bg-slate-900/60",
                      isActive
                        ? "border-teal-400 bg-slate-900 shadow-[0_0_0_1px_rgba(45,212,191,0.5)]"
                        : "border-slate-700 bg-slate-900/40"
                    ].join(" ")}
                  >
                    <span className="block font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Simple legend */}
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <span className="inline-block h-2 w-2 rounded-full bg-teal-400" />
              <span>Active challenge</span>
            </div>
          </div>

          {/* Right: active problem details */}
          <div className="rounded-3xl border border-slate-700 bg-slate-900/60 p-5 sm:p-7 lg:p-8 shadow-xl shadow-black/40">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                  Overview
                </p>
                <h3 className="text-xl md:text-2xl font-semibold mt-1">{active.headline}</h3>
              </div>
              <span className="inline-flex items-center rounded-full border border-slate-600 bg-slate-900 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-300">
                {active.label}
              </span>
            </div>

            <div className="space-y-5 text-sm md:text-[15px]">
              {/* Problem */}
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-1.5">
                  The challenge
                </p>
                <p className="text-slate-100">{active.problem}</p>
              </div>

              {/* SunPort approach */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-1.5">
                    How SunPort responds
                  </p>
                  <ul className="space-y-1.5 text-slate-100">
                    {active.approach.map((line, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-400 shrink-0" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-1.5">
                    What this unlocks
                  </p>
                  <ul className="space-y-1.5 text-slate-100">
                    {active.outcomes.map((line, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300 shrink-0" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Services tags */}
              <div className="pt-1">
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-1.5">
                  Where this lives in your services
                </p>
                <div className="flex flex-wrap gap-2">
                  {active.services.map((svc) => (
                    <span
                      key={svc}
                      className="inline-flex items-center rounded-full border border-slate-600 bg-slate-950/80 px-3 py-1 text-[11px] text-slate-100"
                    >
                      {svc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA row */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-teal-400 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-teal-300 transition-colors"
              >
                Talk through this challenge
              </button>
              <button
                type="button"
                className="text-xs text-slate-300 hover:text-teal-300 underline underline-offset-4"
              >
                See how SunPort structures a solution
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
