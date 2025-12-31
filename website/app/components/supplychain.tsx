"use client";

import SupplychainBackground from "./supplychain-components/supplychain-background";



export default function Supplychain() {
    return (
        <section>
            <div className="pt-44">
                <div className="mx-auto mb-12 max-w-5xl px-6">
                    <div className="mx-auto max-w-3xl">
                        <h1 className="text-balance text-5xl font-semibold sm:text-7xl">Pioneering the Medical AI Future</h1>
                        <p className="text-muted-foreground ml-auto mt-6 max-w-md text-balance text-lg">With Tailark's personal AI, get your projects to the finish line faster and with context.</p>
                    </div>
                </div>
                < SupplychainBackground />
            </div>
        </section>
    );
}
