"use client";

import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '@/app/components/styles/SunportSolutions.module.css';

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

    const handleTabClick = (e: React.MouseEvent<HTMLAnchorElement>, index: number) => {
        e.preventDefault();
        setActiveTab(index);
    };

    return (
        <section className={`${styles['home_product']} ${styles['section']} ${styles['u-theme-dark']}`}>
            <div className={`${styles['w-layout-blockcontainer']} ${styles['tab_container']} ${styles['container']} ${styles['w-container']}`}>
                <div className={`${styles['row']} ${styles['u-h-100']}`}>
                    <div className={`${styles['col']} ${styles['col-lg-6']} ${styles['col-md-5']} ${styles['col-sm-12']} ${styles['u-z-index-1']}`}>
                        <div className={`${styles['u-vflex-stretch-between']} ${styles['u-vgap-32']} ${styles['u-h-100']}`}>
                            <div className={`${styles['u-vflex-left-top']} ${styles['u-vgap-24-16']}`}>
                                <h2 className={`${styles['eyebrow']} ${styles['u-color-secondary']}`}>product</h2>
                                <p className={styles['h2']}>A complete platform to elevate your team from quote to cash</p>
                            </div>
                            <div role="tablist" className={styles['u-vflex-stretch-bottom']}>
                                {TABS.map((tab, index) => (
                                    <a
                                        key={tab.id}
                                        role="tab"
                                        href="#"
                                        data-tabs="content-item"
                                        aria-selected={activeTab === index}
                                        aria-controls={`panel-${tab.id}`}
                                        id={`tab-${tab.id}`}
                                        onClick={(e) => handleTabClick(e, index)}
                                        className={`${styles['tab-content__item']} ${styles['w-inline-block']} ${activeTab === index ? styles['active'] : ''}`}
                                    >
                                        <div className={styles['tab-content__item-main']}>
                                            <h2 className={styles['h6']}>{tab.title}</h2>
                                        </div>
                                        <div data-tabs="item-details" className={`${styles['tab-content__item-detail']} ${activeTab === index ? styles['active'] : ''}`}>
                                            <p className={`${styles['u-color-secondary']} ${styles['u-pt-0-5']}`}>{tab.description}</p>
                                        </div>
                                        <div data-tabs="item-progress" className={styles['u-sr-only']}></div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['col']} ${styles['col-lg-6']} ${styles['col-md-7']} ${styles['col-sm-12']}`}>
                        <div aria-live="polite" role="region" className={styles['tab-visual__wrap']}>
                            <AnimatePresence mode="wait">
                                {TABS.map((tab, index) =>
                                    activeTab === index ? (
                                        <motion.div
                                            key={tab.id}
                                            id={`panel-${tab.id}`}
                                            role="tabpanel"
                                            aria-labelledby={`tab-${tab.id}`}
                                            className={`${styles['tab-visual__item']} ${styles['active']}`}
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