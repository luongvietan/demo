"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from "framer-motion";
import { Zap, Layout, Search, Smartphone, Shield, Code } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Lightning Fast",
      description:
        "Optimized code and server-side rendering ensure your website loads in milliseconds, not seconds.",
      icon: <Zap className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: "Modern UI Design",
      description:
        "Clean, intuitive interfaces that engage visitors and guide them through your content effortlessly.",
      icon: <Layout className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: "SEO Optimized",
      description:
        "Built with search engines in mind, helping your business rank higher and attract more visitors.",
      icon: <Search className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: "Fully Responsive",
      description:
        "Perfect viewing experience across all devices - from desktops to smartphones and tablets.",
      icon: <Smartphone className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: "Enhanced Security",
      description:
        "Implemented with the latest security practices to protect your data and your customers.",
      icon: <Shield className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: "Clean Code",
      description:
        "Well-structured, maintainable code that makes future updates and expansions seamless.",
      icon: <Code className="w-6 h-6 text-emerald-500" />,
    },
  ];

  return (
    <section id="features" className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 mb-4 text-sm font-medium rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
            Our Competitive Edge
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400">
            We combine technical expertise with creative design to deliver
            websites that not only look beautiful but perform exceptionally
            well.
          </p>
        </motion.div>

        <BentoGrid className="mb-12">
          {features.map((feature, index) => (
            <BentoGridItem
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              className="p-6"
            />
          ))}
        </BentoGrid>

        <div className="text-center mt-12">
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 rounded-md bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium hover:shadow-lg transition-shadow"
          >
            Explore Our Services
          </motion.a>
        </div>
      </div>
    </section>
  );
}
