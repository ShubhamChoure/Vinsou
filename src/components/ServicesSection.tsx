"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { PhoneCall, Sparkles } from "lucide-react";
import { MorphingText } from "@/components/ui/morphing-text";

interface ServicesSectionProps {
  onBookCall?: () => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  onBookCall,
}) => {
  const containerRef = useRef<HTMLElement | null>(null);

  // ==========================================
  // SCROLL ANIMATIONS
  // ==========================================

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  const cardScale = useTransform(
    smoothProgress,
    [0, 1],
    [0.9, 1]
  );

  const cardRotateX = useTransform(
    smoothProgress,
    [0, 1],
    [7, 0]
  );

  const cardOpacity = useTransform(
    smoothProgress,
    [0, 0.5],
    [0, 1]
  );

  const textY = useTransform(
    smoothProgress,
    [0, 1],
    [30, 0]
  );

  // ==========================================
  // CTA
  // ==========================================

  const handleButtonClick = () => {
    if (onBookCall) {
      onBookCall();
    } else {
      window.location.href =
        "https://calendly.com/official-vinsou/30min";
    }
  };

  // ==========================================
  // COMPONENT
  // ==========================================

  return (
    <section
      ref={containerRef}
      className="
        relative
        w-full
        overflow-hidden
        bg-[#FAF9F6]
        font-sans
        py-14
        sm:py-16
        lg:py-20
      "
    >
      {/* ========================================
          BACKGROUND GLOWS
      ======================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          -top-32
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#FFCC00]/[0.06]
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-32
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#FFCC00]/[0.04]
          blur-[120px]
        "
      />

      {/* ========================================
          MAIN CONTAINER
      ======================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-6
          sm:px-8
          lg:px-12
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-10
            lg:grid-cols-2
            lg:gap-16
          "
        >

          {/* ======================================
              LEFT — VISUAL CARD
          ====================================== */}

          <motion.div
            style={{
              scale: cardScale,
              rotateX: cardRotateX,
              opacity: cardOpacity,
              perspective: 1000,
            }}
            className="
              order-1
              flex
              w-full
              justify-center
              lg:justify-start
            "
          >
            <div
              className="
                group
                relative
                aspect-[1120/1040]
                w-full
                max-w-[350px]
                overflow-hidden
                rounded-[28px]
                border
                border-black/[0.06]
                bg-white
                shadow-[0_22px_55px_rgba(0,0,0,0.11)]
                transition-shadow
                duration-500
                hover:shadow-[0_25px_65px_rgba(0,0,0,0.14)]
                sm:max-w-[470px]
                lg:max-w-[510px]
              "
            >

              {/* TOP YELLOW ACCENT */}

              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-0
                  z-20
                  h-2
                  bg-[#FFCC00]
                "
              />

              {/* LIVE RANKING BADGE */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.25,
                  type: "spring",
                  stiffness: 220,
                  damping: 16,
                }}
                className="
                  absolute
                  right-4
                  top-4
                  z-20
                  flex
                  items-center
                  gap-1.5
                  rounded-full
                  bg-black
                  px-3.5
                  py-1.5
                  text-[#FFCC00]
                  shadow-lg
                "
              >
                <Sparkles
                  size={13}
                  strokeWidth={2.5}
                  className="animate-pulse"
                />

                <span
                  className="
                    text-[10px]
                    font-black
                    uppercase
                    tracking-wider
                    sm:text-[11px]
                  "
                >
                  Live Ranking
                </span>
              </motion.div>

              {/* GIF */}

              <div
                className="
                  absolute
                  inset-0
                  pt-7
                  sm:pt-8
                "
              >
                <Image
                  src="/google-business-profile-ranking-animation.gif"
                  alt="Google Business Profile Ranking Boost"
                  fill
                  priority
                  unoptimized
                  className="
                    object-contain
                    p-5
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.02]
                    sm:p-7
                    lg:p-8
                  "
                />
              </div>
            </div>
          </motion.div>

          {/* ======================================
              RIGHT — CONTENT
          ====================================== */}

          <motion.div
            style={{
              y: textY,
            }}
            className="
              order-2
              w-full
              max-w-[650px]
            "
          >

            {/* ==================================
                SECTION LABEL
            ================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-black/[0.07]
                bg-white/70
                px-3.5
                py-1.5
                shadow-sm
                backdrop-blur-sm
              "
            >
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#FFCC00]
                "
              />

              <span
                className="
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[0.16em]
                  text-black
                  sm:text-[11px]
                "
              >
                Our Services
              </span>
            </motion.div>

            {/* ==================================
                MAIN HEADING
            ================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="mb-6"
            >
              <h2
                className="
                  font-black
                  tracking-[-0.045em]
                  text-black
                  text-[38px]
                  leading-[1.04]
                  sm:text-[48px]
                  sm:leading-[1.02]
                  md:text-[54px]
                  lg:text-[58px]
                  xl:text-[62px]
                "
              >

                {/* ==================================
                    STATIC
                ================================== */}

                <span className="block">
                  Our Services Help
                </span>

                {/* ==================================
                    SECOND LINE

                    MORPHING INDUSTRY
                    + STATIC GET MORE
                ================================== */}

                <span
                  className="
                    mt-2
                    flex
                    h-[1.08em]
                    items-center
                    whitespace-nowrap
                    sm:mt-3
                  "
                >

                  {/* ==================================
                      INDUSTRY MORPHING AREA

                      FIXED WIDTH + FIXED HEIGHT
                  ================================== */}

                  <span
                    className="
                      relative
                      inline-block
                      h-[1.08em]
                      w-[150px]
                      shrink-0
                      overflow-hidden
                      sm:w-[190px]
                      md:w-[210px]
                      lg:w-[225px]
                    "
                  >
                    <MorphingText
                      texts={[
                        "Brands",
                        "Doctors",
                        "Startup",
                        "Retail",
                        "Agency",
                        "Clinic",
                      ]}
                      className="
                        !absolute
                        !left-0
                        !top-0
                        !m-0
                        !h-full
                        !w-full
                        !justify-start
                        !text-left
                        !font-black
                        !leading-[1.04]
                        !tracking-[-0.045em]
                        !text-black
                        !text-[38px]
                        sm:!text-[48px]
                        md:!text-[54px]
                        lg:!text-[58px]
                        xl:!text-[62px]
                      "
                    />

                    {/* SUBTLE GLOW */}

                    <span
                      className="
                        pointer-events-none
                        absolute
                        left-0
                        top-1/2
                        -z-10
                        h-10
                        w-32
                        -translate-y-1/2
                        rounded-full
                        bg-[#FFCC00]/20
                        blur-[30px]
                      "
                    />
                  </span>

                  {/* ==================================
                      STATIC GET MORE

                      NEVER ANIMATED
                  ================================== */}

                  <span
                    className="
                      ml-2
                      shrink-0
                      whitespace-nowrap
                      sm:ml-3
                    "
                  >
                    Get More
                  </span>
                </span>

                {/* ==================================
                    THIRD LINE

                    MORPHING OUTCOME
                    FIXED HEIGHT
                ================================== */}

                <span
                  className="
                    relative
                    mt-2
                    block
                    h-[1.08em]
                    w-full
                    overflow-hidden
                    sm:mt-3
                  "
                >
                  <MorphingText
                    texts={[
                      "Customers",
                      "Patients",
                      "Leads",
                      "Sales",
                      "Clients",
                      "Patients",
                    ]}
                    className="
                      !absolute
                      !left-0
                      !top-0
                      !m-0
                      !h-full
                      !w-full
                      !justify-start
                      !text-left
                      !font-black
                      !leading-[1.04]
                      !tracking-[-0.045em]
                      !text-black
                      !text-[38px]
                      sm:!text-[48px]
                      md:!text-[54px]
                      lg:!text-[58px]
                      xl:!text-[62px]
                    "
                  />
                </span>
              </h2>
            </motion.div>

            {/* ==================================
                YELLOW ACCENT
            ================================== */}

            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: "68px",
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="
                mb-6
                h-[7px]
                rounded-full
                bg-[#FFCC00]
              "
            />

            {/* ==================================
                DESCRIPTION
            ================================== */}

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.55,
                delay: 0.2,
              }}
              className="
                mb-7
                max-w-[590px]
                text-[15px]
                font-medium
                leading-[1.65]
                text-gray-700
                sm:text-[16px]
                lg:text-[17px]
              "
            >
              We build high-converting websites, powerful{" "}
              <strong
                className="
                  font-extrabold
                  text-black
                  underline
                  decoration-[#FFCC00]
                  decoration-2
                  underline-offset-4
                "
              >
                CRM software
              </strong>
              , custom digital solutions, and{" "}
              <strong
                className="
                  font-extrabold
                  text-black
                  underline
                  decoration-[#FFCC00]
                  decoration-2
                  underline-offset-4
                "
              >
                performance marketing
              </strong>{" "}
              strategies that help businesses attract customers,
              streamline operations, and scale revenue.
            </motion.p>

            {/* ==================================
                CTA
            ================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
            >
              <motion.button
                onClick={handleButtonClick}
                whileHover={{
                  scale: 1.04,
                  backgroundColor: "#F0C000",
                  boxShadow:
                    "0px 14px 35px rgba(255,204,0,0.40)",
                }}
                whileTap={{
                  scale: 0.96,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
                className="
                  group
                  relative
                  inline-flex
                  cursor-pointer
                  items-center
                  justify-center
                  gap-3
                  overflow-hidden
                  rounded-full
                  bg-[#FFCC00]
                  px-8
                  py-3.5
                  text-[12px]
                  font-extrabold
                  uppercase
                  tracking-[0.08em]
                  text-black
                  shadow-[0_8px_20px_rgba(0,0,0,0.10)]
                  sm:px-10
                  sm:py-4
                  sm:text-[13px]
                "
              >

                {/* SHEEN */}

                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    -skew-x-12
                    bg-white/25
                    transition-transform
                    duration-1000
                    ease-out
                    group-hover:translate-x-full
                  "
                />

                <span className="relative z-10">
                  Contact Us
                </span>

                {/* PHONE */}

                <motion.span
                  className="
                    relative
                    z-10
                    flex
                    items-center
                  "
                  animate={{
                    rotate: [0, -10, 10, -10, 10, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.2,
                    repeatDelay: 1.5,
                    ease: "easeInOut",
                  }}
                >
                  <PhoneCall size={17} />
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;