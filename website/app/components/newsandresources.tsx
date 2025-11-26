import { Button } from '@/app/components/ui/button'
import { ChevronRight, Cpu, Lock, Sparkles, Zap } from 'lucide-react'
import { DropdownIllustration } from "@/app/components/newsandresources-components/dropdown-illustration"
import Link from 'next/link'

export default function FeaturesSection() {
    return (
        <section className="overflow-hidden">
            <div className="bg-zinc-50 py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div className="grid items-center gap-12 pb-12 md:grid-cols-2">
                        <div>
                            <div className="max-w-md">
                                <h2 className="text-foreground text-balance text-4xl font-semibold">Power of LLMs in Your Editor</h2>
                                <p className="my-6 text-balance text-lg">Write code faster with the latest Large Language Models from Gemini, GooglePaLM, and Replit.</p>
                                <p className="text-muted-foreground">
                                    Lyra is evolving to be more than just the models. <span className="text-title font-medium">It supports an entire ecosystem</span> — from products innovate.
                                </p>
                                <Button
                                    className="mt-8 pr-2"
                                    variant="outline"
                                    asChild>
                                    <Link href="#">
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
                                <h3 className="text-sm font-medium">Faaast</h3>
                            </div>
                            <p className="text-muted-foreground text-sm">It supports an entire helping developers and innovate.</p>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Cpu className="text-foreground fill-foreground/10 size-4" />
                                <h3 className="text-sm font-medium">Powerful</h3>
                            </div>
                            <p className="text-muted-foreground text-sm">It supports an entire helping developers and businesses.</p>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Lock className="text-foreground fill-foreground/10 size-4" />
                                <h3 className="text-sm font-medium">Security</h3>
                            </div>
                            <p className="text-muted-foreground text-sm">An helping developers businesses innovate.</p>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Sparkles className="text-foreground fill-foreground/10 size-4" />
                                <h3 className="text-sm font-medium">AI Powered</h3>
                            </div>
                            <p className="text-muted-foreground text-sm">Helping developers businesses innovate.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}