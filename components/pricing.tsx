"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      description: "Perfect for landing pages and simple business websites",
      price: "$999",
      features: [
        "Responsive design",
        "Up to 5 pages",
        "Contact form",
        "Basic SEO setup",
        "Mobile optimization",
        "30 days of support",
      ],
      highlighted: false,
    },
    {
      name: "Standard",
      description: "Ideal for growing businesses that need more features",
      price: "$1,999",
      features: [
        "All Basic features",
        "Up to 10 pages",
        "Content Management System",
        "Blog integration",
        "Advanced SEO setup",
        "Social media integration",
        "Google Analytics setup",
        "90 days of support",
      ],
      highlighted: true,
    },
    {
      name: "Premium",
      description: "For established businesses requiring custom solutions",
      price: "$3,999+",
      features: [
        "All Standard features",
        "Unlimited pages",
        "E-commerce integration",
        "Custom animations",
        "Advanced functionality",
        "Premium design elements",
        "Performance optimization",
        "1 year of support & maintenance",
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 mb-4 text-sm font-medium rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300">
            Pricing Plans
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
            Transparent Pricing
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400">
            Choose the plan that fits your business needs. All plans include
            responsive design, SEO optimization, and post-launch support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`rounded-xl p-8 h-full flex flex-col ${
                plan.highlighted
                  ? "bg-gradient-to-b from-emerald-500 to-cyan-500 text-white shadow-xl scale-105 z-10"
                  : "bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
              }`}
            >
              <div className="mb-6">
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    plan.highlighted
                      ? "text-white"
                      : "text-neutral-900 dark:text-white"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`${
                    plan.highlighted
                      ? "text-white/90"
                      : "text-neutral-600 dark:text-neutral-400"
                  } mb-4`}
                >
                  {plan.description}
                </p>
                <div className="flex items-baseline mb-6">
                  <span
                    className={`text-4xl font-bold ${
                      plan.highlighted
                        ? "text-white"
                        : "text-neutral-900 dark:text-white"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`ml-2 ${
                      plan.highlighted
                        ? "text-white/90"
                        : "text-neutral-600 dark:text-neutral-400"
                    }`}
                  >
                    starting price
                  </span>
                </div>
              </div>

              <ul className="mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start mb-3">
                    <Check
                      className={`h-5 w-5 mt-0.5 mr-3 ${
                        plan.highlighted ? "text-white" : "text-emerald-500"
                      }`}
                    />
                    <span
                      className={
                        plan.highlighted
                          ? "text-white/90"
                          : "text-neutral-700 dark:text-neutral-300"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`py-3 px-6 rounded-md font-medium ${
                  plan.highlighted
                    ? "bg-white text-emerald-600 hover:bg-neutral-100"
                    : "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200"
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-6 text-neutral-700 dark:text-neutral-300">
            Need a custom solution? Contact us for a personalized quote.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            Contact Us
          </motion.a>
        </div>
      </div>
    </section>
  );
}
