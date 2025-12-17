"use client"

import * as React from "react"
import {
    Play,
    Pause,
    Volume2,
    VolumeX,
    PictureInPicture,
    Maximize,
    ChevronDown,
} from "lucide-react"
import Player from "@vimeo/player"
import { motion } from "framer-motion"

/* ---------------------------------- Types --------------------------------- */

type PlayCenterCfg = {
    circleSize: number
    iconScale: number
    offsetX: number
    offsetY: number
    iconRoundness: number
    circleColor: string
    shadow: boolean
    hover: boolean
    glass: boolean
}

type AppearEffect = "none" | "fade" | "fadeScale" | "slide" | "blur"
type SlideDir = "up" | "down" | "left" | "right"
type EaseName = "easeOut" | "easeInOut" | "easeIn" | "linear"

type Props = {
    // Sources
    mp4Upload?: string
    posterUpload?: string
    videoUrl?: string
    vimeoUrl?: string
    // NEW — toggle shadow under the control bar
    showControlsShadow: boolean

    // Core UI
    accentColor: string
    radius: number
    autoplay: boolean
    muted: boolean
    loop: boolean
    showTimeCodes: boolean
    controlsColor: string

    // Vimeo
    vimeoShowNativeControls: boolean

    // Rate picker (HTML5)
    showPlaybackRate: boolean
    showRateLabel: boolean
    rateLabel: string

    // PiP (HTML5)
    pip: boolean

    // Scroll Section Autoplay
    scrollSectionName: string
    scrollOffsetY: number

    // Auto-hide
    controlsAutoHide: boolean
    controlsHideDelayMs: number

    // A11y
    ariaLabel: string

    // NEW — toggle bottom gradient behind controls
    showControlsBackground: boolean

    // Center Play
    playCenter?: PlayCenterCfg

    // Appear Effects
    appearEffect: AppearEffect
    appearDurationMs: number
    appearDelayMs: number
    appearEase: EaseName
    appearSlideDirection: SlideDir
    appearBlurPx: number
}

/* ---------------------------------- Utils --------------------------------- */

const clamp = (v: number, min: number, max: number) =>
    Math.min(max, Math.max(min, v))

const formatTime = (sec: number) => {
    if (!isFinite(sec)) return "0:00"
    const s = Math.floor(sec % 60)
        .toString()
        .padStart(2, "0")
    const m = Math.floor(sec / 60)
    return `${m}:${s}`
}

function findSection(name?: string | null): HTMLElement | null {
    if (!name) return null
    const id = name.replace(/^#/, "")
    return (
        (document.getElementById(id) as HTMLElement) ||
        (document.querySelector(`[data-framer-name="${id}"]`) as HTMLElement) ||
        (document.querySelector(`[name="${id}"]`) as HTMLElement)
    )
}

function inFramerCanvas(): boolean {
    try {
        const href = window.location?.href || ""
        return (
            /canvas|editor|framer\.com\/projects/i.test(href) ||
            !!(window as any).framer?.isEditor
        )
    } catch {
        return false
    }
}

function getVimeoId(urlOrEmbed?: string | null): string | null {
    if (!urlOrEmbed) return null
    const regex = /(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/
    const m = urlOrEmbed.match(regex)
    return m ? m[1] : null
}

const easeMap: Record<EaseName, any> = {
    easeOut: "easeOut",
    easeInOut: "easeInOut",
    easeIn: "easeIn",
    linear: "linear",
}

/* ------------------------------ Appear Variants --------------------------- */

function getAppearInitial(effect: AppearEffect, dir: SlideDir, blurPx: number) {
    switch (effect) {
        case "fade":
            return { opacity: 0 }
        case "fadeScale":
            return { opacity: 0, scale: 0.96 }
        case "slide": {
            const delta = 24 // px
            if (dir === "up") return { opacity: 0, y: delta }
            if (dir === "down") return { opacity: 0, y: -delta }
            if (dir === "left") return { opacity: 0, x: delta }
            return { opacity: 0, x: -delta } // right
        }
        case "blur":
            return { opacity: 0.001, filter: `blur(${Math.max(0, blurPx)}px)` }
        default:
            return {}
    }
}

function getAppearAnimate(effect: AppearEffect) {
    switch (effect) {
        case "fade":
        case "fadeScale":
            return { opacity: 1, scale: 1 }
        case "slide":
            return { opacity: 1, x: 0, y: 0 }
        case "blur":
            return { opacity: 1, filter: "blur(0px)" }
        default:
            return {}
    }
}

/* ------------------------------- Component -------------------------------- */

export default function SmartPlay(props: Partial<Props>) {
    const {
        mp4Upload,
        videoUrl,
        vimeoUrl,
        posterUpload,

        accentColor = "#FFD86E",
        controlsColor = "#fff",

        radius = 16,
        autoplay = false,
        muted = true,
        loop = false,
        showTimeCodes = true,

        vimeoShowNativeControls = false,

        showPlaybackRate = true,
        showRateLabel = false,
        rateLabel = "Speed",

        pip = true,

        scrollSectionName = "",
        scrollOffsetY = 0,

        controlsAutoHide = true,
        controlsHideDelayMs = 1600,

        ariaLabel = "Video player",

        // NEW — default OFF so white videos don't get tinted unless user enables it
        showControlsBackground = false,
        showControlsShadow = true,

        playCenter = {
            circleSize: 96,
            iconScale: 0.98,
            offsetX: -0.065,
            offsetY: -0.004,
            iconRoundness: 0.35,
            circleColor: "#ffffff",
            shadow: true,
            hover: true,
            glass: true,
        },

        // Appear
        appearEffect = "fade",
        appearDurationMs = 420,
        appearDelayMs = 0,
        appearEase = "easeOut",
        appearSlideDirection = "up",
        appearBlurPx = 10,
    } = props as Props

    const containerRef = React.useRef<HTMLDivElement>(null)
    const videoRef = React.useRef<HTMLVideoElement>(null)
    const vimeoMountRef = React.useRef<HTMLDivElement>(null)

    // Sources
    const vimeoId = React.useMemo(() => getVimeoId(vimeoUrl || ""), [vimeoUrl])
    const isVimeo = !!vimeoId
    const mp4Src = React.useMemo(
        () => (mp4Upload && mp4Upload.length > 0 ? mp4Upload : videoUrl || ""),
        [mp4Upload, videoUrl]
    )
    const src = isVimeo ? `https://player.vimeo.com/video/${vimeoId}` : mp4Src
    const poster = React.useMemo(
        () => (posterUpload && posterUpload.length > 0 ? posterUpload : ""),
        [posterUpload]
    )

    // State
    const [vimeoPlayer, setVimeoPlayer] = React.useState<Player | null>(null)
    const [ready, setReady] = React.useState(false)
    const [playing, setPlaying] = React.useState(false)
    const [duration, setDuration] = React.useState(0)
    const [current, setCurrent] = React.useState(0)
    const [isMuted, setIsMuted] = React.useState(muted)
    const [pipOn, setPipOn] = React.useState(false)
    const [fsOn, setFsOn] = React.useState(false)
    const [uiVisible, setUiVisible] = React.useState(true)
    const [hoverPlay, setHoverPlay] = React.useState(false)
    const [focusPlay, setFocusPlay] = React.useState(false)
    const [isHoveringPlayer, setIsHoveringPlayer] = React.useState(false)
    const [showPosterOverlay, setShowPosterOverlay] =
        React.useState<boolean>(!!poster)
    const [appeared, setAppeared] = React.useState(false) // appear animation trigger

    const hideTimer = React.useRef<number | null>(null)
    React.useEffect(() => setIsMuted(muted), [muted])

    /* --------------------------- Vimeo initialize -------------------------- */
    React.useEffect(() => {
        if (!isVimeo) {
            if (vimeoPlayer) {
                vimeoPlayer.destroy().catch(() => {})
                setVimeoPlayer(null)
            }
            return
        }
        if (!vimeoMountRef.current || !vimeoId) return

        const player = new Player(vimeoMountRef.current, {
            id: parseInt(vimeoId, 10),
            width: vimeoMountRef.current.clientWidth,
            height: vimeoMountRef.current.clientHeight,
            autoplay: autoplay && !inFramerCanvas(),
            muted: isMuted,
            loop,
            controls: vimeoShowNativeControls,
            dnt: true,
        })
        setVimeoPlayer(player)

        player.on("play", () => {
            setPlaying(true)
            setShowPosterOverlay(false)
            setAppeared(true)
            kickUiTimer()
        })
        player.on("pause", () => setPlaying(false))
        player.on("ended", () => setPlaying(false))
        player.on("timeupdate", (data: any) => setCurrent(data.seconds || 0))
        player.on("loaded", async () => {
            const dur = await player.getDuration()
            setDuration(dur || 0)
            setReady(true)
            layoutVimeo()
            // Autoplay yoksa bile yüklenince appear çalışsın:
            setTimeout(() => setAppeared(true), Math.max(0, appearDelayMs))
        })
        player.on("volumechange", async () => {
            const vol = await player.getVolume()
            setIsMuted(vol === 0)
        })

        return () => {
            player.destroy().catch(() => {})
            setVimeoPlayer(null)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVimeo, vimeoId, autoplay, loop, isMuted, vimeoShowNativeControls])

    /* --------------------------- HTML5 video wire -------------------------- */
    React.useEffect(() => {
        if (isVimeo) return
        const v = videoRef.current
        if (!v || !src) return
        if (v.src !== src) {
            v.src = src
            v.load()
        }
    }, [src, isVimeo])

    React.useEffect(() => {
        if (isVimeo) return
        const v = videoRef.current
        if (!v) return
        v.loop = loop
        v.muted = isMuted
    }, [loop, isMuted, isVimeo])

    React.useEffect(() => {
        if (isVimeo) return
        const v = videoRef.current
        if (!v) return
        if (autoplay && src && !inFramerCanvas()) v.play().catch(() => {})
    }, [autoplay, src, isVimeo])

    React.useEffect(() => {
        if (isVimeo) return
        const v = videoRef.current
        if (!v) return

        const onLoaded = () => {
            setDuration(v.duration || 0)
            setReady(true)
            setUiVisible(true)
            setTimeout(() => setAppeared(true), Math.max(0, appearDelayMs))
        }
        const onTime = () => setCurrent(v.currentTime || 0)
        const onPlay = () => {
            setPlaying(true)
            setShowPosterOverlay(false)
            setAppeared(true)
            kickUiTimer()
        }
        const onPause = () => {
            setPlaying(false)
            setUiVisible(true)
        }
        const onVol = () => setIsMuted(v.muted)

        v.addEventListener("loadedmetadata", onLoaded)
        v.addEventListener("timeupdate", onTime)
        v.addEventListener("play", onPlay)
        v.addEventListener("pause", onPause)
        v.addEventListener("volumechange", onVol)
        return () => {
            v.removeEventListener("loadedmetadata", onLoaded)
            v.removeEventListener("timeupdate", onTime)
            v.removeEventListener("play", onPlay)
            v.removeEventListener("pause", onPause)
            v.removeEventListener("volumechange", onVol)
        }
    }, [isVimeo, appearDelayMs])

    /* ----------------------------- PiP (HTML5) ----------------------------- */
    React.useEffect(() => {
        if (isVimeo) return
        const v = videoRef.current as any
        if (!v) return
        const onEnter = () => setPipOn(true)
        const onLeave = () => setPipOn(false)
        const onWebkit = () =>
            setPipOn(v.webkitPresentationMode === "picture-in-picture")
        v.addEventListener?.("enterpictureinpicture", onEnter)
        v.addEventListener?.("leavepictureinpicture", onLeave)
        v.addEventListener?.("webkitpresentationmodechanged", onWebkit as any)
        return () => {
            v.removeEventListener?.("enterpictureinpicture", onEnter)
            v.removeEventListener?.("leavepictureinpicture", onLeave)
            v.removeEventListener?.(
                "webkitpresentationmodechanged",
                onWebkit as any
            )
        }
    }, [isVimeo])

    const togglePiP = React.useCallback(async () => {
        if (isVimeo) return
        const v = videoRef.current as any
        if (!v) return
        try {
            if (
                (document as any).pictureInPictureEnabled &&
                v.requestPictureInPicture
            ) {
                if ((document as any).pictureInPictureElement) {
                    await (document as any).exitPictureInPicture()
                } else {
                    await v.requestPictureInPicture()
                }
                return
            }
            if (
                v.webkitSupportsPresentationMode &&
                typeof v.webkitSetPresentationMode === "function"
            ) {
                const next =
                    v.webkitPresentationMode === "picture-in-picture"
                        ? "inline"
                        : "picture-in-picture"
                v.webkitSetPresentationMode(next)
            }
        } catch {}
    }, [isVimeo])

    /* ---------------------------- Auto-hide UI ----------------------------- */
    const kickUiTimer = React.useCallback(() => {
        if (!controlsAutoHide || (isVimeo && vimeoShowNativeControls)) {
            setUiVisible(true)
            return
        }
        setUiVisible(true)
        if (hideTimer.current) window.clearTimeout(hideTimer.current)
        if (playing)
            hideTimer.current = window.setTimeout(
                () => setUiVisible(false),
                Math.max(600, controlsHideDelayMs)
            )
    }, [
        controlsAutoHide,
        controlsHideDelayMs,
        playing,
        isVimeo,
        vimeoShowNativeControls,
    ])

    /* ------------------------------ Vimeo fill ----------------------------- */
    async function layoutVimeo() {
        if (!isVimeo || !vimeoPlayer || !containerRef.current) return
        const el = (vimeoPlayer as any).element as HTMLIFrameElement | undefined
        if (!el) return
        el.style.position = "absolute"
        el.style.inset = "0"
        el.style.width = "100%"
        el.style.height = "100%"
        el.style.border = "0"
        el.style.pointerEvents = vimeoShowNativeControls ? "auto" : "none"
    }

    React.useEffect(() => {
        if (!isVimeo) return
        const ro = new ResizeObserver(() => layoutVimeo())
        if (containerRef.current) ro.observe(containerRef.current)
        const onFs = () => layoutVimeo()
        document.addEventListener("fullscreenchange", onFs)
        window.addEventListener("resize", onFs)
        return () => {
            ro.disconnect()
            document.removeEventListener("fullscreenchange", onFs)
            window.removeEventListener("resize", onFs)
        }
    }, [isVimeo, vimeoPlayer, vimeoShowNativeControls])

    /* ---------------------------- Scroll autoplay -------------------------- */
    React.useEffect(() => {
        if (!scrollSectionName) return
        const el = findSection(scrollSectionName)
        if (!el) return

        const play = () => {
            if (isVimeo && vimeoPlayer) vimeoPlayer.play().catch(() => {})
            else videoRef.current?.play()
        }
        const pause = () => {
            if (isVimeo && vimeoPlayer) vimeoPlayer.pause().catch(() => {})
            else videoRef.current?.pause()
        }

        const onScroll = () => {
            const rect = el.getBoundingClientRect()
            const vh = window.innerHeight
            const top = rect.top - scrollOffsetY
            const bottom = rect.bottom + scrollOffsetY
            const visible = top < vh * 0.6 && bottom > vh * 0.4
            if (visible) play()
            else pause()
        }
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        window.addEventListener("resize", onScroll)
        return () => {
            window.removeEventListener("scroll", onScroll)
            window.removeEventListener("resize", onScroll)
        }
    }, [scrollSectionName, scrollOffsetY, duration, isVimeo, vimeoPlayer])

    /* ------------------------------ Timeline ------------------------------- */
    const pctPlayed = duration ? current / duration : 0
    const seekToPct = React.useCallback(
        (pct: number) => {
            if (!duration) return
            const time = clamp(pct, 0, 1) * duration
            if (isVimeo && vimeoPlayer) vimeoPlayer.setCurrentTime(time)
            else if (videoRef.current) videoRef.current.currentTime = time
        },
        [duration, isVimeo, vimeoPlayer]
    )

    const timelineRef = React.useRef<HTMLDivElement>(null)
    function localPct(e: React.MouseEvent | React.TouchEvent) {
        const el = timelineRef.current
        if (!el) return 0
        const rect = el.getBoundingClientRect()
        const x =
            "touches" in e
                ? (e as React.TouchEvent).touches[0].clientX - rect.left
                : (e as React.MouseEvent).clientX - rect.left
        return clamp(x / rect.width, 0, 1)
    }
    const [dragPct, setDragPct] = React.useState<number | null>(null)
    const onMove = (e: React.MouseEvent) => {
        localPct(e)
        kickUiTimer()
    }
    const onDown = (e: React.MouseEvent) => {
        const p = localPct(e)
        setDragPct(p)
        e.preventDefault()
    }
    const onUp = () => {
        if (dragPct != null) seekToPct(dragPct)
        setDragPct(null)
    }
    const onDrag = (e: React.MouseEvent) => {
        if (dragPct != null) setDragPct(localPct(e))
    }

    const activePct = dragPct ?? pctPlayed
    const activeTime = activePct * (duration || 0)

    const bufferedPct = React.useMemo(() => {
        if (isVimeo) return 0
        const v = videoRef.current
        if (!v || !v.buffered || !duration) return 0
        const n = v.buffered.length
        if (!n) return 0
        const end = v.buffered.end(n - 1)
        return clamp(end / duration, 0, 1)
    }, [current, duration, isVimeo])

    const rates = [0.75, 1, 1.25, 1.5, 2]

    /* ------------------------------ Actions -------------------------------- */
    const togglePlay = React.useCallback(() => {
        if (isVimeo && vimeoPlayer) {
            vimeoPlayer.getPaused().then((paused) => {
                if (paused) vimeoPlayer.play()
                else vimeoPlayer.pause()
            })
        } else if (videoRef.current) {
            const v = videoRef.current
            playing ? v.pause() : v.play()
        }
    }, [isVimeo, vimeoPlayer, playing])

    const toggleMute = React.useCallback(() => {
        const next = !isMuted
        if (isVimeo && vimeoPlayer) {
            vimeoPlayer.setVolume(next ? 0 : 1)
        } else if (videoRef.current) {
            videoRef.current.muted = next
            if (!next && videoRef.current.volume === 0)
                videoRef.current.volume = 1
        }
        setIsMuted(next)
    }, [isVimeo, vimeoPlayer, isMuted])

    /* -------------------------------- Render ------------------------------- */
    const playSize = playCenter.circleSize
    const iconSize = Math.max(
        16,
        Math.round(playSize * clamp(playCenter.iconScale, 0.1, 2))
    )
    const iconOffsetXPx = Math.round(
        playSize * clamp(playCenter.offsetX, -0.25, 0.25)
    )
    const iconOffsetYPx = Math.round(
        playSize * clamp(playCenter.offsetY, -0.25, 0.25)
    )
    const iconRound = clamp(playCenter.iconRoundness, 0, 0.35)

    const showCustomControls = !isVimeo || (isVimeo && !vimeoShowNativeControls)

    const appearInitial = getAppearInitial(
        appearEffect,
        appearSlideDirection,
        appearBlurPx
    )
    const appearAnimate = getAppearAnimate(appearEffect)
    const appearTransition = {
        duration: Math.max(0.06, appearDurationMs / 1000),
        delay: Math.max(0, appearDelayMs / 1000),
        ease: easeMap[appearEase],
    }

    return (
        <div
            ref={containerRef}
            tabIndex={0}
            aria-label={ariaLabel}
            onMouseMove={kickUiTimer}
            onMouseEnter={() => setIsHoveringPlayer(true)}
            onMouseLeave={() => {
                setIsHoveringPlayer(false)
                if (controlsAutoHide && playing && showCustomControls)
                    setUiVisible(false)
            }}
            onKeyDown={(e) => {
                const key = e.key.toLowerCase()
                switch (key) {
                    case " ":
                    case "k":
                        e.preventDefault()
                        togglePlay()
                        break
                    case "arrowleft":
                        if (duration)
                            seekToPct(pctPlayed - 5 / Math.max(duration, 1))
                        break
                    case "arrowright":
                        if (duration)
                            seekToPct(pctPlayed + 5 / Math.max(duration, 1))
                        break
                    case "m":
                        toggleMute()
                        break
                    case "f":
                        ;(async () => {
                            try {
                                if (!document.fullscreenElement) {
                                    await containerRef.current?.requestFullscreen?.()
                                    setFsOn(true)
                                } else {
                                    await document.exitFullscreen?.()
                                    setFsOn(false)
                                }
                            } catch {}
                        })()
                        break
                    case "i":
                        if (!isVimeo && pip) togglePiP()
                        break
                }
            }}
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
                minWidth: 160,
                minHeight: 90,
                overflow: "hidden",
                borderRadius: radius,
                background: "#000",
                color: controlsColor,
                outline: "none",
            }}
        >
            {/* Video layer with appear animation */}
            <motion.div
                initial={!appeared ? appearInitial : {}}
                animate={appeared ? appearAnimate : {}}
                transition={appearTransition}
                style={{ position: "absolute", inset: 0, zIndex: 1 }}
            >
                {isVimeo ? (
                    <div
                        ref={vimeoMountRef}
                        style={{
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                            pointerEvents: vimeoShowNativeControls
                                ? "auto"
                                : "none",
                        }}
                    />
                ) : (
                    <video
                        ref={videoRef}
                        poster={poster || undefined}
                        playsInline
                        preload="metadata"
                        controls={false}
                        style={{
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            display: "block",
                            objectFit: "cover",
                            objectPosition: "center",
                            opacity: !src ? 0.3 : 1,
                            transition: "opacity .2s",
                        }}
                        onClick={togglePlay}
                        onDoubleClick={() => {
                            if (!document.fullscreenElement)
                                containerRef.current?.requestFullscreen?.()
                            else document.exitFullscreen?.()
                        }}
                        muted={isMuted}
                        autoPlay={autoplay && !inFramerCanvas()}
                        loop={loop}
                        controlsList={
                            "nodownload noplaybackrate noremoteplayback" as any
                        }
                    />
                )}
            </motion.div>

            {/* Poster overlay (Vimeo only) */}
            {isVimeo && showPosterOverlay && poster && (
                <div
                    onClick={() => {
                        setShowPosterOverlay(false)
                        togglePlay()
                    }}
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url(${poster})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transition: "opacity 220ms ease",
                        opacity: showPosterOverlay ? 1 : 0,
                        pointerEvents: "auto",
                        zIndex: 2,
                    }}
                />
            )}

            {/* Center Play & hover Pause (custom controls mode) */}
            {showCustomControls && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        display: "grid",
                        placeItems: "center",
                        pointerEvents: "none",
                        zIndex: 3,
                    }}
                >
                    {!playing && !!src && (
                        <button
                            aria-label="Play"
                            onClick={() => {
                                setShowPosterOverlay(false)
                                togglePlay()
                            }}
                            onMouseEnter={() =>
                                playCenter.hover && setHoverPlay(true)
                            }
                            onMouseLeave={() =>
                                playCenter.hover && setHoverPlay(false)
                            }
                            onFocus={() => setFocusPlay(true)}
                            onBlur={() => setFocusPlay(false)}
                            style={{
                                pointerEvents: "auto",
                                width: playSize,
                                height: playSize,
                                borderRadius: 999,
                                border: "1px solid rgba(0,0,0,.06)",
                                background: playCenter.glass
                                    ? "rgba(255,255,255,0.08)"
                                    : playCenter.circleColor,
                                display: "grid",
                                placeItems: "center",
                                lineHeight: 0,
                                boxShadow: focusPlay
                                    ? `0 0 0 3px ${accentColor}60, 0 0 0 5px rgba(0,0,0,.25)` // focus ring
                                    : playCenter.shadow
                                      ? hoverPlay
                                          ? "0 14px 36px rgba(0,0,0,0.44)" // hover drop shadow
                                          : "0 12px 34px rgba(0,0,0,0.38)" // normal drop shadow
                                      : "none",

                                cursor: "pointer",
                                transform: hoverPlay
                                    ? "scale(1.06)"
                                    : "scale(1)",
                                transition:
                                    "box-shadow 180ms ease, transform 180ms ease, background 180ms ease",
                                backdropFilter: playCenter.glass
                                    ? "saturate(160%) blur(14px)"
                                    : undefined,
                                WebkitBackdropFilter: playCenter.glass
                                    ? "saturate(160%) blur(14px)"
                                    : undefined,
                                borderColor: playCenter.glass
                                    ? "rgba(255,255,255,0.18)"
                                    : "rgba(0,0,0,.06)",
                                outline: "none",
                            }}
                        >
                            <div
                                style={{
                                    width: iconSize,
                                    height: iconSize,
                                    display: "grid",
                                    placeItems: "center",
                                    transform: `translate(${iconOffsetXPx}px, ${iconOffsetYPx}px)`,
                                }}
                            >
                                <RoundedPlay
                                    size={iconSize}
                                    color={accentColor}
                                    round={iconRound}
                                />
                            </div>
                        </button>
                    )}

                    {playing && isHoveringPlayer && (
                        <button
                            aria-label="Pause"
                            onClick={togglePlay}
                            style={{
                                pointerEvents: "auto",
                                width: playCenter.circleSize,
                                height: playCenter.circleSize,
                                borderRadius: 999,
                                background: "transparent",
                                border: "none",
                                display: "grid",
                                placeItems: "center",
                                cursor: "pointer",
                                color: accentColor,
                                transition:
                                    "opacity 150ms ease, transform 150ms ease",
                                opacity: uiVisible ? 1 : 0,
                                transform: uiVisible
                                    ? "scale(1)"
                                    : "scale(0.8)",
                            }}
                        >
                            <Pause
                                size={Math.round(playCenter.circleSize * 0.5)}
                            />
                        </button>
                    )}
                </div>
            )}

            {/* Controls overlay */}
            {showCustomControls && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        background:
                            ready && showControlsBackground
                                ? "linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0.15) 40%, rgba(0,0,0,0))"
                                : "transparent",
                        pointerEvents: "none",
                        zIndex: 3,
                    }}
                >
                    <div
                        style={{
                            pointerEvents: !src ? "none" : "auto",
                            background: "rgba(255,255,255,0.08)",
                            backdropFilter: "saturate(160%) blur(14px)",
                            WebkitBackdropFilter: "saturate(160%) blur(14px)",
                            border: "1px solid rgba(255,255,255,0.18)",
                            borderRadius: 16,
                            padding: 12,
                            margin: "0 12px 12px",
                            boxShadow: showControlsShadow
                                ? "0 8px 24px rgba(0,0,0,0.25)"
                                : "none",
                            transform: uiVisible
                                ? "translateY(0px)"
                                : "translateY(18px)",
                            opacity: uiVisible ? 1 : 0,
                            transition:
                                "opacity 220ms ease, transform 220ms ease",
                        }}
                    >
                        {/* Timeline */}
                        <div
                            ref={timelineRef}
                            role="slider"
                            aria-valuemin={0}
                            aria-valuemax={duration || 0}
                            aria-valuenow={activeTime}
                            aria-valuetext={`${formatTime(activeTime)} of ${formatTime(duration)}`}
                            onMouseMove={onMove}
                            onMouseLeave={() => {}}
                            onMouseDown={onDown}
                            onMouseUp={onUp}
                            onMouseEnter={onMove as any}
                            onMouseMoveCapture={onDrag}
                            style={{
                                position: "relative",
                                height: 24,
                                width: "100%",
                                cursor: "pointer",
                                userSelect: "none",
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <div
                                    style={{
                                        position: "relative",
                                        width: "100%",
                                        height: 6,
                                        borderRadius: 999,
                                        background: "rgba(255,255,255,0.18)",
                                    }}
                                >
                                    {!isVimeo && (
                                        <div
                                            style={{
                                                position: "absolute",
                                                left: 0,
                                                top: 0,
                                                bottom: 0,
                                                width: `${bufferedPct * 100}%`,
                                                background:
                                                    "rgba(255,255,255,0.28)",
                                                borderRadius: 999,
                                            }}
                                        />
                                    )}
                                    <div
                                        style={{
                                            position: "absolute",
                                            left: 0,
                                            top: 0,
                                            bottom: 0,
                                            width: `${activePct * 100}%`,
                                            background: accentColor,
                                            borderRadius: 999,
                                        }}
                                    />
                                    <div
                                        style={{
                                            position: "absolute",
                                            left: `${activePct * 100}%`,
                                            top: -4,
                                            width: 16,
                                            height: 16,
                                            background: controlsColor,
                                            borderRadius: 999,
                                            transform: "translate(-8px, 0)",
                                            boxShadow: `0 0 0 3px rgba(0,0,0,0.25), 0 0 0 5px ${accentColor}40`,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Controls row */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 10,
                                marginTop: 10,
                            }}
                        >
                            <IconButton
                                label={playing ? "Pause" : "Play"}
                                onClick={togglePlay}
                            >
                                {playing ? (
                                    <Pause size={18} />
                                ) : (
                                    <Play size={18} />
                                )}
                            </IconButton>

                            <IconButton
                                label={isMuted ? "Unmute" : "Mute"}
                                onClick={toggleMute}
                            >
                                {isMuted ? (
                                    <VolumeX size={18} />
                                ) : (
                                    <Volume2 size={18} />
                                )}
                            </IconButton>

                            {showTimeCodes && (
                                <div
                                    style={{
                                        fontVariantNumeric: "tabular-nums",
                                        opacity: 0.95,
                                    }}
                                >
                                    {formatTime(current)} /{" "}
                                    {formatTime(duration)}
                                </div>
                            )}
                            <div style={{ flex: 1 }} />

                            {showPlaybackRate && !isVimeo && (
                                <div
                                    style={{
                                        position: "relative",
                                        marginRight: 6,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 8,
                                    }}
                                >
                                    {showRateLabel && (
                                        <span
                                            style={{
                                                opacity: 0.9,
                                                fontSize: 12,
                                            }}
                                        >
                                            {rateLabel || "Speed"}
                                        </span>
                                    )}
                                    <select
                                        aria-label="Playback Rate"
                                        value={
                                            videoRef.current?.playbackRate || 1
                                        }
                                        onChange={(e) => {
                                            const v = videoRef.current!
                                            v.playbackRate = parseFloat(
                                                e.target.value
                                            )
                                        }}
                                        style={{
                                            appearance: "none",
                                            WebkitAppearance: "none" as any,
                                            MozAppearance: "none" as any,
                                            background:
                                                "rgba(255,255,255,0.10)",
                                            color: controlsColor,
                                            border: "1px solid rgba(255,255,255,0.16)",
                                            padding: "6px 36px 6px 12px",
                                            borderRadius: 12,
                                            minWidth: 76,
                                            lineHeight: 1,
                                            outline: "none",
                                        }}
                                    >
                                        {rates.map((r, i) => (
                                            <option
                                                key={i}
                                                value={r}
                                                style={{ color: "#000" }}
                                            >
                                                {r}×
                                            </option>
                                        ))}
                                    </select>
                                    <div
                                        style={{
                                            pointerEvents: "none",
                                            position: "absolute",
                                            right: 12,
                                            top: 0,
                                            bottom: 0,
                                            display: "grid",
                                            placeItems: "center",
                                        }}
                                    >
                                        <ChevronDown size={16} />
                                    </div>
                                </div>
                            )}

                            {pip && !isVimeo && (
                                <IconButton
                                    label={pipOn ? "Exit PiP" : "PiP"}
                                    onClick={togglePiP}
                                >
                                    <PictureInPicture size={18} />
                                </IconButton>
                            )}

                            <IconButton
                                label={fsOn ? "Exit Fullscreen" : "Fullscreen"}
                                onClick={async () => {
                                    try {
                                        if (!document.fullscreenElement) {
                                            await containerRef.current?.requestFullscreen?.()
                                            setFsOn(true)
                                        } else {
                                            await document.exitFullscreen?.()
                                            setFsOn(false)
                                        }
                                    } catch {}
                                }}
                            >
                                <Maximize size={18} />
                            </IconButton>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

/* ------------------------------ Subcomponents ------------------------------ */

function IconButton({
    label,
    onClick,
    children,
}: {
    label: string
    onClick: () => void
    children: React.ReactNode
}) {
    return (
        <button
            aria-label={label}
            onClick={onClick}
            style={{
                display: "grid",
                placeItems: "center",
                width: 38,
                height: 38,
                borderRadius: 12,
                background: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.16)",
                color: "inherit",
                cursor: "pointer",
            }}
        >
            {children}
        </button>
    )
}

function RoundedPlay({
    size = 50,
    color = "#000",
    round = 0.18,
}: {
    size?: number
    color?: string
    round?: number
}) {
    const r = clamp(round, 0, 0.35)
    const sw = r * 10
    const inset = sw * 0.6
    const tipInset = sw * 0.3
    const x1 = 40 + inset
    const y1 = 30 + inset
    const x2 = 40 + inset
    const y2 = 70 - inset
    const x3 = 70 - tipInset
    const y3 = 50
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            aria-hidden="true"
            focusable="false"
            style={{ display: "block" }}
        >
            <path
                d={`M ${x1},${y1} L ${x2},${y2} L ${x3},${y3} Z`}
                fill={color}
            />
            {r > 0 && (
                <path
                    d={`M ${x1},${y1} L ${x2},${y2} L ${x3},${y3} Z`}
                    fill="none"
                    stroke={color}
                    strokeWidth={sw}
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                />
            )}
        </svg>
    )
}

/* -------------------- Defaults & Property Controls (Framer) -------------------- */

SmartPlay.defaultProps = {
    mp4Upload: "",
    videoUrl: "",
    vimeoUrl: "",
    posterUpload: "",
    accentColor: "#FFD86E",
    controlsColor: "#fff",
    radius: 16,
    autoplay: false,
    muted: true,
    loop: false,
    showTimeCodes: true,
    showControlsShadow: true,

    vimeoShowNativeControls: false,

    showPlaybackRate: true,
    showRateLabel: false,
    rateLabel: "Speed",

    pip: true,

    scrollSectionName: "",
    scrollOffsetY: 0,

    controlsAutoHide: true,
    controlsHideDelayMs: 1600,

    ariaLabel: "Video player",

    // NEW — default OFF to avoid tint on white videos
    showControlsBackground: false,

    playCenter: {
        circleSize: 96,
        iconScale: 0.98,
        offsetX: -0.065,
        offsetY: -0.004,
        iconRoundness: 0.35,
        circleColor: "#ffffff",
        shadow: true,
        hover: true,
        glass: true,
    },

    // Appear
    appearEffect: "fade",
    appearDurationMs: 420,
    appearDelayMs: 0,
    appearEase: "easeOut",
    appearSlideDirection: "up",
    appearBlurPx: 10,

    width: 960,
    height: 540,
}

;(SmartPlay as any).defaultProps = {
    ...(SmartPlay as any).defaultProps,
    width: 960,
    height: 540,
}
