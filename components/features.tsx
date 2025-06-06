"use client";

import { motion } from "framer-motion";
import { Code, Globe, Lightbulb, Rocket, Shield, Zap } from "lucide-react";
// import { AnimatedBeam } from "@/components/ui/animated-beam";
import { TextAnimate } from "@/components/ui/text-animate";
import { useRef, useState } from "react";
import { MagicCard } from "@/components/ui/magic-card";
import { ShineBorder } from "@/components/ui/shine-border";
// import { RetroGrid } from "@/components/ui/retro-grid";

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const feature1Ref = useRef<HTMLDivElement>(null);
  const feature2Ref = useRef<HTMLDivElement>(null);
  const feature3Ref = useRef<HTMLDivElement>(null);
  const feature4Ref = useRef<HTMLDivElement>(null);
  const feature5Ref = useRef<HTMLDivElement>(null);
  const feature6Ref = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const features = [
    {
      icon: <Rocket className="h-10 w-10 text-white" />,
      title: "Fast Performance",
      description:
        "Optimized code and efficient infrastructure for lightning-fast load times and smooth user experiences.",
      ref: feature1Ref,
      gradient: "from-emerald-500 to-cyan-400",
    },
    {
      icon: <Shield className="h-10 w-10 text-white" />,
      title: "Security First",
      description:
        "Built-in protection against common vulnerabilities with regular security updates and audits.",
      ref: feature2Ref,
      gradient: "from-emerald-500 to-cyan-400",
    },
    {
      icon: <Globe className="h-10 w-10 text-white" />,
      title: "SEO Optimized",
      description:
        "Search engine friendly code and structure to help your website rank higher in search results.",
      ref: feature3Ref,
      gradient: "from-emerald-500 to-cyan-400",
    },
    {
      icon: <Zap className="h-10 w-10 text-white" />,
      title: "Modern Technology",
      description:
        "Built with the latest technologies and frameworks to ensure your website stays current and performant.",
      ref: feature4Ref,
      gradient: "from-emerald-500 to-cyan-400",
    },
    {
      icon: <Code className="h-10 w-10 text-white" />,
      title: "Clean Code",
      description:
        "Well-structured, documented code that's easy to maintain and extend as your business grows.",
      ref: feature5Ref,
      gradient: "from-emerald-500 to-cyan-400",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-white" />,
      title: "Innovative Solutions",
      description:
        "Creative approaches to solve complex problems and deliver unique user experiences.",
      ref: feature6Ref,
      gradient: "from-emerald-500 to-cyan-400",
    },
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="features" className="py-10 md:py-16 relative overflow-hidden">
      {/* <RetroGrid
        className="absolute inset-0 z-0 opacity-15 dark:opacity-10"
        lightLineColor="rgba(16, 185, 129, 0.2)"
        darkLineColor="rgba(6, 182, 212, 0.1)"
      /> */}

      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        <div className="text-center mb-10 md:mb-14 relative">
          <div className="inline-block mb-4">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 blur-xl"></div>
              <span className="relative text-neutral-900 dark:text-white">
                <TextAnimate
                  animation="blurInUp"
                  by="word"
                  className="text-3xl md:text-5xl font-bold"
                >
                  Why Choose Our Services
                </TextAnimate>
              </span>
            </div>
          </div>

          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
            We deliver high-quality web solutions with a focus on performance,
            security, and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          <div
            ref={centerRef}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 pointer-events-none"
          />

          {features.map((feature, index) => (
            <motion.div
              key={index}
              ref={feature.ref}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUpVariants}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
              className="relative"
            >
              <MagicCard className="w-full h-full">
                <ShineBorder
                  className="w-full h-full rounded-xl"
                  borderWidth={2}
                  duration={2000}
                  isActive={activeFeature === index}
                  borderRadius="0.75rem"
                >
                  <div className="bg-white/80 dark:bg-neutral-800/90 backdrop-blur-sm p-6 rounded-xl h-full shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="relative mr-4">
                        <div
                          className={`absolute -inset-1 rounded-full bg-gradient-to-r ${feature.gradient} opacity-90 blur-sm`}
                        ></div>
                        <div
                          className={`relative bg-gradient-to-r ${feature.gradient} rounded-full p-3 shadow-lg`}
                        >
                          {feature.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {feature.description}
                    </p>
                  </div>
                </ShineBorder>
              </MagicCard>
            </motion.div>
          ))}

          {/* Animated beams connecting features - more subtle */}
          {/* {activeFeature === null && (
            <>
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={centerRef}
                toRef={feature1Ref}
                gradientStartColor="rgba(16, 185, 129, 0.3)"
                gradientStopColor="rgba(6, 182, 212, 0.1)"
                delay={0.5}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={centerRef}
                toRef={feature2Ref}
                gradientStartColor="rgba(16, 185, 129, 0.3)"
                gradientStopColor="rgba(6, 182, 212, 0.1)"
                delay={0.7}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={centerRef}
                toRef={feature3Ref}
                gradientStartColor="rgba(16, 185, 129, 0.3)"
                gradientStopColor="rgba(6, 182, 212, 0.1)"
                delay={0.9}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={centerRef}
                toRef={feature4Ref}
                gradientStartColor="rgba(16, 185, 129, 0.3)"
                gradientStopColor="rgba(6, 182, 212, 0.1)"
                delay={1.1}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={centerRef}
                toRef={feature5Ref}
                gradientStartColor="rgba(16, 185, 129, 0.3)"
                gradientStopColor="rgba(6, 182, 212, 0.1)"
                delay={1.3}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={centerRef}
                toRef={feature6Ref}
                gradientStartColor="rgba(16, 185, 129, 0.3)"
                gradientStopColor="rgba(6, 182, 212, 0.1)"
                delay={1.5}
              />
            </>
          )} */}
        </div>

        <div className="mt-16 text-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-medium hover:from-emerald-600 hover:to-cyan-600 transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40"
          >
            Get Started
          </motion.a>
        </div>
      </div>
    </section>
  );
}
