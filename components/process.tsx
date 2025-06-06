"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  PenTool,
  Code,
  Check,
  HelpCircle,
  RotateCw,
} from "lucide-react";

export default function Process() {
  const steps = [
    {
      title: "Requirements Gathering",
      description:
        "We start by understanding your business goals, target audience, and specific needs to ensure our solution aligns perfectly with your vision.",
      icon: <ClipboardList className="h-8 w-8 text-emerald-500" />,
    },
    {
      title: "Analysis & Proposal",
      description:
        "Our team analyzes your requirements and develops a detailed proposal including timeline, technologies, and cost estimation.",
      icon: <HelpCircle className="h-8 w-8 text-emerald-500" />,
    },
    {
      title: "UI/UX Design",
      description:
        "We create intuitive, engaging user interfaces that reflect your brand identity while ensuring optimal user experience across all devices.",
      icon: <PenTool className="h-8 w-8 text-emerald-500" />,
    },
    {
      title: "Development & Testing",
      description:
        "Our developers bring the design to life with clean, efficient code, while rigorous testing ensures everything functions flawlessly.",
      icon: <Code className="h-8 w-8 text-emerald-500" />,
    },
    {
      title: "Delivery & Launch",
      description:
        "After final approval, we deploy your website to production servers, conduct performance checks, and provide launch support.",
      icon: <Check className="h-8 w-8 text-emerald-500" />,
    },
    {
      title: "Maintenance & Updates",
      description:
        "We offer ongoing support to keep your website secure, up-to-date, and performing optimally as your business grows.",
      icon: <RotateCw className="h-8 w-8 text-emerald-500" />,
    },
  ];

  return (
    <section id="process" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center px-3 py-1 mb-4 text-sm font-medium rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300">
            Our Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
            How We Work
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400">
            Our streamlined process ensures efficient delivery of high-quality
            web solutions that meet your specific requirements.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <TimelineItem
              key={index}
              step={index + 1}
              title={step.title}
              description={step.description}
              icon={step.icon}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* <div className="text-center mt-16">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 rounded-md bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-medium hover:shadow-lg transition-shadow"
          >
            Start Your Project
          </motion.a>
        </div> */}
      </div>
    </section>
  );
}

interface TimelineItemProps {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast: boolean;
}

function TimelineItem({
  step,
  title,
  description,
  icon,
  isLast,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: step * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex mb-12 last:mb-0"
    >
      {/* Step Number and Timeline */}
      <div className="mr-4 flex flex-col items-center">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-300 font-bold text-lg border-4 border-white dark:border-neutral-900 z-10">
          {step}
        </div>
        {!isLast && (
          <div className="w-0.5 h-full bg-emerald-200 dark:bg-emerald-800/50 mt-4" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pt-1.5">
        <div className="flex items-center mb-2">
          <div className="mr-3">{icon}</div>
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
            {title}
          </h3>
        </div>
        <p className="text-neutral-600 dark:text-neutral-400">{description}</p>
      </div>
    </motion.div>
  );
}
