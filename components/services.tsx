"use client";

import { motion } from "framer-motion";
import { MagicCard } from "@/components/ui/magic-card";
import { Building2, Rocket, ShoppingBag, Database } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Business Websites",
      description:
        "Professional websites that establish credibility and help grow your business online. Includes brand integration, content management, and responsive design.",
      icon: <Building2 className="w-10 h-10 text-emerald-500 mb-4" />,
      features: [
        "SEO-optimized",
        "Mobile responsive",
        "Content management",
        "Analytics integration",
      ],
    },
    {
      title: "Landing Pages",
      description:
        "High-converting landing pages designed to turn visitors into customers. Perfect for product launches, campaigns, and lead generation.",
      icon: <Rocket className="w-10 h-10 text-emerald-500 mb-4" />,
      features: [
        "A/B testing",
        "Lead capture forms",
        "Call-to-action optimization",
        "Analytics tracking",
      ],
    },
    {
      title: "E-commerce Solutions",
      description:
        "Custom online stores with seamless checkout experiences. We build secure, scalable e-commerce websites that drive sales.",
      icon: <ShoppingBag className="w-10 h-10 text-emerald-500 mb-4" />,
      features: [
        "Secure payments",
        "Inventory management",
        "Product catalog",
        "Mobile shopping",
      ],
    },
    {
      title: "Web Applications & SaaS",
      description:
        "Custom web applications and SaaS platforms tailored to your business needs. From concept to deployment, we build scalable solutions.",
      icon: <Database className="w-10 h-10 text-emerald-500 mb-4" />,
      features: [
        "User authentication",
        "Database integration",
        "API development",
        "Cloud hosting",
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 mb-4 text-sm font-medium rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
            Web Solutions Tailored to Your Needs
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400">
            From simple landing pages to complex web applications, we provide
            end-to-end web development services to help your business succeed
            online.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <MagicCard className="h-full">
                <div className="flex flex-col items-start">
                  {service.icon}
                  <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-2 w-full">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-emerald-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm text-neutral-700 dark:text-neutral-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 rounded-md bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-medium hover:shadow-lg transition-shadow"
          >
            Get Started
          </motion.a>
        </div>
      </div>
    </section>
  );
}
