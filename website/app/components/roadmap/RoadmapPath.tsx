"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

interface RoadmapPathProps {
  onProgressChange?: (progress: number) => void;
}

// Step positions along the path (percentage of path length)
export const stepPositions = [
  { x: 120, y: 80 },   // 1. Inquiry
  { x: 320, y: 80 },   // 2. Quote
  { x: 520, y: 80 },   // 3. Contract
  { x: 720, y: 80 },   // 4. Documentation
  { x: 820, y: 200 },  // 5. Pickup (curve down)
  { x: 620, y: 280 },  // 6. Warehousing
  { x: 420, y: 280 },  // 7. Loading
  { x: 220, y: 280 },  // 8. Transit
  { x: 120, y: 400 },  // 9. Customs (curve down)
  { x: 320, y: 480 },  // 10. Last-Mile
  { x: 520, y: 480 },  // 11. Delivery
  { x: 720, y: 480 },  // 12. POD
];

export default function RoadmapPath({ onProgressChange }: RoadmapPathProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const freightIconRef = useRef<SVGGElement>(null);
  const containerRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    const path = pathRef.current;
    const freightIcon = freightIconRef.current;

    if (!path || !freightIcon) return;

    // Get path length for dash animation
    const pathLength = path.getTotalLength();

    // Set up initial state
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    gsap.set(freightIcon, {
      opacity: 0,
    });

    // Create main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".roadmap-container",
        start: "top 70%",
        end: "bottom 30%",
        scrub: 1.5,
        onUpdate: (self) => {
          onProgressChange?.(self.progress);
        },
      },
    });

    // Path draw animation
    tl.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      duration: 1,
    }, 0);

    // Freight icon fade in
    tl.to(freightIcon, {
      opacity: 1,
      duration: 0.1,
    }, 0);

    // Freight icon follows path
    tl.to(freightIcon, {
      motionPath: {
        path: path,
        align: path,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      ease: "none",
      duration: 1,
    }, 0);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [onProgressChange]);

  // S-curve path connecting all 12 steps
  const pathD = `
    M 120 80
    L 320 80
    L 520 80
    L 720 80
    Q 870 80 870 180
    Q 870 280 720 280
    L 520 280
    L 320 280
    L 220 280
    Q 70 280 70 380
    Q 70 480 220 480
    L 420 480
    L 620 480
    L 720 480
  `.trim();

  return (
    <svg
      ref={containerRef}
      viewBox="0 0 900 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      aria-hidden="true"
    >
      {/* Background path (dashed) */}
      <path
        d={pathD}
        stroke="#B5B9A6"
        strokeWidth="3"
        strokeDasharray="8 8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Animated progress path */}
      <path
        ref={pathRef}
        id="roadmap-path"
        d={pathD}
        stroke="url(#roadmap-gradient)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Gradient definition */}
      <defs>
        <linearGradient id="roadmap-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B5B9A6" />
          <stop offset="50%" stopColor="#D0FFA8" />
          <stop offset="100%" stopColor="#D0FFA8" />
        </linearGradient>
      </defs>

      {/* Traveling freight icon */}
      <g ref={freightIconRef} id="freight-icon">
        <circle cx="0" cy="0" r="16" fill="#FF5F02" />
        <path
          d="M-6 -3 L6 -3 L8 3 L-8 3 Z"
          fill="white"
          transform="translate(0, -1)"
        />
        <circle cx="-4" cy="5" r="2.5" fill="white" />
        <circle cx="4" cy="5" r="2.5" fill="white" />
      </g>
    </svg>
  );
}
