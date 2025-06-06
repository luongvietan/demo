"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Safari } from "@/components/ui/safari";
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      id: 1,
      title: "TechCorp Enterprise Website",
      category: "business",
      description:
        "A modern corporate website with animated sections and integrated blog for a technology company.",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      url: "techcorp.example.com",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Sanity CMS"],
    },
    {
      id: 2,
      title: "FoodDelivery Landing Page",
      category: "landing",
      description:
        "High-converting landing page for a food delivery service with online ordering capabilities.",
      image:
        "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      url: "foodfast.example.com",
      technologies: ["React", "GSAP", "Firebase", "Stripe"],
    },
    {
      id: 3,
      title: "Fashion E-commerce Store",
      category: "ecommerce",
      description:
        "A complete e-commerce solution for a fashion brand with inventory management and payment processing.",
      image:
        "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      url: "fashionista.example.com",
      technologies: ["Next.js", "Shopify", "Tailwind CSS", "Vercel"],
    },
    {
      id: 4,
      title: "TaskMaster SaaS Application",
      category: "webapp",
      description:
        "Project management SaaS application with real-time collaboration features and data visualization.",
      image:
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      url: "taskmaster.example.com",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Chart.js"],
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "business", label: "Business" },
    { id: "landing", label: "Landing Pages" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "webapp", label: "Web Apps" },
  ];

  return (
    <section id="portfolio" className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 mb-4 text-sm font-medium rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300">
            Our Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400">
            Take a look at some of our recent work. We&apos;ve helped businesses
            of all sizes establish a strong online presence.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 w-full max-w-2xl mx-auto">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          {categories.slice(1).map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            Discuss Your Project
          </motion.a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Safari url={project.url} className="shadow-lg">
        <div className="relative h-64 w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
            <div className="p-4 text-white">
              <h3 className="text-lg font-bold mb-1">{project.title}</h3>
              <p className="text-sm opacity-90 mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs rounded-full bg-emerald-500/80 text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Safari>
    </motion.div>
  );
}
