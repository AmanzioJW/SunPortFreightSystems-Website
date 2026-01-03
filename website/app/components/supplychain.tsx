"use client";

import SupplychainBackground from "./supplychain-components/supplychain-background";
import { cn } from '@/app/lib/css-modules';
import gridStyles from '@/app/styles/shared/grid.module.css';
import utilityStyles from '@/app/styles/shared/utilities.module.css';
import typographyStyles from '@/app/styles/shared/typography.module.css';
import styles from './supplychain.module.css';

export default function Supplychain() {
    return (
        <section className={cn(gridStyles.section, utilityStyles['u-pb-0'])}>
            <div className={cn(utilityStyles['u-vflex-stretch-top'], utilityStyles['u-vgap-64-24'])}>
                <div className={cn(gridStyles['w-layout-blockcontainer'], gridStyles.container, gridStyles['w-container'])}>
                    <div className={cn(gridStyles.row, gridStyles['row-center-horizontal'])}>
                        <div className={cn(gridStyles.col, gridStyles['col-lg-8'])}>
                            <h2 className={cn(typographyStyles.h2, utilityStyles['u-align-center'])}>Your best people are drowning in the least valuable work</h2>
                        </div>
                    </div>
                </div>
                <div className={styles.tracks_container} data-gsap-trigger="tracks-container">
                    <div className={styles.tracks_middle}>
                    </div>
                    <SupplychainBackground />
                </div>
            </div>
        </section>
    );
}
