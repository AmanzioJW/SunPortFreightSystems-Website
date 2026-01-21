"use client";

import { motion } from "framer-motion";
import type { RoadmapStepData } from "./roadmap-data";

interface RoadmapStepProps {
  step: RoadmapStepData;
  index: number;
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
  position: { x: number; y: number };
}

const stepVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.08,
      type: "spring" as const,
      stiffness: 300,
      damping: 20,
    },
  }),
};

export default function RoadmapStep({
  step,
  index,
  isActive,
  isCompleted,
  onClick,
  position,
}: RoadmapStepProps) {
  const Icon = step.icon;

  return (
    <motion.button
      className="roadmap-step group absolute flex flex-col items-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D0FFA8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8faf0]"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: "translate(-50%, -50%)",
      }}
      variants={stepVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      custom={index}
      onClick={onClick}
      aria-label={`Step ${step.id}: ${step.title}. Click for details.`}
    >
      {/* Step marker circle */}
      <motion.div
        className={`
          relative flex items-center justify-center w-14 h-14 rounded-full border-2 transition-all duration-300
          ${
            isActive
              ? "bg-[#D0FFA8] border-[#D0FFA8] shadow-[0_0_20px_rgba(208,255,168,0.6)]"
              : isCompleted
              ? "bg-[#D0FFA8] border-[#D0FFA8]"
              : "bg-[#E6E6D1] border-[#B5B9A6] group-hover:border-[#D0FFA8] group-hover:bg-[#E6E6D1]/80"
          }
        `}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Icon
          className={`w-6 h-6 transition-colors duration-300 ${
            isActive || isCompleted ? "text-[#072C2C]" : "text-[#616659] group-hover:text-[#072C2C]"
          }`}
          strokeWidth={2}
        />

        {/* Step number badge */}
        <span
          className={`
            absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-medium rounded-full
            ${
              isActive || isCompleted
                ? "bg-[#FF5F02] text-white"
                : "bg-[#B5B9A6] text-white"
            }
          `}
        >
          {step.id}
        </span>
      </motion.div>

      {/* Step label */}
      <span
        className={`
          mt-2 text-sm font-medium whitespace-nowrap transition-colors duration-300
          ${
            isActive
              ? "text-[#072C2C]"
              : isCompleted
              ? "text-[#072C2C]"
              : "text-[#616659] group-hover:text-[#072C2C]"
          }
        `}
      >
        {step.shortTitle}
      </span>
    </motion.button>
  );
}
