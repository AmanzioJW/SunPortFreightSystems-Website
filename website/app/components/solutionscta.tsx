'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { AspectRatio } from '@/app/components/ui/aspect-ratio'
import useEmblaCarousel from 'embla-carousel-react'
import { cn } from '@/app/lib/utils'

const carouselItems = [
    {
        image: "https://res.cloudinary.com/dohqjvu9k/image/upload/v1755171590/time_djv8te.webp",
        alt: "Freight market trends",
        title: "Industry News",
        description: "Weekly updates on capacity, rates, and supply chain trends.",
        link: "/NewsandResources/industry-news",
        width: 1388,
        height: 1388
    },
    {
        image: "https://res.cloudinary.com/dohqjvu9k/image/upload/v1755171584/dots-2_kmiukp.webp",
        alt: "Service alerts and notices",
        title: "Alerts & Notices",
        description: "Weather impacts, service advisories, and operational updates.",
        link: "/NewsandResources/alerts-and-notices",
        width: 1388,
        height: 1388
    },
    {
        image: "https://res.cloudinary.com/dohqjvu9k/image/upload/v1755171590/dna_lp2xey.webp",
        alt: "Carrier resources toolkit",
        title: "Carrier Resources",
        description: "Compliance guides, onboarding help, and safety updates.",
        link: "/NewsandResources/carrier-resources",
        width: 1388,
        height: 1388
    },
    {
        image: "https://res.cloudinary.com/dohqjvu9k/image/upload/v1755171590/time_djv8te.webp",
        alt: "Shipper resources and guides",
        title: "Shipper Resources",
        description: "RFP templates, packaging tips, and lane planning best practices.",
        link: "/NewsandResources/shipper-resources",
        width: 1388,
        height: 1388
    },
    {
        image: "https://res.cloudinary.com/dohqjvu9k/image/upload/v1755171584/dots-2_kmiukp.webp",
        alt: "Regulatory updates",
        title: "Government Agency Updates",
        description: "DOT, FMCSA, and port authority updates in one place.",
        link: "/NewsandResources/government-agency-updates",
        width: 1388,
        height: 1388
    },
    {
        image: "https://res.cloudinary.com/dohqjvu9k/image/upload/v1755171590/dna_lp2xey.webp",
        alt: "Freight tools and calculators",
        title: "Tools & Calculators",
        description: "Density, class, and accessorial calculators for faster quotes.",
        link: "/NewsandResources/tools-and-calculators",
        width: 1388,
        height: 1388
    }
]

export function ContentSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
    const [selectedIndex, setSelectedIndex] = useState(0)

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return

        // Set initial index without triggering cascading renders
        requestAnimationFrame(() => onSelect())

        emblaApi.on('select', onSelect)
        return () => {
            emblaApi.off('select', onSelect)
        }
    }, [emblaApi, onSelect])

    // Autoplay
    useEffect(() => {
        if (!emblaApi) return

        const autoplay = setInterval(() => {
            emblaApi.scrollNext()
        }, 3000) // 3 second interval

        return () => clearInterval(autoplay)
    }, [emblaApi])

    return (
        <section className="bg-background">
            <div className="bg-muted/50 @container py-16 md:py-24">
                <div className="mx-auto max-w-5xl px-6">
                    <h2 className="text-muted-foreground text-balance text-4xl font-semibold md:w-2/3">
                        Freight insights and tools from the <strong className="text-foreground font-semibold">SunPort Hub</strong>
                    </h2>

                    <div ref={emblaRef} className="mt-12 overflow-hidden">
                        <div className="flex gap-6">
                            {carouselItems.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
                                >
                                    <div className="grid grid-rows-[auto_auto_auto_auto] gap-4">
                                        <AspectRatio
                                            ratio={1 / 1}
                                            className="bg-background ring-foreground/5 rounded-xl border border-transparent p-6 shadow ring-1">
                                            <Image
                                                src={item.image}
                                                alt={item.alt}
                                                width={item.width}
                                                height={item.height}
                                                className="aspect-square size-full object-cover"
                                            />
                                        </AspectRatio>
                                        <h3 className="text-muted-foreground text-sm">{item.title}</h3>
                                        <p className="text-muted-foreground">
                                            {item.description}
                                        </p>
                                        <Link
                                            href={item.link}
                                            className="text-primary hover:text-foreground flex items-center gap-1 text-sm transition-colors duration-200">
                                            Read more
                                            <ChevronRight className="size-3.5 translate-y-px" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pagination Dots */}
                    <div className="mt-8 flex justify-center gap-2">
                        {carouselItems.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => emblaApi?.scrollTo(index)}
                                className={cn(
                                    "h-2 rounded-full transition-all duration-300",
                                    selectedIndex === index
                                        ? "w-8 bg-foreground"
                                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                )}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
