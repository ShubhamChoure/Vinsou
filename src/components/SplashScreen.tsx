"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
  onComplete?: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isFinished, setIsFinished] = useState(false);

  const handleVideoEnded = () => {
    setIsFinished(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 700);
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden select-none pointer-events-auto"
        >
          {/* DESKTOP VIDEO (Only plays on large laptop & desktop screens) */}
          <video
            src="/splash-desktop.mp4"
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
            className="hidden lg:block w-full h-full object-cover"
          />

          {/* MOBILE & TABLET VIDEO (Plays on phones, iPads, and tablets) */}
          <video
            src="/splash-mobile.mp4"
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
            className="lg:hidden w-full h-full object-cover"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}