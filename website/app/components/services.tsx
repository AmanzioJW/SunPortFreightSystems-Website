import { LessThanTruckload } from "@/app/components/services-components/LessThanTruckload"
import { SpecializedServices} from "@/app/components/services-components/SpecializedServices"
import { FullTruckLoad } from "@/app/components/services-components/FullTruckLoad"
import { UniqueProject } from "@/app/components/services-components/UniqueProject"
import { Intermodal } from "@/app/components/services-components/Intermodal"
import { Warehousing } from "@/app/components/services-components/Warehousing"

export default function BentoNine() {
    return (
        <section
            data-theme="dark"
            className="bg-background @container">
            <div className="py-24 [--color-primary:var(--color-emerald-300)]">
                <div className="mx-auto w-full max-w-5xl px-6 xl:px-0">
                    <div className="@2xl:grid-cols-2 @4xl:grid-cols-3 *:hover:bg-muted/15 @2xl:divide-x @4xl:*:[:nth-child(4)]:border-b-0 @2xl:*:[:nth-child(5)]:border-b-0 @4xl:*:[:nth-child(2)]:border-r @4xl:*:[:nth-child(4)]:border-r @2xl:*:[:nth-child(4)]:border-r-0 @2xl:*:[:nth-child(2)]:border-r-0 @4xl:*:[:nth-child(3)]:border-r-0 grid divide-y overflow-hidden rounded-2xl border [--color-border:color-mix(in_oklab,var(--color-foreground)10%,transparent)] [--color-card:color-mix(in_oklab,var(--color-muted)15%,var(--color-background))] *:grid *:grid-rows-[auto_1fr] *:p-8">
                        <div className="space-y-8">
                            <div aria-hidden className="h-32 flex flex-col justify-center">
                                <FullTruckLoad />
                            </div>

                            <div>
                                <h3 className="text-foreground font-semibold">Full Truckload (FTL)</h3>
                                <p className="text-muted-foreground mt-2">
                                    <span className="text-foreground font-medium">Secure dedicated capacity for your high-volume shipments. We provide exclusive trailer use for direct, non-stop transport, ensuring the fastest transit times and minimal handling risk.</span>.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div aria-hidden className="h-32 flex flex-col justify-center">
                                <LessThanTruckload />
                            </div>

                            <div>
                                <h3 className="text-foreground font-semibold">Less-Than-Truckload (LTL)</h3>
                                <p className="text-muted-foreground mt-2">
                                    <span className="text-foreground font-medium">Cost-effective flexibility for smaller shipments. Pay only for the space you need by sharing trailer capacity, without sacrificing tracking visibility or service reliability.</span>
                                </p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div aria-hidden className="h-32 flex flex-col justify-center">
                                <Intermodal />
                            </div>

                            <div>
                                <h3 className="text-foreground font-semibold">Intermodal</h3>
                                <p className="text-muted-foreground mt-2">
                                    <span className="text-foreground font-medium">Optimize your long-haul supply chain by combining the economy of rail with the flexibility of trucking. A sustainable choice that reduces carbon footprint and shipping costs.</span>
                                </p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div aria-hidden className="h-32 flex flex-col justify-center">
                                <Warehousing />
                            </div>

                            <div>
                                <h3 className="text-foreground font-semibold">Warehousing</h3>
                                <p className="text-muted-foreground mt-2">
                                    <span className="text-foreground font-medium">Strategic storage solutions equipped with real-time inventory management. From cross-docking to long-term storage, we ensure your goods are staged and ready for rapid distribution.</span>
                                </p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div aria-hidden className="h-32 flex flex-col justify-center">
                                <SpecializedServices />
                            </div>

                            <div>
                                <h3 className="text-foreground font-semibold">Specialized Services</h3>
                                <p className="text-muted-foreground mt-2">
                                    <span className="text-foreground font-medium"> Our network is equipped to manage temperature-controlled, Hazmat, and heavy-haul requirements safely.</span>
                                </p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div aria-hidden className="h-32 flex flex-col justify-center">
                                <UniqueProject />
                            </div>

                            <div>
                                <h3 className="text-foreground font-semibold">Have a Unique Project?</h3>
                                <p className="text-muted-foreground mt-2">
                                    <span className="text-foreground font-medium">Connect with our solution architects to build a bespoke transportation plan for projects that don&apos;t fit standard categories</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}