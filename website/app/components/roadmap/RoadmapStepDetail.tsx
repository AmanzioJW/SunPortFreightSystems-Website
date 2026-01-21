"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, User } from "lucide-react";
import type { RoadmapStepData } from "./roadmap-data";

interface RoadmapStepDetailProps {
  step: RoadmapStepData | null;
  isOpen: boolean;
  onClose: () => void;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.19, 1.0, 0.22, 1.0] as [number, number, number, number],
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: [0.19, 1.0, 0.22, 1.0] as [number, number, number, number],
    },
  },
};

export default function RoadmapStepDetail({
  step,
  isOpen,
  onClose,
}: RoadmapStepDetailProps) {
  if (!step) return null;

  const Icon = step.icon;

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              />
            </Dialog.Overlay>

            <Dialog.Content asChild>
              <motion.div
                className="fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#f8faf0] p-6 shadow-2xl focus:outline-none"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#D0FFA8]">
                      <Icon className="w-7 h-7 text-[#072C2C]" strokeWidth={2} />
                    </div>
                    <div>
                      <Dialog.Title className="text-xl font-semibold text-[#072C2C]">
                        Step {step.id}: {step.title}
                      </Dialog.Title>
                      <Dialog.Description className="text-sm text-[#616659] mt-1">
                        {step.description}
                      </Dialog.Description>
                    </div>
                  </div>

                  <Dialog.Close asChild>
                    <button
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-[#E6E6D1] hover:bg-[#B5B9A6] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D0FFA8]"
                      aria-label="Close"
                    >
                      <X className="w-4 h-4 text-[#072C2C]" />
                    </button>
                  </Dialog.Close>
                </div>

                {/* What happens at this stage */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[#072C2C] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D0FFA8]" />
                    What Happens
                  </h4>
                  <ul className="space-y-2">
                    {step.details.map((detail, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm text-[#616659]"
                      >
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#B5B9A6] mt-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Customer actions (if any) */}
                {step.customerActions && step.customerActions.length > 0 && (
                  <div className="pt-4 border-t border-[#E6E6D1]">
                    <h4 className="text-sm font-semibold text-[#072C2C] uppercase tracking-wide mb-3 flex items-center gap-2">
                      <User className="w-4 h-4 text-[#FF5F02]" />
                      What You Provide
                    </h4>
                    <ul className="space-y-2">
                      {step.customerActions.map((action, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-sm text-[#616659]"
                        >
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#FF5F02] mt-2" />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Navigation hint */}
                <div className="mt-6 pt-4 border-t border-[#E6E6D1] text-center">
                  <p className="text-xs text-[#B5B9A6]">
                    Press <kbd className="px-1.5 py-0.5 bg-[#E6E6D1] rounded text-[#616659]">Esc</kbd> or click outside to close
                  </p>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
