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
                        <span className="text-primary font-mono text-sm uppercase">Freight services</span>
                        <div className="mt-8 grid items-end gap-6 md:grid-cols-2">
                            <h2 className="text-foreground text-4xl font-semibold md:text-5xl">
                                Freight services built for reliability, visibility, and scale.
                            </h2>
                            <div className="lg:pl-12">
                                <p className="text-muted-foreground text-balance">
                                    From truckload and LTL to intermodal, warehousing, and specialized moves, SunPort
                                    designs service plans around your lanes, compliance needs, and customer promises.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="@xl:grid-cols-2 @3xl:grid-cols-3 mt-12 grid gap-6 [--color-border:color-mix(in_oklab,var(--color-foreground)10%,transparent)]">
                        <CardFlip
                            title="Truckload (FTL)"
                            subtitle="Dedicated capacity"
                            description="Secure consistent capacity and direct routing for full-load freight across North America."
                            features={[
                                "Dedicated trailers and driver capacity",
                                "Direct linehaul with fewer stops",
                                "High-value and time-critical freight",
                                "Proactive tracking and exception handling"
                            ]}
                            height="h-full min-h-[400px]"
                            maxWidth="max-w-none"
                            showCodeBlocks={false}
                            showCTA={true}
                            ctaText="Explore FTL"
                            ctaHref="/Services/truckload-ftl"
                            imageSrc="/images/Services_FTL.jpeg"
                            imageAlt="Truckload freight service"
                        />

                        <CardFlip
                            title="Less-than-Truckload (LTL)"
                            subtitle="Flexible, cost-efficient shipping"
                            description="Move smaller shipments without paying for a full trailer while keeping reliable service."
                            features={[
                                "Pay only for the space you need",
                                "Nationwide partner network coverage",
                                "Pickup, delivery, and accessorial options",
                                "Milestone tracking with clear ETAs"
                            ]}
                            height="h-full min-h-[400px]"
                            maxWidth="max-w-none"
                            showCodeBlocks={false}
                            showCTA={true}
                            ctaText="Explore LTL"
                            ctaHref="/Services/less-than-truckload-ltl"
                            imageSrc="/images/services_LTL.jpg"
                            imageAlt="Less-than-truckload service"
                        />
                        <CardFlip
                            title="Intermodal"
                            subtitle="Rail + truck efficiency"
                            description="Blend rail efficiency with truck flexibility for long-haul lanes and sustainability goals."
                            features={[
                                "Rail linehaul with drayage coordination",
                                "Lower cost per mile on long routes",
                                "Reduced carbon footprint",
                                "Ideal for consistent, high-volume lanes"
                            ]}
                            height="h-full min-h-[400px]"
                            maxWidth="max-w-none"
                            showCodeBlocks={false}
                            showCTA={true}
                            ctaText="Explore Intermodal"
                            ctaHref="/Services/Intermodal"
                            imageSrc="/images/supply-chain-network.jpg"
                            imageAlt="Intermodal freight service"
                        />
                        <CardFlip
                            title="Warehousing"
                            subtitle="Storage and distribution"
                            description="Secure warehousing, cross-dock, and inventory visibility that keeps freight moving."
                            features={[
                                "Short- and long-term storage",
                                "Cross-dock and transload services",
                                "Inventory visibility and reporting",
                                "Pick, pack, and outbound support"
                            ]}
                            height="h-full min-h-[400px]"
                            maxWidth="max-w-none"
                            showCodeBlocks={false}
                            showCTA={true}
                            ctaText="Explore Warehousing"
                            ctaHref="/Services/Warehousing"
                            imageSrc="/images/services_warehousing.jpeg"
                            imageAlt="Warehousing service"
                        />
                        <CardFlip
                            title="Specialized Services"
                            subtitle="Hazmat, oversized, and temp-controlled"
                            description="Certified partners and equipment for regulated, oversized, and sensitive freight."
                            features={[
                                "Hazmat-certified carriers",
                                "Heavy-haul and oversized equipment",
                                "Temperature-controlled options",
                                "Permitting and compliance support"
                            ]}
                            height="h-full min-h-[400px]"
                            maxWidth="max-w-none"
                            showCodeBlocks={false}
                            showCTA={true}
                            ctaText="Explore Specialized"
                            ctaHref="/Services/specialized-services"
                            imageSrc="/images/supply-chain-network.jpg"
                            imageAlt="Specialized freight services"
                        />
                        <CardFlip
                            title="Have a Unique Project?"
                            subtitle="Custom solution design"
                            description="Complex routes, special equipment, or strict deadlines? Our team builds the plan."
                            features={[
                                "Dedicated solutions architect",
                                "Lane and cost modeling",
                                "Mode and carrier mix planning",
                                "Project management from launch to delivery"
                            ]}
                            height="h-full min-h-[400px]"
                            maxWidth="max-w-none"
                            showCodeBlocks={false}
                            showCTA={true}
                            ctaText="Talk to a specialist"
                            ctaHref="/Contact"
                            imageSrc="/images/services_unique.jpeg"
                            imageAlt="Custom freight solutions"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}