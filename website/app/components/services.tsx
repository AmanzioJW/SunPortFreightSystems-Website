import { Card } from '@/app/components/ui/card'
import { LessThanTruckload } from "@/app/components/services-components/LessThanTruckload"
import { SpecializedServices} from "@/app/components/services-components/SpecializedServices"
import { FullTruckLoad } from "@/app/components/services-components/FullTruckLoad"
import { UniqueProject } from "@/app/components/services-components/UniqueProject"
import { Intermodal } from "@/app/components/services-components/Intermodal"
import { Warehousing } from "@/app/components/services-components/Warehousing"

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
                    <div className="@xl:grid-cols-2 @3xl:grid-cols-3 mt-16 grid gap-2 [--color-border:color-mix(in_oklab,var(--color-foreground)10%,transparent)] *:shadow-lg *:shadow-black/5 lg:-mx-8">
                        <Card className="group perspective-[1000px] cursor-pointer overflow-hidden rounded-2xl p-0">
                            <div className="relative w-full h-full min-h-[400px] transition-transform duration-500 transform-3d group-hover:transform-[rotateY(180deg)]">
                                {/* Front Side */}
                                <div className="absolute w-full h-full backface-hidden grid grid-rows-[auto_1fr] gap-8 p-8">
                                    <div>
                                        <h3 className="text-foreground font-semibold">Full Truckload (FTL)</h3>
                                        <p className="text-muted-foreground mt-3">Secure dedicated capacity for your high-volume shipments. We provide exclusive trailer use for direct, non-stop transport, ensuring the fastest transit times and minimal handling risk.</p>
                                    </div>

                                    <FullTruckLoad />
                                </div>

                                {/* Back Side */}
                                <div className="absolute w-full h-full backface-hidden transform-[rotateY(180deg)] flex items-center justify-center bg-indigo-600 text-white p-8">
                                    <div className="text-center space-y-6">
                                        <h3 className="text-3xl font-bold">Full Truckload</h3>
                                        <ul className="text-left space-y-3">
                                            <li className="flex items-start gap-2">
                                                <span className="text-indigo-200">•</span>
                                                <span>Dedicated trailer capacity</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-indigo-200">•</span>
                                                <span>Direct, non-stop transport</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-indigo-200">•</span>
                                                <span>Fastest transit times</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-indigo-200">•</span>
                                                <span>Minimal handling risk</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card className="group grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl p-8">
                            <div>
                                <h3 className="text-foreground font-semibold">Less-Than-Truckload (LTL)</h3>
                                <p className="text-muted-foreground mt-3">Cost-effective flexibility for smaller shipments. Pay only for the space you need by sharing trailer capacity, without sacrificing tracking visibility or service reliability.</p>
                            </div>

                            <div
                                aria-hidden
                                className="bg-linear-to-b border-background -m-8 flex flex-col justify-center border-x from-transparent to-zinc-50 p-8">
                                <LessThanTruckload />
                            </div>
                        </Card>
                        <Card className="group grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl p-8">
                            <div>
                                <h3 className="text-foreground font-semibold">Intermodal</h3>
                                <p className="text-muted-foreground mt-3">Optimize your long-haul supply chain by combining the economy of rail with the flexibility of trucking. A sustainable choice that reduces carbon footprint and shipping costs.</p>
                            </div>

                            <div
                                aria-hidden
                                className="bg-linear-to-b border-background -m-8 flex flex-col justify-center border-x from-transparent to-zinc-50 p-8">
                                <Intermodal />
                            </div>
                        </Card>
                        <Card className="group grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl p-8">
                            <div>
                                <h3 className="text-foreground font-semibold">Warehousing</h3>
                                <p className="text-muted-foreground mt-3">Strategic storage solutions equipped with real-time inventory management. From cross-docking to long-term storage, we ensure your goods are staged and ready for rapid distribution.</p>
                            </div>

                            <Warehousing />
                        </Card>
                        <Card className="group grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl p-8">
                            <div>
                                <h3 className="text-foreground font-semibold">Specialized Services</h3>
                                <p className="text-muted-foreground mt-3">Our network is equipped to manage temperature-controlled, Hazmat, and heavy-haul requirements safely.</p>
                            </div>

                            <SpecializedServices />
                        </Card>
                        <Card className="group grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl p-8">
                            <div>
                                <h3 className="text-foreground font-semibold">Have a Unique Project?</h3>
                                <p className="text-muted-foreground mt-3">Connect with our solution architects to build a bespoke transportation plan for projects that don&apos;t fit standard categories.</p>
                            </div>

                            <UniqueProject />
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}