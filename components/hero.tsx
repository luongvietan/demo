"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { ArrowRight } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShineBorder } from "@/components/ui/shine-border";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const words = [
    "Landing Pages",
    "Business Websites",
    "E-commerce Stores",
    "Web Applications",
    "SaaS Platforms",
  ];

  return (
    <div
      ref={ref}
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-emerald-500/10 to-transparent" />

      {/* Animated circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl opacity-30" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl opacity-30" />

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center px-3 py-1 mb-6 md:mb-8 text-sm font-medium rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
            <span className="flex h-2 w-2 mr-2 rounded-full bg-emerald-500" />
            Premium Web Development Solutions
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-950 to-neutral-800 dark:from-white dark:to-neutral-300">
            Premium Web Solutions for <br />
            <span className="text-emerald-500">Modern</span> Businesses
          </h1>

          <div className="text-lg md:text-xl font-medium mb-6 md:mb-8 text-neutral-700 dark:text-neutral-300 h-8">
            We create beautiful{" "}
            <TypingAnimation
              words={words}
              className="text-emerald-500 font-semibold"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-10 md:mb-16">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 rounded-md bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-medium flex items-center justify-center hover:shadow-lg transition-shadow overflow-hidden"
            >
              Request a Quote
              <ArrowRight size={18} className="ml-2" />
              <BorderBeam
                duration={3}
                size={100}
                colorFrom="#ffffff"
                colorTo="#a3ffec"
              />
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 rounded-md border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors overflow-hidden"
            >
              View Our Work
              <ShineBorder
                borderWidth={1}
                duration={10}
                shineColor={["#9E7AFF", "#FE8BBB"]}
              >
                <div></div>
              </ShineBorder>
            </motion.a>
          </div>

          {/* Browser mockup with website preview */}
          <div className="relative w-full max-w-4xl mx-auto mt-8 shadow-2xl rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800">
            <div className="bg-neutral-100 dark:bg-neutral-800 p-3 flex items-center space-x-2 border-b border-neutral-200 dark:border-neutral-700">
              <div className="flex space-x-1">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 bg-white dark:bg-neutral-900 rounded-md h-6 flex items-center justify-center text-xs text-neutral-500 dark:text-neutral-400">
                webgenios.com
              </div>
            </div>
            <div className="w-full aspect-[16/9] relative bg-white dark:bg-neutral-900">
              <Image
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="Web development preview"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 70vw, 60vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
