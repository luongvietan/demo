"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "What types of businesses do you work with?",
      answer:
        "We work with businesses of all sizes, from startups to established enterprises across various industries. Our flexible approach allows us to tailor our web development services to meet the specific needs of each client.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "The timeline varies depending on the project scope and complexity. A simple landing page might take 2-3 weeks, while a complex e-commerce site or web application could take 8-12 weeks. During our initial consultation, we&apos;ll provide a more accurate timeline based on your specific requirements.",
    },
    {
      question: "Do you provide web hosting and domain registration?",
      answer:
        "Yes, we offer web hosting and domain registration services as part of our packages. We use reliable, secure hosting providers to ensure your website performs optimally. We can also work with your existing hosting provider if you prefer.",
    },
    {
      question: "What is your design process like?",
      answer:
        "Our design process starts with understanding your brand, goals, and target audience. We create wireframes for your approval, followed by high-fidelity designs. We incorporate your feedback through revisions until we achieve the perfect design that represents your brand and meets your business objectives.",
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer:
        "Yes, we offer ongoing maintenance and support packages to ensure your website remains secure, up-to-date, and performs well. Our support includes regular updates, security monitoring, performance optimization, and technical assistance whenever you need it.",
    },
    {
      question: "How do you handle website security?",
      answer:
        "Security is a top priority for us. We implement various security measures including SSL certificates, secure authentication methods, regular security updates, firewall protection, and secure coding practices. We also perform security audits to identify and address potential vulnerabilities.",
    },
    {
      question: "Can you help with SEO for my website?",
      answer:
        "Absolutely! We build all our websites with SEO best practices in mind, including proper HTML structure, fast loading speeds, mobile optimization, and clean code. We also offer additional SEO services including keyword research, on-page optimization, content strategy, and technical SEO audits.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including credit/debit cards, bank transfers, and PayPal. For larger projects, we typically work with a 50% upfront deposit with the remainder due upon project completion, though we can offer milestone-based payment plans for extended projects.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center px-3 py-1 mb-4 text-sm font-medium rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400">
            Find answers to common questions about our web development services.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700"
                >
                  <AccordionTrigger className="px-6 py-4 text-left text-neutral-900 dark:text-white font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
        {/* 
        <div className="mt-16 text-center">
          <p className="mb-6 text-neutral-700 dark:text-neutral-300">
            Still have questions? We&apos;re here to help.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 rounded-md bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-medium hover:shadow-lg transition-shadow"
          >
            Contact Us
          </motion.a>
        </div> */}
      </div>
    </section>
  );
}
