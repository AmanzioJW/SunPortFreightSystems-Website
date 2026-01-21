"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import RoadmapPath, { stepPositions } from "./roadmap/RoadmapPath";
import RoadmapStep from "./roadmap/RoadmapStep";
import RoadmapStepDetail from "./roadmap/RoadmapStepDetail";
import RoadmapProgress from "./roadmap/RoadmapProgress";
import { roadmapSteps, type RoadmapStepData } from "./roadmap/roadmap-data";
import styles from "./roadmap/roadmap.module.css";

export default function Roadmap() {
  const [progress, setProgress] = useState(0);
  const [selectedStep, setSelectedStep] = useState<RoadmapStepData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const currentStepIndex = Math.min(Math.floor(progress * 12), 11);

  const handleStepClick = useCallback((step: RoadmapStepData) => {
    setSelectedStep(step);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleProgressClick = useCallback((stepIndex: number) => {
    // Scroll to make the step visible
    const container = document.querySelector(".roadmap-container");
    if (container) {
      const containerRect = container.getBoundingClientRect();
      const scrollTarget = containerRect.top + window.scrollY + (containerRect.height * stepIndex) / 12;
      window.scrollTo({ top: scrollTarget - 200, behavior: "smooth" });
    }
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.19, 1.0, 0.22, 1.0] }}
        >
          <h2 className={styles.title}>Your Freight Journey</h2>
          <p className={styles.subtitle}>
            From initial inquiry to proof of delivery, follow your cargo through our
            streamlined 12-step logistics process.
          </p>
        </motion.div>

        {/* Progress Indicator */}
        <RoadmapProgress progress={progress} onStepClick={handleProgressClick} />

        {/* Main Roadmap Visualization */}
        <div className="roadmap-container relative mt-8 mb-16">
          {/* Desktop: Horizontal S-curve layout */}
          <div className={`${styles.desktopRoadmap} hidden lg:block`}>
            <div className="relative w-full max-w-[900px] mx-auto aspect-[900/560]">
              {/* SVG Path */}
              <RoadmapPath
                onProgressChange={prefersReducedMotion ? undefined : setProgress}
              />

              {/* Step markers positioned over the path */}
              <div className="absolute inset-0">
                {roadmapSteps.map((step, index) => (
                  <RoadmapStep
                    key={step.id}
                    step={step}
                    index={index}
                    isActive={index === currentStepIndex}
                    isCompleted={index < currentStepIndex}
                    onClick={() => handleStepClick(step)}
                    position={{
                      x: (stepPositions[index].x / 900) * 100,
                      y: (stepPositions[index].y / 560) * 100,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet: Vertical timeline */}
          <div className={`${styles.mobileRoadmap} lg:hidden`}>
            <div className="relative max-w-md mx-auto px-4">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#E6E6D1]">
                <motion.div
                  className="w-full bg-gradient-to-b from-[#D0FFA8] to-[#D0FFA8]"
                  style={{ height: `${progress * 100}%` }}
                  initial={{ height: 0 }}
                  animate={{ height: `${progress * 100}%` }}
                />
              </div>

              {/* Steps */}
              <div className="space-y-8 py-8">
                {roadmapSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = index === currentStepIndex;
                  const isCompleted = index < currentStepIndex;

                  return (
                    <motion.button
                      key={step.id}
                      className="flex items-start gap-4 w-full text-left focus:outline-none group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                      onClick={() => handleStepClick(step)}
                    >
                      {/* Step marker */}
                      <div
                        className={`
                          relative z-10 flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300
                          ${
                            isActive
                              ? "bg-[#D0FFA8] border-[#D0FFA8] shadow-[0_0_15px_rgba(208,255,168,0.5)]"
                              : isCompleted
                              ? "bg-[#D0FFA8] border-[#D0FFA8]"
                              : "bg-[#E6E6D1] border-[#B5B9A6] group-hover:border-[#D0FFA8]"
                          }
                        `}
                      >
                        <Icon
                          className={`w-5 h-5 ${
                            isActive || isCompleted ? "text-[#072C2C]" : "text-[#616659]"
                          }`}
                          strokeWidth={2}
                        />
                        <span
                          className={`
                            absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-medium rounded-full
                            ${isActive || isCompleted ? "bg-[#FF5F02] text-white" : "bg-[#B5B9A6] text-white"}
                          `}
                        >
                          {step.id}
                        </span>
                      </div>

                      {/* Step content */}
                      <div className="flex-1 pt-1">
                        <h3
                          className={`font-semibold transition-colors ${
                            isActive ? "text-[#072C2C]" : "text-[#616659] group-hover:text-[#072C2C]"
                          }`}
                        >
                          {step.title}
                        </h3>
                        <p className="text-sm text-[#B5B9A6] mt-1 line-clamp-2">
                          {step.description}
                        </p>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Reduced motion fallback message */}
        {prefersReducedMotion && (
          <p className="text-center text-sm text-[#B5B9A6] mb-8">
            Animations reduced based on your system preferences. Click any step for details.
          </p>
        )}
      </div>

      {/* Step Detail Modal */}
      <RoadmapStepDetail
        step={selectedStep}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
