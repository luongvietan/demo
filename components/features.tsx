"use client";

import { motion } from "framer-motion";
import { Code, Globe, Lightbulb, Rocket, Shield, Zap } from "lucide-react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { useRef } from "react";

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const feature1Ref = useRef<HTMLDivElement>(null);
  const feature2Ref = useRef<HTMLDivElement>(null);
  const feature3Ref = useRef<HTMLDivElement>(null);
  const feature4Ref = useRef<HTMLDivElement>(null);
  const feature5Ref = useRef<HTMLDivElement>(null);
  const feature6Ref = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: <Rocket className="h-10 w-10 text-emerald-500" />,
      title: "Fast Performance",
      description:
        "Optimized code and efficient infrastructure for lightning-fast load times and smooth user experiences.",
      ref: feature1Ref,
    },
    {
      icon: <Shield className="h-10 w-10 text-emerald-500" />,
      title: "Security First",
      description:
        "Built-in protection against common vulnerabilities with regular security updates and audits.",
      ref: feature2Ref,
    },
    {
      icon: <Globe className="h-10 w-10 text-emerald-500" />,
      title: "SEO Optimized",
      description:
        "Search engine friendly code and structure to help your website rank higher in search results.",
      ref: feature3Ref,
    },
    {
      icon: <Zap className="h-10 w-10 text-emerald-500" />,
      title: "Modern Technology",
      description:
        "Built with the latest technologies and frameworks to ensure your website stays current and performant.",
      ref: feature4Ref,
    },
    {
      icon: <Code className="h-10 w-10 text-emerald-500" />,
      title: "Clean Code",
      description:
        "Well-structured, documented code that's easy to maintain and extend as your business grows.",
      ref: feature5Ref,
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-emerald-500" />,
      title: "Innovative Solutions",
      description:
        "Creative approaches to solve complex problems and deliver unique user experiences.",
      ref: feature6Ref,
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
    <section
      id="features"
      className="py-16 md:py-24 bg-white dark:bg-neutral-900 relative"
    >
      <div className="container mx-auto px-4" ref={containerRef}>
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Why Choose Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto"
          >
            We deliver high-quality web solutions with a focus on performance,
            security, and user experience.
          </motion.p>
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
              className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                {feature.description}
              </p>
            </motion.div>
          ))}

          {/* Animated beams connecting features */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={centerRef}
            toRef={feature1Ref}
            gradientStartColor="#9E7AFF"
            gradientStopColor="#FE8BBB"
            delay={0.5}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={centerRef}
            toRef={feature2Ref}
            gradientStartColor="#9E7AFF"
            gradientStopColor="#FE8BBB"
            delay={0.7}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={centerRef}
            toRef={feature3Ref}
            gradientStartColor="#9E7AFF"
            gradientStopColor="#FE8BBB"
            delay={0.9}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={centerRef}
            toRef={feature4Ref}
            gradientStartColor="#9E7AFF"
            gradientStopColor="#FE8BBB"
            delay={1.1}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={centerRef}
            toRef={feature5Ref}
            gradientStartColor="#9E7AFF"
            gradientStopColor="#FE8BBB"
            delay={1.3}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={centerRef}
            toRef={feature6Ref}
            gradientStartColor="#9E7AFF"
            gradientStopColor="#FE8BBB"
            delay={1.5}
          />
        </div>
      </div>
    </section>
  );
}
