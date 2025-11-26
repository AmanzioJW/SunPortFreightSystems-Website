import { ChartIllustration } from "@/app/components/services-components/chart-illustration"
import { PollIllustration } from "@/app/components/services-components/poll-illustration"
import { FingerPrintIcon } from "@/app/components/services-components/finger-print-illustration"
import { MessageIllustration } from "@/app/components/services-components/message-illustration"
import { MemoryUsageIllustration } from "@/app/components/services-components/memory-usage-illustration"
import { UptimeIllustration } from "@/app/components/services-components/uptime-illustration"

export default function BentoNine() {
    return (
        <section
            data-theme="dark"
            className="bg-background @container">
            <div className="py-24 [--color-primary:var(--color-emerald-300)]">
                <div className="mx-auto w-full max-w-5xl px-6 xl:px-0">
                    <div className="@2xl:grid-cols-2 @4xl:grid-cols-3 *:hover:bg-muted/15 @2xl:divide-x @4xl:*:[:nth-child(4)]:border-b-0 @2xl:*:[:nth-child(5)]:border-b-0 @4xl:*:[:nth-child(2)]:border-r @4xl:*:[:nth-child(4)]:border-r @2xl:*:[:nth-child(4)]:border-r-0 @2xl:*:[:nth-child(2)]:border-r-0 @4xl:*:[:nth-child(3)]:border-r-0 grid divide-y overflow-hidden rounded-2xl border [--color-border:color-mix(in_oklab,var(--color-foreground)10%,transparent)] [--color-card:color-mix(in_oklab,var(--color-muted)15%,var(--color-background))] *:grid *:grid-rows-[1fr_auto] *:p-8">
                        <div className="space-y-8">
                            <div aria-hidden>
                                <FingerPrintIcon />
                            </div>

                            <div>
                                <h3 className="text-foreground font-semibold">Identity Verification</h3>
                                <p className="text-muted-foreground mt-2">
                                    Secure authentication with <span className="text-foreground font-medium">biometric recognition</span>.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div aria-hidden>
                                <ChartIllustration />
                            </div>

                            <div>
                                <h3 className="text-foreground font-semibold">Analytics Dashboard</h3>
                                <p className="text-muted-foreground mt-2">
                                    Track performance metrics with <span className="text-foreground font-medium">real-time insights</span>.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div aria-hidden>
                                <MemoryUsageIllustration />
                            </div>

                            <div>
                                <h3 className="text-foreground font-semibold">Resource Monitoring</h3>
                                <p className="text-muted-foreground mt-2">
                                    Optimize system resources with <span className="text-foreground font-medium">intelligent allocation</span>.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div
                                aria-hidden
                                className="flex flex-col justify-center">
                                <UptimeIllustration />
                            </div>

                            <div>
                                <h3 className="text-foreground font-semibold">Service Reliability</h3>
                                <p className="text-muted-foreground mt-2">
                                    Maintain continuous operations with <span className="text-foreground font-medium">99.9% uptime</span>.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div aria-hidden>
                                <PollIllustration />
                            </div>

                            <div>
                                <h3 className="text-foreground font-semibold">User Feedback</h3>
                                <p className="text-muted-foreground mt-2">
                                    Collect valuable insights through <span className="text-foreground font-medium">interactive surveys</span>.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div
                                aria-hidden
                                className="flex flex-col justify-center">
                                <MessageIllustration />
                            </div>

                            <div>
                                <h3 className="text-foreground font-semibold">Communication Hub</h3>
                                <p className="text-muted-foreground mt-2">
                                    Connect team members with <span className="text-foreground font-medium">seamless messaging</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}