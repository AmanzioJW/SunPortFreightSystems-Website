'use client'
import Link from 'next/link'
import { Logo } from '@/app/components/logo'
import { Activity, Map as MapIcon, MessageCircle } from 'lucide-react'
import DottedMap from 'dotted-map'
import { Area, AreaChart, CartesianGrid } from 'recharts'
import { Button } from '@/app/components/ui/button'
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/app/components/ui/chart'

export default function FeaturesSection() {
    return (
        <section className="px-4 py-16 md:py-32">
            <div className="mx-auto max-w-5xl">
                <div className="text-center">
                    <p className="text-muted-foreground text-xs font-semibold uppercase tracking-[0.3em]">Technology</p>
                    <h2 className="mt-4 text-balance text-4xl font-semibold lg:text-5xl">
                        Visibility and control for every shipment
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        SunPort brings GPS tracking, carrier milestones, and automated alerts into a single view so your team stays ahead of exceptions and keeps customers informed.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        <Button
                            asChild
                            size="lg">
                            <Link href="/Contact">Request a Quote</Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline">
                            <Link href="/Services">Explore Services</Link>
                        </Button>
                    </div>
                </div>

                <div className="mt-12 grid overflow-hidden rounded-3xl border bg-background md:grid-cols-2">
                    <div>
                        <div className="p-6 sm:p-12">
                            <span className="text-muted-foreground flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]">
                                <MapIcon className="size-4" />
                                Real-time tracking
                            </span>

                            <p className="mt-6 text-2xl font-semibold">Live location and ETA updates across every lane.</p>
                            <p className="mt-3 text-sm text-muted-foreground">
                                GPS pings, carrier check-ins, and geofenced alerts keep your team aligned from pickup to delivery.
                            </p>
                        </div>

                        <div
                            aria-hidden
                            className="relative">
                            <div className="absolute inset-0 z-10 m-auto size-fit">
                                <div className="rounded-(--radius) bg-background z-1 dark:bg-muted relative flex size-fit w-fit items-center gap-2 border px-3 py-1 text-xs font-medium shadow-md shadow-zinc-950/5">
                                    <span className="text-lg">🇺🇸</span> Last update: Dallas, TX
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
                            <span className="text-muted-foreground flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]">
                                <MessageCircle className="size-4" />
                                Proactive shipper updates
                            </span>

                            <p className="my-6 text-2xl font-semibold">Centralized communication for every shipment.</p>
                            <p className="text-sm text-muted-foreground">
                                Share appointment windows, documents, and status updates in one thread so customers always know what to expect.
                            </p>
                        </div>
                        <div
                            aria-hidden
                            className="mt-6 flex flex-col gap-8">
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="flex size-5 rounded-full border">
                                        <Logo className="m-auto size-3" />
                                    </span>
                                    <span className="text-muted-foreground text-xs">Tue 9:24 AM</span>
                                </div>
                                <div className="rounded-(--radius) bg-background mt-1.5 w-3/5 border p-3 text-xs">
                                    Can you confirm the delivery window for PO 4189?
                                </div>
                            </div>

                            <div>
                                <div className="rounded-(--radius) mb-1 ml-auto w-3/5 bg-primary p-3 text-xs text-primary-foreground">
                                    Delivery confirmed for Tue 2:00 PM. POD will follow within 30 min.
                                </div>
                                <span className="text-muted-foreground block text-right text-xs">Just now</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-full border-y bg-muted/40 p-8 sm:p-12">
                        <p className="text-center text-3xl font-semibold md:text-5xl">24/7 Shipment Monitoring</p>
                        <p className="mt-3 text-center text-sm text-muted-foreground">
                            Proactive alerts on delays, dwell time, and appointment changes.
                        </p>
                    </div>
                    <div className="relative col-span-full">
                        <div className="absolute z-10 max-w-lg px-6 pr-12 pt-6 md:px-12 md:pt-12">
                            <span className="text-muted-foreground flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]">
                                <Activity className="size-4" />
                                Exception monitoring
                            </span>

                            <p className="my-6 text-2xl font-semibold">
                                Real-time shipment health. <span className="text-muted-foreground">Automated alerts surface delays before they impact delivery.</span>
                            </p>
                        </div>
                        <MonitoringChart />
                    </div>
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
    inTransit: {
        label: 'In Transit',
        color: '#2563eb',
    },
    delivered: {
        label: 'Delivered',
        color: '#22c55e',
    },
} satisfies ChartConfig

const chartData = [
    { day: 'Mon', inTransit: 140, delivered: 380 },
    { day: 'Tue', inTransit: 160, delivered: 420 },
    { day: 'Wed', inTransit: 130, delivered: 460 },
    { day: 'Thu', inTransit: 170, delivered: 410 },
    { day: 'Fri', inTransit: 150, delivered: 500 },
    { day: 'Sat', inTransit: 110, delivered: 360 },
]

const MonitoringChart = () => {
    return (
        <ChartContainer
            className="h-80 aspect-auto md:h-96"
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
                        id="fillInTransit"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1">
                        <stop
                            offset="0%"
                            stopColor="var(--color-inTransit)"
                            stopOpacity={0.8}
                        />
                        <stop
                            offset="55%"
                            stopColor="var(--color-inTransit)"
                            stopOpacity={0.1}
                        />
                    </linearGradient>
                    <linearGradient
                        id="fillDelivered"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1">
                        <stop
                            offset="0%"
                            stopColor="var(--color-delivered)"
                            stopOpacity={0.8}
                        />
                        <stop
                            offset="55%"
                            stopColor="var(--color-delivered)"
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
                    dataKey="delivered"
                    type="stepBefore"
                    fill="url(#fillDelivered)"
                    fillOpacity={0.1}
                    stroke="var(--color-delivered)"
                    stackId="a"
                />
                <Area
                    strokeWidth={2}
                    dataKey="inTransit"
                    type="stepBefore"
                    fill="url(#fillInTransit)"
                    fillOpacity={0.1}
                    stroke="var(--color-inTransit)"
                    stackId="a"
                />
            </AreaChart>
        </ChartContainer>
    )
}