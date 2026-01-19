'use client'
import { Logo } from '@/app/components/logo'
import { Activity, Map as MapIcon, MessageCircle } from 'lucide-react'
import DottedMap from 'dotted-map'
import { Area, AreaChart, CartesianGrid } from 'recharts'
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/app/components/ui/chart'

export default function FeaturesSection() {
    return (
        <section className="px-4 py-16 md:py-32">
            <h2 className="mb-12 text-center text-4xl font-semibold lg:text-5xl">
                Technology built for freight visibility</h2>
                <p className="mb-12 text-center text-lg text-muted-foreground">
                    Track shipments, receive proactive alerts, and keep every stakeholder aligned in real time.
                </p>
            <div className="mx-auto grid max-w-5xl border md:grid-cols-2">
                <div>
                    <div className="p-6 sm:p-12">
                        <span className="text-muted-foreground flex items-center gap-2">
                            <MapIcon className="size-4" />
                            Real-time location tracking
                        </span>

                        <p className="mt-8 text-2xl font-semibold">Advanced tracking with live location updates across every mode.</p>
                    </div>

                    <div
                        aria-hidden
                        className="relative">
                        <div className="absolute inset-0 z-10 m-auto size-fit">
                            <div className="rounded-(--radius) bg-background z-1 dark:bg-muted relative flex size-fit w-fit items-center gap-2 border px-3 py-1 text-xs font-medium shadow-md shadow-zinc-950/5">
                                Last ping: Dallas, TX
                            </div>
                            <div className="rounded-(--radius) bg-background absolute inset-2 -bottom-2 mx-auto border px-3 py-4 text-xs font-medium shadow-md shadow-zinc-950/5 dark:bg-zinc-900"></div>
                        </div>

                        <div className="relative overflow-hidden">
                            <div className="bg-radial z-1 to-background absolute inset-0 from-transparent to-75%"></div>
                            <Map />
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden border-t bg-zinc-50 p-6 sm:p-12 md:border-0 md:border-l dark:bg-transparent">
                    <div className="relative z-10">
                        <span className="text-muted-foreground flex items-center gap-2">
                            <MessageCircle className="size-4" />
                            Dedicated support
                        </span>

                        <p className="my-8 text-2xl font-semibold">Get fast answers from a team that knows your lanes and priorities.</p>
                    </div>
                    <div
                        aria-hidden
                        className="flex flex-col gap-8">
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="flex size-5 rounded-full border">
                                    <Logo className="m-auto size-3" />
                                </span>
                                <span className="text-muted-foreground text-xs">Sat 22 Feb</span>
                            </div>
                            <div className="rounded-(--radius) bg-background mt-1.5 w-3/5 border p-3 text-xs">Need an update on load 4812.</div>
                        </div>

                        <div>
                            <div className="rounded-(--radius) mb-1 ml-auto w-3/5 bg-blue-600 p-3 text-xs text-white">Update sent. ETA is 4:20 PM with POD on delivery.</div>
                            <span className="text-muted-foreground block text-right text-xs">Now</span>
                        </div>
                    </div>
                </div>
                <div className="col-span-full border-y p-12">
                    <p className="text-center text-4xl font-semibold lg:text-7xl">24/7 Visibility</p>
                </div>
                <div className="relative col-span-full">
                    <div className="absolute z-10 max-w-lg px-6 pr-12 pt-6 md:px-12 md:pt-12">
                        <span className="text-muted-foreground flex items-center gap-2">
                            <Activity className="size-4" />
                            Activity feed
                        </span>

                        <p className="my-8 text-2xl font-semibold">
                            Monitor shipment milestones in real time. <span className="text-muted-foreground"> Spot delays early and keep stakeholders informed.</span>
                        </p>
                    </div>
                    <MonitoringChart />
                </div>
            </div>
        </section>
    )
}

const map = new DottedMap({ height: 55, grid: 'diagonal' })

const points = map.getPoints()

const svgOptions = {
    backgroundColor: 'var(--color-background)',
    color: 'currentColor',
    radius: 0.15,
}

const Map = () => {
    const viewBox = `0 0 120 60`
    return (
        <svg
            viewBox={viewBox}
            style={{ background: svgOptions.backgroundColor }}>
            {points.map((point, index) => (
                <circle
                    key={index}
                    cx={point.x}
                    cy={point.y}
                    r={svgOptions.radius}
                    fill={svgOptions.color}
                />
            ))}
        </svg>
    )
}

const chartConfig = {
    onTime: {
        label: 'On-time shipments',
        color: '#2563eb',
    },
    exceptions: {
        label: 'Exceptions',
        color: '#f97316',
    },
} satisfies ChartConfig

const chartData = [
    { month: 'May', onTime: 320, exceptions: 14 },
    { month: 'June', onTime: 340, exceptions: 12 },
    { month: 'July', onTime: 360, exceptions: 18 },
    { month: 'August', onTime: 390, exceptions: 16 },
    { month: 'September', onTime: 410, exceptions: 11 },
    { month: 'October', onTime: 430, exceptions: 9 },
]

const MonitoringChart = () => {
    return (
        <ChartContainer
            className="h-120 aspect-auto md:h-96"
            config={chartConfig}>
            <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                    left: 0,
                    right: 0,
                }}>
                <defs>
                    <linearGradient
                        id="fillOnTime"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1">
                        <stop
                            offset="0%"
                            stopColor="var(--color-onTime)"
                            stopOpacity={0.8}
                        />
                        <stop
                            offset="55%"
                            stopColor="var(--color-onTime)"
                            stopOpacity={0.1}
                        />
                    </linearGradient>
                    <linearGradient
                        id="fillExceptions"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1">
                        <stop
                            offset="0%"
                            stopColor="var(--color-exceptions)"
                            stopOpacity={0.8}
                        />
                        <stop
                            offset="55%"
                            stopColor="var(--color-exceptions)"
                            stopOpacity={0.1}
                        />
                    </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <ChartTooltip
                    active
                    cursor={false}
                    content={<ChartTooltipContent className="dark:bg-muted" />}
                />
                <Area
                    strokeWidth={2}
                    dataKey="exceptions"
                    type="stepBefore"
                    fill="url(#fillExceptions)"
                    fillOpacity={0.1}
                    stroke="var(--color-exceptions)"
                    stackId="a"
                />
                <Area
                    strokeWidth={2}
                    dataKey="onTime"
                    type="stepBefore"
                    fill="url(#fillOnTime)"
                    fillOpacity={0.1}
                    stroke="var(--color-onTime)"
                    stackId="a"
                />
            </AreaChart>
        </ChartContainer>
    )
}