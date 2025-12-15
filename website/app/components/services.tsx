import CardFlip from "@/app/components/mvpblocks/card-flip"

export default function Solutions() {
    return (
        <section className="relative">
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
                        <span className="text-primary font-mono text-sm uppercase">What you get</span>
                        <div className="mt-8 grid items-end gap-6 md:grid-cols-2">
                            <h2 className="text-foreground text-4xl font-semibold md:text-5xl">Build winning subscriptions with smarter blocks</h2>
                            <div className="lg:pl-12">
                                <p className="text-muted-foreground text-balance">Everything you need to design, launch, and scale—crafted for speed, reliability, and a seamless developer experience.</p>
                            </div>
                        </div>
                    </div>
                    <div className="@xl:grid-cols-2 @3xl:grid-cols-3 mt-16 grid gap-2 [--color-border:color-mix(in_oklab,var(--color-foreground)10%,transparent)]">
                        <CardFlip
                            title="Full Truckload (FTL)"
                            subtitle="Dedicated shipping solution"
                            description="Secure dedicated capacity for your high-volume shipments."
                            features={[
                                "Dedicated trailer capacity for your exclusive use",
                                "Direct, non-stop transport to destination",
                                "Fastest transit times in the industry",
                                "Minimal handling risk for your cargo"
                            ]}
                            height="h-full min-h-[400px]"
                            maxWidth=""
                            showCodeBlocks={true}
                            showCTA={true}
                        />

                        <CardFlip
                            title="Less-Than-Truckload (LTL)"
                            subtitle="Cost-effective flexibility"
                            description="Pay only for the space you need by sharing trailer capacity, without sacrificing tracking visibility or service reliability."
                            features={[
                                "Pay only for space you need",
                                "Shared trailer capacity",
                                "Full tracking visibility",
                                "Reliable service delivery"
                            ]}
                            height="h-full min-h-[400px]"
                            maxWidth=""
                            showCodeBlocks={true}
                            showCTA={true}
                        />
                        <CardFlip
                            title="Intermodal"
                            subtitle="Rail & truck combined"
                            description="Optimize your long-haul supply chain by combining the economy of rail with the flexibility of trucking."
                            features={[
                                "Economy of rail transport",
                                "Flexibility of trucking",
                                "Reduced carbon footprint",
                                "Lower shipping costs"
                            ]}
                            height="h-full min-h-[400px]"
                            maxWidth=""
                            showCodeBlocks={true}
                            showCTA={true}
                        />
                        <CardFlip
                            title="Warehousing"
                            subtitle="Strategic storage solutions"
                            description="Real-time inventory management from cross-docking to long-term storage."
                            features={[
                                "Real-time inventory tracking",
                                "Cross-docking services",
                                "Long-term storage options",
                                "Rapid distribution ready"
                            ]}
                            height="h-full min-h-[400px]"
                            maxWidth=""
                            showCodeBlocks={true}
                            showCTA={true}
                        />
                        <CardFlip
                            title="Specialized Services"
                            subtitle="Expert handling"
                            description="Our network is equipped to manage temperature-controlled, Hazmat, and heavy-haul requirements safely."
                            features={[
                                "Temperature-controlled transport",
                                "Hazmat certified handling",
                                "Heavy-haul capabilities",
                                "Safety-first approach"
                            ]}
                            height="h-full min-h-[400px]"
                            maxWidth=""
                            showCodeBlocks={true}
                            showCTA={true}
                        />
                        <CardFlip
                            title="Have a Unique Project?"
                            subtitle="Custom solutions"
                            description="Connect with our solution architects to build a bespoke transportation plan for projects that don't fit standard categories."
                            features={[
                                "Custom transportation plans",
                                "Solution architect support",
                                "Bespoke project handling",
                                "Non-standard category support"
                            ]}
                            height="h-full min-h-[400px]"
                            maxWidth=""
                            showCodeBlocks={true}
                            showCTA={true}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}