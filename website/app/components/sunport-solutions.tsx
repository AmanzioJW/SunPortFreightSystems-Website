"use client";

import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/app/lib/css-modules';
import gridStyles from '@/app/styles/shared/grid.module.css';
import utilityStyles from '@/app/styles/shared/utilities.module.css';
import typographyStyles from '@/app/styles/shared/typography.module.css';
import styles from './sunport-solutions.module.css';

interface Tab {
  id: string;
  title: string;
  description: string;
  animationUrl: string;
}

const TABS: Tab[] = [
  {
    id: 'tab1',
    title: 'Comprehensive platform',
    description: 'Build your operations on a complete platform, not point solutions.',
    animationUrl: 'https://cdn.prod.website-files.com/68ed090d0998c3c224a59e7c/691ce4f0e3b9190e110e359c_8f6b8d382f17fb6b82c9fee0aa08fa77_Vooma%20-%20Animation%201.json'
  },
  {
    id: 'tab2',
    title: 'Complete operational visibility',
    description: 'Unlock the data in your team\'s inbox and calls to drive better margins.',
    animationUrl: 'https://cdn.prod.website-files.com/68ed090d0998c3c224a59e7c/691ce4f061dda993dae89a30_4060ea6f4b7bdbe2fd55ce23788fe8d5_Vooma%20-%20Animation%202.json'
  },
  {
    id: 'tab3',
    title: 'Collective intelligence, not tribal knowledge',
    description: 'A system that learns the nuances of your SOPs, customers, carriers and facilities.',
    animationUrl: 'https://cdn.prod.website-files.com/68ed090d0998c3c224a59e7c/691ce4f0b3211c8ab2551da1_9b0afe685e71fd03191ac31251fbeff4_Vooma%20-%20Animation%203.json'
  },
  {
    id: 'tab4',
    title: 'Execute your best operating practices',
    description: 'AI workers that email, call, text and log into systems to get your tedious work done, every time, 24/7.',
    animationUrl: 'https://cdn.prod.website-files.com/68ed090d0998c3c224a59e7c/691ce4f068737019d7816909_adcef3f8b5e2b5dced6381416bf6e76f_Vooma%20-%20Animation%204.json'
  }
];

export default function SunportSolutions() {
    const [activeTab, setActiveTab] = useState<number>(0);
    const [animationData, setAnimationData] = useState<object[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [loadError, setLoadError] = useState<boolean>(false);

    useEffect(() => {
        const fetchAnimations = async () => {
            try {
                const promises = TABS.map(tab =>
                    fetch(tab.animationUrl).then(res => res.json())
                );
                const data = await Promise.all(promises);
                setAnimationData(data);
            } catch (error) {
                console.error('Failed to load animations:', error);
                setLoadError(true);
            } finally {
                setIsLoading(false);
            }
        };
        fetchAnimations();
    }, []);

    return (
        <section className={cn(styles.home_product, gridStyles.section, utilityStyles['u-theme-dark'])}>
            <div className={cn(gridStyles['w-layout-blockcontainer'], styles.tab_container, gridStyles.container, gridStyles['w-container'])}>
                <div className={cn(gridStyles.row, utilityStyles['u-h-100'])}>
                    <div className={cn(gridStyles.col, gridStyles['col-lg-6'], gridStyles['col-md-5'], gridStyles['col-sm-12'], utilityStyles['u-z-index-1'])}>
                        <div className={cn(utilityStyles['u-vflex-stretch-between'], utilityStyles['u-vgap-32'], utilityStyles['u-h-100'])}>
                            <div className={cn(utilityStyles['u-vflex-left-top'], utilityStyles['u-vgap-24-16'])}>
                                <h2 className={cn(typographyStyles.eyebrow, utilityStyles['u-color-secondary'])}>product</h2>
                                <p className={typographyStyles.h2}>A complete platform to elevate your team from quote to cash</p>
                            </div>
                            <div role="tablist" className={utilityStyles['u-vflex-stretch-bottom']}>
                                {TABS.map((tab, index) => (
                                    <button
                                        key={tab.id}
                                        role="tab"
                                        aria-selected={activeTab === index}
                                        aria-controls={`panel-${tab.id}`}
                                        id={`tab-${tab.id}`}
                                        onClick={() => setActiveTab(index)}
                                        className={cn(
                                            styles['tab-content__item'],
                                            utilityStyles['w-inline-block'],
                                            activeTab === index && styles.active
                                        )}
                                    >
                                        <div className={styles['tab-content__item-main']}>
                                            <h2 className={typographyStyles.h6}>{tab.title}</h2>
                                        </div>
                                        <div className={styles['tab-content__item-detail']}>
                                            <p className={cn(utilityStyles['u-color-secondary'], utilityStyles['u-pt-0-5'])}>{tab.description}</p>
                                        </div>
                                        <div className={utilityStyles['u-sr-only']} style={{translate: 'none', rotate: 'none', scale: 'none', transformOrigin: '0% 50%', transform: activeTab === index ? 'scale(1, 1)' : 'scale(0, 1)'}}></div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={cn(gridStyles.col, gridStyles['col-lg-6'], gridStyles['col-md-7'], gridStyles['col-sm-12'])}>
                        <div aria-live="polite" role="region" className={styles['tab-visual__wrap']}>
                            <AnimatePresence mode="wait">
                                {TABS.map((tab, index) =>
                                    activeTab === index ? (
                                        <motion.div
                                            key={tab.id}
                                            id={`panel-${tab.id}`}
                                            role="tabpanel"
                                            aria-labelledby={`tab-${tab.id}`}
                                            className={cn(styles['tab-visual__item'], styles.active)}
                                            style={{
                                                position: 'absolute',
                                                inset: 0,
                                                width: '100%',
                                                height: '100%'
                                            }}
                                            initial={{ opacity: 0, x: 12 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -12 }}
                                            transition={{
                                                duration: 0.6,
                                                ease: [0.19, 1.0, 0.22, 1.0]
                                            }}
                                        >
                                            <div className={styles['tab-image']}>
                                                {isLoading && (
                                                    <div className="animate-pulse bg-gray-200 w-full h-full rounded" />
                                                )}
                                                {loadError && (
                                                    <p className="text-sm text-gray-500">Animation unavailable</p>
                                                )}
                                                {!isLoading && !loadError && animationData[index] && (
                                                    <Lottie
                                                        key={`lottie-${activeTab}-${index}`}
                                                        animationData={animationData[index]}
                                                        loop={true}
                                                        autoplay={activeTab === index}
                                                        style={{ width: '100%', height: '100%' }}
                                                    />
                                                )}
                                            </div>
                                        </motion.div>
                                    ) : null
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
