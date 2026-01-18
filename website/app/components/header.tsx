'use client'
import Link from 'next/link'
import { Logo } from '@/app/components/logo'
import { Button } from '@/app/components/ui/button'
import React from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/app/components/ui/navigation-menu'
import { Menu, X, Truck, PackageOpen, Train, Warehouse, AlertTriangle, Anchor, Handshake, ClipboardCheck, Factory, Sprout, Car, HardHat, ShoppingCart, Cpu, Newspaper, Bell, FolderOpen, Package, Landmark, Calculator, BookOpen} from 'lucide-react'
import { useMedia } from '@/app/hooks/use-media'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion'
import { cn } from '@/app/lib/utils'

interface FeatureLink {
    href: string
    name: string
    description?: string
    icon: React.ReactElement
}

interface MobileLink {
    groupName?: string
    links?: FeatureLink[]
    name?: string
    href?: string
}

const servicesLinks: FeatureLink[] = [
    {
        href: '/Services/truckload-ftl',
        name: 'Truckload (FTL)',
        description: 'Full truckload shipping services',
        icon: <Truck className="stroke-foreground fill-blue-500/15" />,
    },
    {
        href: '/Services/less-than-truckload-ltl',
        name: 'Less Than Truckload (LTL)',
        description: 'Partial shipment solutions',
        icon: <PackageOpen className="stroke-foreground fill-green-500/15" />,
    },
    {
        href: '/Services/Intermodal',
        name: 'Intermodal',
        description: 'Multi-mode transportation',
        icon: <Train className="stroke-foreground fill-purple-500/15" />,
    },
    {
        href: '/Services/Warehousing',
        name: 'Warehousing',
        description: 'Storage and distribution',
        icon: <Warehouse className="stroke-foreground fill-indigo-500/15" />,
    },
    {
        href: '/Services/specialized-services/Hazmat',
        name: 'Hazmat',
        description: 'Hazardous materials transport',
        icon: <AlertTriangle className="stroke-foreground fill-orange-500/15" />,
    },
    {
        href: '/Services/specialized-services/heavy-haul',
        name: 'Heavy Haul',
        description: 'Oversized and overweight loads',
        icon: <Anchor className="stroke-foreground fill-slate-500/15" />,
    },
]

const carriersLinks: FeatureLink[] = [
    {
        href: '/Carriers/haul-with-us',
        name: 'Haul With Us',
        description: 'Join our carrier network',
        icon: <Handshake className="stroke-foreground fill-blue-500/15" />,
    },
    {
        href: '/Carriers/get-set-up',
        name: 'Get Set Up',
        description: 'Carrier onboarding and registration',
        icon: <ClipboardCheck className="stroke-foreground fill-green-500/15" />,
    },
]

const industriesLinks: FeatureLink[] = [
    {
        href: '/Industries/Agriculture',
        name: 'Agriculture',
        description: 'Farm and agricultural shipping',
        icon: <Sprout className="stroke-foreground fill-green-500/15" />,
    },
    {
        href: '/Industries/Automotive',
        name: 'Automotive',
        description: 'Auto parts and vehicle transport',
        icon: <Car className="stroke-foreground fill-red-500/15" />,
    },
    {
        href: '/Industries/Construction',
        name: 'Construction',
        description: 'Building materials shipping',
        icon: <HardHat className="stroke-foreground fill-orange-500/15" />,
    },
    {
        href: '/Industries/Manufacturing',
        name: 'Manufacturing',
        description: 'Industrial goods transport',
        icon: <Factory className="stroke-foreground fill-slate-500/15" />,
    },
    {
        href: '/Industries/Retail',
        name: 'Retail',
        description: 'Consumer goods distribution',
        icon: <ShoppingCart className="stroke-foreground fill-purple-500/15" />,
    },
    {
        href: '/Industries/Technology',
        name: 'Technology',
        description: 'Electronics and tech equipment',
        icon: <Cpu className="stroke-foreground fill-indigo-500/15" />,
    },
]

const sunportHubLinks: FeatureLink[] = [
    {
        href: '/NewsandResources/industry-news',
        name: 'Industry News',
        description: 'Latest freight and logistics news',
        icon: <Newspaper className="stroke-foreground fill-blue-500/15" />,
    },
    {
        href: '/NewsandResources/alerts-and-notices',
        name: 'Alerts & Notices',
        description: 'Important updates and announcements',
        icon: <Bell className="stroke-foreground fill-orange-500/15" />,
    },
    {
        href: '/NewsandResources/carrier-resources',
        name: 'Carrier Resources',
        description: 'Tools and guides for carriers',
        icon: <FolderOpen className="stroke-foreground fill-green-500/15" />,
    },
    {
        href: '/NewsandResources/shipper-resources',
        name: 'Shipper Resources',
        description: 'Resources for shippers',
        icon: <Package className="stroke-foreground fill-purple-500/15" />,
    },
    {
        href: '/NewsandResources/government-agency-updates',
        name: 'Government Agency Updates',
        description: 'Regulatory news and compliance',
        icon: <Landmark className="stroke-foreground fill-slate-500/15" />,
    },
    {
        href: '/NewsandResources/tools-and-calculators',
        name: 'Tools & Calculators',
        description: 'Freight calculators and utilities',
        icon: <Calculator className="stroke-foreground fill-indigo-500/15" />,
    },
]

const contentLinks: FeatureLink[] = [
    { name: 'SunPort Hub Home', href: '/NewsandResources', icon: <BookOpen className="stroke-foreground fill-purple-500/15" /> },
    { name: 'Tools & Calculators', href: '/NewsandResources/tools-and-calculators', icon: <Calculator className="stroke-foreground fill-purple-500/15" /> }
]

const mobileLinks: MobileLink[] = [
    {
        groupName: 'Solutions',
        links: servicesLinks,
    },
    {
        groupName: 'Carriers',
        links: carriersLinks,
    },
    {
        groupName: 'Industries',
        links: industriesLinks,
    },
    {
        groupName: 'SunPort Hub',
        links: sunportHubLinks,
    },
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact', href: '/Contact' },
]

export default function HeaderOne() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const isLarge = useMedia('(min-width: 64rem)')

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <header
                role="banner"
                data-state={isMobileMenuOpen ? 'active' : 'inactive'}
                {...(isScrolled && { 'data-scrolled': true })}
                className="fixed inset-x-0 top-0 z-50">
                <div className={cn('border-foregroud/5 absolute inset-x-0 top-0 z-50 transition-all duration-300', 'in-data-scrolled:border-b in-data-scrolled:bg-background/75 in-data-scrolled:backdrop-blur', !isLarge && 'h-14 overflow-hidden border-b', isMobileMenuOpen && 'bg-background/75 h-screen backdrop-blur')}>
                    <div className="mx-auto max-w-6xl px-6 lg:px-12">
                        <div className="relative flex flex-wrap items-center justify-between lg:py-5">
                            <div className="flex justify-between gap-8 max-lg:h-14 max-lg:w-full max-lg:border-b">
                                <Link
                                    href="/"
                                    aria-label="home"
                                    className="flex items-center space-x-2">
                                    <Logo />
                                </Link>

                                <button
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    aria-label={isMobileMenuOpen == true ? 'Close Menu' : 'Open Menu'}
                                    className="relative z-20 -m-2.5 -mr-3 block cursor-pointer p-2.5 lg:hidden">
                                    <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-5 duration-200" />
                                    <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-5 -rotate-180 scale-0 opacity-0 duration-200" />
                                </button>
                            </div>

                            {isLarge && (
                                <div className="absolute inset-0 m-auto size-fit">
                                    <NavMenu />
                                </div>
                            )}
                            {!isLarge && isMobileMenuOpen && <MobileMenu closeMenu={() => setIsMobileMenuOpen(false)} />}

                            <div className="max-lg:in-data-[state=active]:mt-6 in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="sm">
                                        <Link href="/Carriers/haul-with-us">
                                            <span>Become a Carrier</span>
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        size="sm">
                                        <Link href="/Contact">
                                            <span>Contact Us</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

const MobileMenu = ({ closeMenu }: { closeMenu: () => void }) => {
    return (
        <nav
            role="navigation"
            className="w-full">
            <Accordion
                type="single"
                collapsible
                className="**:hover:no-underline -mx-4 mt-0.5 space-y-0.5">
                {mobileLinks.map((link, index) => {
                    if (link.groupName && link.links) {
                        return (
                            <AccordionItem
                                key={index}
                                value={link.groupName}
                                className="group relative border-b-0">
                                <AccordionTrigger className="**:!font-normal data-[state=open]:bg-muted flex items-center justify-between px-4 py-3 text-lg">{link.groupName}</AccordionTrigger>
                                <AccordionContent className="pb-5">
                                    <ul>
                                        {link.links.map((feature, featureIndex) => (
                                            <li key={featureIndex}>
                                                <Link
                                                    href={feature.href}
                                                    onClick={closeMenu}
                                                    className="grid grid-cols-[auto_1fr] items-center gap-2.5 px-4 py-2">
                                                    <div
                                                        aria-hidden
                                                        className="flex items-center justify-center *:size-4">
                                                        {feature.icon}
                                                    </div>
                                                    <div className="text-base">{feature.name}</div>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        )
                    }
                    return null
                })}
            </Accordion>
            {mobileLinks.map((link, index) => {
                if (link.name && link.href) {
                    return (
                        <Link
                            key={index}
                            href={link.href}
                            onClick={closeMenu}
                            className="group relative block py-4 text-lg">
                            {link.name}
                        </Link>
                    )
                }
                return null
            })}
        </nav>
    )
}

const NavMenu = () => {
    return (
        <NavigationMenu className="**:data-[slot=navigation-menu-viewport]:bg-[color-mix(in_oklch,var(--color-muted)_25%,var(--color-background))] **:data-[slot=navigation-menu-viewport]:shadow-lg **:data-[slot=navigation-menu-viewport]:rounded-2xl **:data-[slot=navigation-menu-viewport]:top-4 [--color-muted:color-mix(in_oklch,var(--color-foreground)_5%,transparent)] [--viewport-outer-px:2rem] max-lg:hidden">
            <NavigationMenuList className="gap-3">
                <NavigationMenuItem value="solutions">
                    <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
    <NavigationMenuContent className="origin-top pb-1.5 pl-1 pr-4 pt-1">
        <div className="min-w-6xl pr-18.5 grid w-full grid-cols-4 gap-1">
            <div className="bg-card row-span-2 grid grid-rows-subgrid gap-1 rounded-xl border p-1 pt-3">
                <span className="text-muted-foreground ml-2 text-xs">Industries</span>
                <ul>
                                    {industriesLinks.map((industry, index) => (
                                        <ListItem
                                            key={index}
                                            href={industry.href}
                                            title={industry.name}
                                            description={industry.description}>
                                            {industry.icon}
                                        </ListItem>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-card col-span-2 row-span-2 grid-rows-subgrid gap-1 rounded-xl border p-1 pt-3">
                                <span className="text-muted-foreground ml-2 text-xs">Services</span>
                                <ul className="grid grid-cols-2">
                                    {servicesLinks.map((service, index) => (
                                        <ListItem
                                            key={index}
                                            href={service.href}
                                            title={service.name}
                                            description={service.description}>
                                            {service.icon}
                                        </ListItem>
                                    ))}
                                </ul>
                            </div>
                            <div className="row-span-2 grid grid-rows-subgrid">
                                <div className="bg-muted/50 relative row-span-2 grid overflow-hidden rounded-xl border p-6 transition-colors duration-200">
                                    <div className="space-y-4">
                                        <h3 className="text-foreground text-xl font-semibold">Ready to Connect?</h3>
                                        <p className="text-foreground/80 text-sm leading-relaxed">
                                            Complete our online contact form and a member of our team will reach out to discuss your specific freight needs and begin the process of finding the right supply chain solution for you.
                                        </p>
                                        <Button
                                            asChild
                                            variant="outline"
                                            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full font-semibold">
                                            <Link href="/Contact">SPEAK TO AN EXPERT</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem value="Carriers">
                    <NavigationMenuTrigger>Carriers</NavigationMenuTrigger>
                    <NavigationMenuContent className="origin-top pb-1.5 pl-1 pr-4 pt-1">
                        <div className="min-w-6xl pr-18.5 grid w-full grid-cols-3 gap-1">
                            <div className="bg-card row-span-2 grid grid-rows-subgrid gap-1 rounded-xl border p-1 pt-3">
                                <span className="text-muted-foreground ml-2 text-xs">Join Our Network</span>
                                <ul className="grid grid-cols-1">
                                    {carriersLinks.map((carrier, index) => (
                                        <ListItem
                                            key={index}
                                            href={carrier.href}
                                            title={carrier.name}
                                            description={carrier.description}>
                                            {carrier.icon}
                                        </ListItem>
                                    ))}
                                </ul>
                            </div>
                            <div className="row-span-2 grid grid-rows-subgrid">
                                <div className="bg-muted/50 relative row-span-2 grid overflow-hidden rounded-xl border p-6 transition-colors duration-200">
                                    <div className="space-y-4">
                                        <h3 className="text-foreground text-xl font-semibold">Ready to Connect?</h3>
                                        <p className="text-foreground/80 text-sm leading-relaxed">
                                            Have questions about onboarding? Our carrier support team is here to help.
                                        </p>
                                        <Button
                                            asChild
                                            variant="outline"
                                            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full font-semibold">
                                            <Link href="/Contact">CONTACT US</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-card row-span-2 grid grid-rows-subgrid gap-1 rounded-xl border p-1 pt-3">
                                <span className="text-muted-foreground ml-2 text-xs">Content</span>
                                <ul>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href="/Carriers/get-set-up"
                                            className="grid grid-cols-[auto_1fr] items-center gap-2.5">
                                            <BookOpen className="stroke-foreground fill-purple-500/15 size-4" />
                                            <div className="text-foreground text-sm font-medium">Carrier Setup</div>
                                        </Link>
                                    </NavigationMenuLink>
                                    {sunportHubLinks
                                        .filter((hub) => hub.name === 'Carrier Resources' || hub.name === 'Alerts & Notices')
                                        .map((content, index) => (
                                            <NavigationMenuLink
                                                key={index}
                                                asChild>
                                                <Link
                                                    href={content.href}
                                                    className="grid grid-cols-[auto_1fr] items-center gap-2.5">
                                                    {content.icon}
                                                    <div className="text-foreground text-sm font-medium">{content.name}</div>
                                                </Link>
                                            </NavigationMenuLink>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem value="SunPort Hub">
                    <NavigationMenuTrigger>SunPort Hub</NavigationMenuTrigger>
                    <NavigationMenuContent className="origin-top pb-1.5 pl-1 pr-4 pt-1">
                        <div className="min-w-6xl pr-18.5 grid w-full grid-cols-4 gap-1">
                            <div className="bg-card col-span-2 row-span-2 grid grid-rows-subgrid gap-1 rounded-xl border p-1 pt-3">
                                <span className="text-muted-foreground ml-2 text-xs">News & Insights</span>
                                <ul className="grid grid-cols-2">
                                    {sunportHubLinks.filter(hub =>
                                        hub.name === 'Industry News' ||
                                        hub.name === 'Alerts & Notices' ||
                                        hub.name === 'Government Agency Updates'
                                    ).map((hub, index) => (
                                        <ListItem
                                            key={index}
                                            href={hub.href}
                                            title={hub.name}
                                            description={hub.description}>
                                            {hub.icon}
                                        </ListItem>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-card row-span-2 grid grid-rows-subgrid gap-1 rounded-xl border p-1 pt-3">
                                <span className="text-muted-foreground ml-2 text-xs">Resources</span>
                                <ul>
                                    {sunportHubLinks.filter(hub =>
                                        hub.name === 'Carrier Resources' ||
                                        hub.name === 'Shipper Resources'
                                    ).map((feature, index) => (
                                        <ListItem
                                            key={index}
                                            href={feature.href}
                                            title={feature.name}
                                            description={feature.description}>
                                            {feature.icon}
                                        </ListItem>
                                    ))}
                                </ul>
                            </div>
                            <div className="row-span-2 grid grid-rows-subgrid gap-1 p-1 pt-3">
                                <span className="text-muted-foreground ml-2 text-xs">Tools</span>
                                <ul>
                                    {contentLinks.map((content, index) => (
                                        <NavigationMenuLink
                                            key={index}
                                            asChild>
                                            <Link
                                                href={content.href}
                                                className="grid grid-cols-[auto_1fr] items-center gap-2.5">
                                                {content.icon}
                                                <div className="text-foreground text-sm font-medium">{content.name}</div>
                                            </Link>
                                        </NavigationMenuLink>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem value="about-us">
                    <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}>
                        <Link href="/about-us">About Us</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

function ListItem({ title, description, children, href, ...props }: React.ComponentPropsWithoutRef<'li'> & { href: string; title: string; description?: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink
                asChild
                className="rounded-lg">
                <Link
                    href={href}
                    className="grid grid-cols-[auto_1fr] gap-3.5">
                    <div className="bg-card ring-foreground/10 relative flex size-10 items-center justify-center rounded border border-transparent shadow shadow-sm ring-1">{children}</div>
                    <div className="space-y-0.5">
                        <div className="text-foreground text-sm font-medium">{title}</div>
                        <p className="text-muted-foreground line-clamp-1 text-xs">{description}</p>
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}