"use client";

import SupplychainBackground from "./supplychain-components/supplychain-background";



export default function Supplychain() {
    return (
        <section className="u-pb-0">
            <div className="u-vflex-stretch-top u-vgap-64-24">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="row row-center-horizontal">
                        <div className="col col-lg-8">
                            <h2 className="u-align-center">Your best people are drowning in the least valuable work</h2>
                        </div>
                    </div>
                </div>
                < SupplychainBackground />
            </div>
        </section>
    );
}
