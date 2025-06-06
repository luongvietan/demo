"use client";

import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Image from "next/image";
import { ShineBorder } from "@/components/ui/shine-border";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

interface CompanyLogo {
  name: string;
  src?: string;
  lightSrc?: string;
  darkSrc?: string;
  alt: string;
}

export default function Testimonials() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Đảm bảo component chỉ render ở client side
  useEffect(() => {
    setMounted(true);
  }, []);

  const testimonials = [
    {
      quote:
        "The team at Webgenios delivered a stunning website for our business. Their attention to detail and focus on user experience has helped us increase our online conversions by 40%.",
      name: "Sarah Johnson",
      title: "CEO, TechSolutions Inc.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    },
    {
      quote:
        "From concept to execution, Webgenios exceeded our expectations. Their team was responsive, creative, and technically excellent. Our e-commerce site now loads 3x faster and sales have increased significantly.",
      name: "Michael Chen",
      title: "Founder, StyleShop",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    },
    {
      quote:
        "Working with Webgenios was a game-changer for our startup. They built a SaaS platform that was not only beautiful but also highly functional. Their expertise in web application development is unmatched.",
      name: "Emily Rodriguez",
      title: "CTO, DataFlow Systems",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    },
    {
      quote:
        "I was impressed by Webgenios's ability to translate our brand identity into a digital experience. The website they created for us perfectly captures our company's essence and has received countless compliments.",
      name: "David Wilson",
      title: "Marketing Director, Innovate Co.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    },
    {
      quote:
        "The SEO optimization Webgenios implemented on our website has dramatically improved our search rankings. We're now on the first page for all our key terms, and organic traffic has doubled.",
      name: "Lisa Patel",
      title: "Owner, Wellness Hub",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    },
  ];

  // Danh sách các logo công ty nổi tiếng từ Icons8
  const companyLogos = [
    {
      name: "Adobe",
      lightSrc:
        "https://img.icons8.com/?size=100&id=118571&format=png&color=FF0000",
      darkSrc:
        "https://img.icons8.com/?size=100&id=118571&format=png&color=FF0000",
      alt: "Adobe logo",
    },
    {
      name: "Apple",
      lightSrc:
        "https://img.icons8.com/?size=100&id=30840&format=png&color=000000",
      darkSrc:
        "https://img.icons8.com/?size=100&id=30840&format=png&color=FFFFFF",
      alt: "Apple logo",
    },
    {
      name: "Microsoft",
      src: "https://img.icons8.com/color/96/microsoft.png",
      alt: "Microsoft logo",
    },
    {
      name: "Google",
      src: "https://img.icons8.com/color/96/google-logo.png",
      alt: "Google logo",
    },
    {
      name: "IBM",
      src: "https://img.icons8.com/color/96/ibm.png",
      alt: "IBM logo",
    },
  ];

  // Hàm lấy URL hình ảnh dựa vào theme
  const getLogoSrc = (logo: CompanyLogo): string => {
    if (!mounted) return logo.src || logo.lightSrc || "";

    if (logo.name === "Adobe" || logo.name === "Apple") {
      return theme === "dark" ? logo.darkSrc || "" : logo.lightSrc || "";
    }

    return logo.src || "";
  };

  return (
    <section
      id="testimonials"
      className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center px-3 py-1 mb-4 text-sm font-medium rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300">
            Client Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
            What Our Clients Say
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400">
            Don&apos;t just take our word for it. Here&apos;s what some of our
            clients have to say about working with us.
          </p>
        </motion.div>

        <ShineBorder
          containerClassName="w-full overflow-hidden rounded-lg"
          borderWidth={1}
          shimmerColor="rgba(16, 185, 129, 0.2)"
        >
          <div className="-mx-4 sm:-mx-8 md:-mx-12 lg:-mx-16 py-4">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </ShineBorder>

        <div className="mt-16 text-center">
          <p className="text-lg font-medium text-neutral-700 dark:text-neutral-300 mb-8">
            Trusted by businesses of all sizes
          </p>
          <motion.div
            className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {companyLogos.map((logo, i) => (
              <motion.div
                key={i}
                className="h-12 w-auto flex items-center justify-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Image
                  src={getLogoSrc(logo)}
                  alt={logo.alt}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
