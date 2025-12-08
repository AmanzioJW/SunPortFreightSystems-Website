'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/app/components/ui/button'
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
    const [hasScrolled, setHasScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <section className="relative min-h-[1400px] overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/videos/hero-background.mp4" type="video/mp4" />
            </video>

            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content Overlay - Left Aligned */}
            <div className="relative z-10 py-90">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="flex justify-start">
                        <div className="max-w-xl text-white">
                            <h1 className="mt-4 text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">
                                Delivering Confidence with Every Shipment.
                            </h1>
                            <p className="mb-6 mt-4 text-balance text-lg text-white/90">
                                Seamless freight solutions crafted to deliver confidence with every shipment.
                            </p>

                            <Button asChild>
                                <Link href="#link">Learn More</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            {!hasScrolled && (
                <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20">
                    <div className="flex flex-col items-center gap-2 text-white animate-bounce">
                        <span className="text-md font-bold">Scroll</span>
                        <ChevronDown className="w-8 h-8" />
                    </div>
                </div>
            )}
        </section>
    )
}
