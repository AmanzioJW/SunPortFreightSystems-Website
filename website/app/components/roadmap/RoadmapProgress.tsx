"use client";

import { motion } from "framer-motion";
import { roadmapSteps } from "./roadmap-data";

interface RoadmapProgressProps {
  progress: number;
  onStepClick?: (stepIndex: number) => void;
}

export default function RoadmapProgress({
  progress,
  onStepClick,
}: RoadmapProgressProps) {
  const currentStep = Math.floor(progress * 12);

  return (
    <div className="sticky top-4 z-40 mx-auto max-w-3xl px-4">
      <div className="bg-[#f8faf0]/90 backdrop-blur-md rounded-full px-4 py-3 shadow-lg border border-[#E6E6D1]">
        <div className="flex items-center gap-1">
          {roadmapSteps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isActive = index === currentStep;
            const Icon = step.icon;

            return (
              <button
                key={step.id}
                onClick={() => onStepClick?.(index)}
                className="flex-1 group relative focus:outline-none"
                aria-label={`Go to step ${step.id}: ${step.title}`}
              >
                {/* Connection line */}
                {index > 0 && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5">
                    <div
                      className={`h-full transition-colors duration-300 ${
                        isCompleted ? "bg-[#D0FFA8]" : "bg-[#E6E6D1]"
                      }`}
                    />
                  </div>
                )}

                {/* Step dot */}
                <motion.div
                  className={`
                    relative mx-auto w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer
                    ${
                      isActive
                        ? "bg-[#D0FFA8] ring-2 ring-[#D0FFA8] ring-offset-2 ring-offset-[#f8faf0]"
                        : isCompleted
                        ? "bg-[#D0FFA8]"
                        : "bg-[#E6E6D1] group-hover:bg-[#B5B9A6]"
                    }
                  `}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon
                    className={`w-3 h-3 ${
                      isActive || isCompleted ? "text-[#072C2C]" : "text-[#616659]"
                    }`}
                    strokeWidth={2.5}
                  />
                </motion.div>

                {/* Tooltip on hover */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="bg-[#072C2C] text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {step.shortTitle}
                  </div>
                  <div className="w-2 h-2 bg-[#072C2C] rotate-45 absolute left-1/2 -translate-x-1/2 -bottom-1" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Progress bar underneath */}
        <div className="mt-2 h-1 bg-[#E6E6D1] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#B5B9A6] via-[#D0FFA8] to-[#D0FFA8] rounded-full"
            style={{ width: `${progress * 100}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${progress * 100}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
}
