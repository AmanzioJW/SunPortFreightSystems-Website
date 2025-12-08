import { ImageIllustration } from "@/app/components/whychooseus-components/image-illustration"

export default function WhyChooseUs() {
    return (
        <section>
            <div className="py-24 md:pt-32 lg:pt-44">
                <div className="mx-auto mb-12 max-w-5xl px-6">
                    <ImageIllustration />
                    <div className="relative mt-6 grid items-end gap-6 md:-mt-12 md:grid-cols-2">
                        <h1 className="text-balance text-4xl font-semibold sm:text-5xl lg:text-6xl">Building the roots for your evolving supply chain needs</h1>
                        <p className="text-muted-foreground text-balance text-lg">Our mission is to deliver reliable, technology-driven freight solutions that bring visibility and control to every part of the supply chain. From day one, we strive to be a trusted partner—understanding each customer’s unique challenges, shaping services around their specific needs, and maintaining clear, honest communication throughout the entire process.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}