import CardFlip from "@/app/components/mvpblocks/card-flip"

export default function Solutions() {
    return (
        <section id="services" className="relative">
            <div
                aria-hidden
                className="mask-b-from-65% pointer-events-none absolute -left-2 right-0 -mt-12 sm:-top-24 lg:inset-x-0 lg:-top-32">
                <svg
                    viewBox="0 0 2400 1653"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-foreground/15 fill-background/35 w-full">
                    <path
                        d="M6.81602 605.752L38.684 642.748C42.4362 647.104 44.5 652.662 44.5 658.411V1628.23C44.5 1641.59 55.4076 1652.38 68.7652 1652.23L2375.26 1626.76C2388.42 1626.62 2399 1615.92 2399 1602.76V2L2153.06 247.941C2144.06 256.943 2131.85 262 2119.12 262H90.4852C84.094 262 77.9667 264.549 73.4616 269.083L7.97632 334.98C3.50795 339.476 1 345.558 1 351.897V590.089C1 595.838 3.06383 601.396 6.81602 605.752Z"
                        stroke="currentColor"
                    />
                </svg>
            </div>

            <div className="@container relative py-16 lg:py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div>
                        <span className="text-primary font-mono text-sm uppercase">Services</span>
                        <div className="mt-8 grid items-end gap-6 md:grid-cols-2">
                            <h2 className="text-foreground text-4xl font-semibold md:text-5xl">Freight solutions built for every lane</h2>
                            <div className="lg:pl-12">
                                <p className="text-muted-foreground text-balance">From full truckload to specialized freight, we match the right mode, carrier, and routing with proactive support and real-time visibility.</p>
                            </div>
                        </div>
                    </div>
                    <div className="@xl:grid-cols-2 @3xl:grid-cols-3 mt-16 grid gap-2 [--color-border:color-mix(in_oklab,var(--color-foreground)10%,transparent)]">
                        <CardFlip
                            title="Full Truckload (FTL)"
                            subtitle="Dedicated capacity"
                            description="Secure dedicated equipment for high-volume or time-sensitive freight."
                            features={[
                                "Single-shipment focus",
                                "Direct point-to-point moves",
                                "Flexible appointment support",
                                "Real-time tracking updates"
                            ]}
                            height="h-full min-h-[400px]"
                            maxWidth=""
                            showCodeBlocks={false}
                            showCTA={true}
                            ctaText="Learn more"
                        />

                        <CardFlip
                            title="Less-Than-Truckload (LTL)"
                            subtitle="Flexible, cost-efficient"
                            description="Share trailer space while keeping reliable transit and visibility."
                            features={[
                                "Pay for space used",
                                "National LTL network",
                                "Consolidated billing",
                                "Proactive exception alerts"
                            ]}
                            height="h-full min-h-[400px]"
                            maxWidth=""
                            showCodeBlocks={false}
                            showCTA={true}
                            ctaText="Learn more"
                        />
                        <CardFlip
                            title="Intermodal"
                            subtitle="Rail + truck savings"
                            description="Lower long-haul costs while maintaining reliable service."
                            features={[
                                "Consistent linehaul schedules",
                                "Lower emissions options",
                                "Capacity in tight markets",
                                "End-to-end tracking"
                            ]}
                            height="h-full min-h-[400px]"
                            maxWidth=""
                            showCodeBlocks={false}
                            showCTA={true}
                            ctaText="Learn more"
                        />
                        <CardFlip
                            title="Warehousing"
                            subtitle="Storage and distribution"
                            description="Strategic warehousing to keep inventory positioned and moving."
                            features={[
                                "Cross-dock and transload",
                                "Short- and long-term storage",
                                "Inventory visibility",
                                "Pick and pack support"
                            ]}
                            height="h-full min-h-[400px]"
                            maxWidth=""
                            showCodeBlocks={false}
                            showCTA={true}
                            ctaText="Learn more"
                        />
                        <CardFlip
                            title="Specialized Services"
                            subtitle="Hazmat and heavy haul"
                            description="Certified carrier partners for regulated, oversized, and sensitive freight."
                            features={[
                                "Hazmat-certified carriers",
                                "Oversize permit coordination",
                                "Temperature-controlled options",
                                "Risk-mitigation planning"
                            ]}
                            height="h-full min-h-[400px]"
                            maxWidth=""
                            showCodeBlocks={false}
                            showCTA={true}
                            ctaText="Learn more"
                        />
                        <CardFlip
                            title="Have a Unique Project?"
                            subtitle="Custom solutions"
                            description="Complex lanes, unusual freight, or tight timelines - we design around your needs."
                            features={[
                                "Dedicated solution design",
                                "Multi-modal planning",
                                "Project management support",
                                "Clear, upfront pricing"
                            ]}
                            height="h-full min-h-[400px]"
                            maxWidth=""
                            showCodeBlocks={false}
                            showCTA={true}
                            ctaText="Learn more"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}