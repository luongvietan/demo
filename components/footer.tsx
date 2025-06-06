"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Business Websites", href: "#services" },
        { name: "Landing Pages", href: "#services" },
        { name: "E-commerce", href: "#services" },
        { name: "Web Applications", href: "#services" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Process", href: "#process" },
        { name: "Testimonials", href: "#testimonials" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Pricing", href: "#pricing" },
        { name: "FAQ", href: "#faq" },
        { name: "Contact", href: "#contact" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <Facebook size={20} />,
      href: "https://www.facebook.com/profile.php?id=61574918454367",
    },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/duelurker" },
    { icon: <Github size={20} />, href: "https://github.com/luongvietan" },
  ];

  return (
    <footer className="bg-white dark:bg-neutral-950 text-neutral-700 dark:text-neutral-300 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center">
              <div className="relative h-12 w-12">
                <Image
                  src="/logo.png"
                  alt="Webgenios Logo"
                  fill
                  className="object-contain dark:invert-0 invert"
                />
              </div>
              <span className=" text-2xl font-bold bg-gradient-to-r from-emerald-500 to-cyan-400 bg-clip-text text-transparent">
                Webgenios
              </span>
            </Link>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-md">
              Providing premium web development solutions for modern businesses.
              We transform your ideas into stunning, high-performance websites.
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-emerald-500" />
                <a
                  href="mailto:contact@webgenios.com"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  contact@webgenios.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-emerald-500" />
                <a
                  href="tel:+1234567890"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  +84 384 398 634
                </a>
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-emerald-500" />
                <p className="text-neutral-600 dark:text-neutral-400">
                  Nha Be, Ho Chi Minh City, Vietnam
                </p>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 dark:text-neutral-500 text-sm">
            © {currentYear} Webgenios. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
