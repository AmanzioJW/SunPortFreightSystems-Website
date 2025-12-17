"use client"

import SmartPlay from './glass-video-player'

export const DropdownIllustration = () => {
    return (
        <div className="relative overflow-hidden rounded-2xl bg-black p-2">
            <div className="mask-r-from-50% absolute inset-0 items-center [background:radial-gradient(150%_115%_at_50%_5%,transparent_25%,var(--color-emerald-500)_60%,var(--color-white)_100%)]"></div>
            <div className="mask-l-from-35% absolute inset-0 items-center [background:radial-gradient(150%_115%_at_50%_5%,transparent_25%,var(--color-sky-500)_60%,var(--color-white)_100%)]"></div>

            <div className="relative overflow-hidden rounded-xl border border-dashed border-white/25 bg-white/10 pt-8 shadow-lg shadow-black/20">
                <div className="absolute inset-0 bg-[radial-gradient(var(--color-white)_1px,transparent_1px)] opacity-5 bg-size-[12px_12px]"></div>
                <div className="absolute inset-0 translate-y-1/2 rounded-full border border-dotted bg-white/15"></div>

                <div className="flex items-center justify-center">
                    <div className="mask-b-from-55% -mx-4 -mt-4 p-4 pb-0">
                        <div className="bg-card border-foreground/10 relative w-56 overflow-hidden rounded-t-2xl border p-1 shadow-lg shadow-black/10 *:cursor-pointer *:rounded-xl">
                            <div style={{ width: '100%', aspectRatio: '16/9', maxWidth: '100%' }}>
                                <SmartPlay
                                    mp4Upload=""
                                    videoUrl=""
                                    vimeoUrl=""
                                    posterUpload=""
                                    autoplay={true}
                                    muted={true}
                                    loop={true}
                                    scrollSectionName="spfs-mission-section"
                                    scrollOffsetY={100}
                                    accentColor="#10b981"
                                    radius={12}
                                    showTimeCodes={true}
                                    controlsAutoHide={true}
                                    showControlsBackground={false}
                                    appearEffect="fadeScale"
                                    appearDurationMs={600}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}