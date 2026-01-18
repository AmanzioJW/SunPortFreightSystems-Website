import { Button } from '@/app/components/ui/button'
import { ChevronRight, Cpu, Lock, Sparkles, Zap } from 'lucide-react'
import { DropdownIllustration } from "@/app/components/spfsmission-components/dropdown-illustration"
import Link from 'next/link'

export default function FeaturesSection() {
    return (
        <section id="spfs-mission-section" className="overflow-hidden">
            <div className="bg-zinc-50 py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div className="grid items-center gap-12 pb-12 md:grid-cols-2">
                        <div>
                            <div className="max-w-md">
                                <h2 className="text-foreground text-balance text-4xl font-semibold">Mission-driven freight you can trust</h2>
                                <p className="my-6 text-balance text-lg">SunPort Freight Systems delivers reliable, technology-led transportation across every mode.</p>
                                <p className="text-muted-foreground">
                                    We build long-term partnerships with shippers and carriers to improve service, cost, and visibility across every shipment.
                                </p>
                                <Button
                                    className="mt-8 pr-2"
                                    variant="outline"
                                    asChild>
                                    <Link href="/about-us">
                                        Learn more
                                        <ChevronRight className="size-4 opacity-50" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        <DropdownIllustration />
                    </div>

                    <div className="relative grid grid-cols-2 gap-x-3 gap-y-6 border-t pt-12 sm:gap-6 lg:grid-cols-4">
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Zap className="text-foreground fill-foreground/10 size-4" />
                                <h3 className="text-sm font-medium">On-time focus</h3>
                            </div>
                            <p className="text-muted-foreground text-sm">Proactive planning and carrier accountability keep freight moving.</p>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Cpu className="text-foreground fill-foreground/10 size-4" />
                                <h3 className="text-sm font-medium">Network strength</h3>
                            </div>
                            <p className="text-muted-foreground text-sm">Vetted carriers and specialized equipment matched to your freight.</p>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Lock className="text-foreground fill-foreground/10 size-4" />
                                <h3 className="text-sm font-medium">Compliance first</h3>
                            </div>
                            <p className="text-muted-foreground text-sm">Safety, hazmat, and regulatory requirements built into every move.</p>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Sparkles className="text-foreground fill-foreground/10 size-4" />
                                <h3 className="text-sm font-medium">Visibility</h3>
                            </div>
                            <p className="text-muted-foreground text-sm">Track milestones and documents from pickup to POD.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}