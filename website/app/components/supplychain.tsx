"use client";

import SupplychainBackground from "./supplychain-components/supplychain-background";
import styles from '@/app/components/styles/Supplychain.module.css';

export default function Supplychain() {
    return (
        <section className={`${styles['track']} ${styles['section']} ${styles['u-pb-0']}`}>
            <div className={`${styles['u-vflex-stretch-top']} ${styles['u-vgap-64-24']}`}>
                <div className={`${styles['w-layout-blockcontainer']} ${styles['container']} ${styles['w-container']}`}>
                    <div className={`${styles['row']} ${styles['row-center-horizontal']}`}>
                        <div className={`${styles['col']} ${styles['col-lg-8']}`}>
                            <h2 className={styles['u-align-center']}>Visibility that keeps your supply chain moving</h2>
                        </div>
                    </div>
                </div>
                <div className={styles['tracks_container']}>
                    <div className={styles['tracks_middle']}>
                    </div>
                    <SupplychainBackground />
                </div>
            </div>
        </section>
    );
}