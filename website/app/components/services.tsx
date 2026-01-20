'use client'

import { ArrowRight, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import CardFlip from "@/app/components/mvpblocks/card-flip"

const SERVICES = [
    {
        id: 'ftl',
        title: 'Truckload (FTL)',
        subtitle: 'Dedicated capacity',
        description: 'Secure consistent capacity and direct routing for full-load freight across North America.',
        features: [
            'Dedicated trailers and driver capacity',
            'Direct linehaul with fewer stops',
            'High-value and time-critical freight',
            'Proactive tracking and exception handling'
        ],
        ctaText: 'Explore FTL',
        href: '/Services/truckload-ftl',
        image: '/images/services_FTL.jpeg',
        featured: true,
    },
    {
        id: 'ltl',
        title: 'Less-than-Truckload (LTL)',
        subtitle: 'Flexible, cost-efficient shipping',
        description: 'Move smaller shipments without paying for a full trailer while keeping reliable service.',
        features: [
            'Pay only for the space you need',
            'Nationwide partner network coverage',
            'Pickup, delivery, and accessorial options',
            'Milestone tracking with clear ETAs'
        ],
        ctaText: 'Explore LTL',
        href: '/Services/less-than-truckload-ltl',
        image: '/images/services_LTL.jpg',
        featured: true,
    },
    {
        id: 'intermodal',
        title: 'Intermodal',
        subtitle: 'Rail + truck efficiency',
        description: 'Blend rail efficiency with truck flexibility for long-haul lanes and sustainability goals.',
        features: [
            'Rail linehaul with drayage coordination',
            'Lower cost per mile on long routes',
            'Reduced carbon footprint',
            'Ideal for consistent, high-volume lanes'
        ],
        ctaText: 'Explore Intermodal',
        href: '/Services/Intermodal',
        image: '/images/services_intermodal.jpeg',
    },
    {
        id: 'warehousing',
        title: 'Warehousing',
        subtitle: 'Storage and distribution',
        description: 'Secure warehousing, cross-dock, and inventory visibility that keeps freight moving.',
        features: [
            'Short- and long-term storage',
            'Cross-dock and transload services',
            'Inventory visibility and reporting',
            'Pick, pack, and outbound support'
        ],
        ctaText: 'Explore Warehousing',
        href: '/Services/Warehousing',
        image: '/images/services_warehousing.jpeg',
    },
    {
        id: 'specialized',
        title: 'Specialized Services',
        subtitle: 'Hazmat, oversized, temp-controlled',
        description: 'Certified partners and equipment for regulated, oversized, and sensitive freight.',
        features: [
            'Hazmat-certified carriers',
            'Heavy-haul and oversized equipment',
            'Temperature-controlled options',
            'Permitting and compliance support'
        ],
        ctaText: 'Explore Specialized',
        href: '/Services/specialized-services',
        image: '/images/services_specialized.jpeg',
    },
]

export default function Solutions() {
    const featuredServices = SERVICES.filter(s => s.featured)
    const standardServices = SERVICES.filter(s => !s.featured)

    return (
        <section className="relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--primary-rgb,59,130,246),0.04),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(var(--primary-rgb,59,130,246),0.08),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(var(--secondary-rgb,234,179,8),0.03),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(var(--secondary-rgb,234,179,8),0.06),transparent_50%)]" />
            
            <div className="relative py-20 lg:py-28">
                <div className="mx-auto max-w-6xl px-6">
                    
                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-block rounded-full bg-primary/10 dark:bg-primary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
                            Freight Services
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 dark:text-white mb-5">
                            Freight services built for{' '}
                            <span className="text-primary">reliability</span>,{' '}
                            <span className="text-primary">visibility</span>, and{' '}
                            <span className="text-primary">scale</span>.
                        </h2>
                        <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            From truckload and LTL to intermodal, warehousing, and specialized moves—SunPort
                            designs service plans around your lanes, compliance needs, and customer promises.
                        </p>
                    </motion.div>

                    {/* Brand Tagline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative mb-14 max-w-3xl mx-auto text-center"
                    >
                        <div className="relative px-8 py-6">
                            {/* Decorative quote marks */}
                            <span className="absolute top-0 left-0 text-6xl sm:text-7xl font-serif text-primary/20 leading-none select-none" aria-hidden="true">
                                &ldquo;
                            </span>
                            <span className="absolute bottom-0 right-0 text-6xl sm:text-7xl font-serif text-primary/20 leading-none select-none" aria-hidden="true">
                                &rdquo;
                            </span>
                            
                            {/* Tagline */}
                            <blockquote className="relative z-10">
                                <p className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-800 dark:text-slate-100 italic tracking-tight">
                                    Delivering Confidence with Every Shipment.
                                </p>
                                <footer className="mt-4">
                                    <span className="text-sm font-semibold text-primary tracking-wide">
                                        — The SunPort Promise
                                    </span>
                                </footer>
                            </blockquote>
                        </div>
                        
                        {/* Subtle accent line */}
                        <div className="mx-auto mt-2 h-px w-24 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                    </motion.div>

                    {/* Featured Services - 2 Column Large Flip Cards */}
                    <div className="mb-8">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4"
                        >
                            Core Shipping Modes
                        </motion.p>
                        <div className="grid md:grid-cols-2 gap-6">
                            {featuredServices.map((service, index) => (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-50px' }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <CardFlip
                                        title={service.title}
                                        subtitle={service.subtitle}
                                        description={service.description}
                                        features={service.features}
                                        height="h-full min-h-[460px]"
                                        maxWidth="max-w-none"
                                        showCodeBlocks={false}
                                        showCTA={true}
                                        ctaText={service.ctaText}
                                        ctaHref={service.href}
                                        imageSrc={service.image}
                                        imageAlt={`${service.title} service`}
                                        backLogoSrc="/images/SunPort Freight Systems_Primary Logo.png"
                                        showBackLogo={true}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Standard Services - 3 Column Grid */}
                    <div className="mb-14">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4"
                        >
                            Extended Capabilities
                        </motion.p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {standardServices.map((service, index) => (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-50px' }}
                                    transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
                                >
                                    <CardFlip
                                        title={service.title}
                                        subtitle={service.subtitle}
                                        description={service.description}
                                        features={service.features}
                                        height="h-full min-h-[400px]"
                                        maxWidth="max-w-none"
                                        showCodeBlocks={false}
                                        showCTA={true}
                                        ctaText={service.ctaText}
                                        ctaHref={service.href}
                                        imageSrc={service.image}
                                        imageAlt={`${service.title} service`}
                                        backLogoSrc="/images/SunPort Freight Systems_Primary Logo.png"
                                        showBackLogo={true}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Custom Projects CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 p-8 md:p-10"
                    >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.15),transparent_60%)]" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
                        
                        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-start gap-5">
                                <div className="hidden sm:flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/20 text-secondary shrink-0">
                                    <MessageCircle className="h-7 w-7" />
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                                        Have a Unique Project?
                                    </h3>
                                    <p className="text-slate-300 text-sm md:text-base max-w-xl">
                                        Complex routes, special equipment, or strict deadlines? Our solutions architects 
                                        build custom plans with lane modeling, mode mixing, and project management from launch to delivery.
                                    </p>
                                </div>
                            </div>
                            <Link
                                href="/Contact"
                                className="shrink-0 inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-slate-900 font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-secondary/25 group"
                            >
                                Talk to a Specialist
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
