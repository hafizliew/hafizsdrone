"use client";

import { motion } from "motion/react";
import Image from "next/image";

const services = [
    {
        title: "Aerial Photography",
        description: "Cinematic 4K footage and stunning aerial photography for marketing, events, and real estate.",
        image: "/images/photography.jpg",
        span: "col-span-2 row-span-2",
    },
    {
        title: "Mapping",
        description: "High-precision orthomosaic maps and 3D models for surveying and construction.",
        image: "/images/mapping.jpg",
        span: "col-span-1 row-span-1",
    },
    {
        title: "Inspection",
        description: "Safe and efficient infrastructure inspection for towers, bridges, and industrial facilities.",
        image: "/images/inspection.jpg",
        span: "col-span-1 row-span-1",
    },
    {
        title: "Monitoring",
        description: "Continuous surveillance and monitoring solutions for security and asset protection.",
        image: "/images/monitoring.jpg",
        span: "col-span-2 row-span-1",
    },
    {
        title: "3D Modelling & Rendering",
        description: "High-end digital twins and architectural visualizations from aerial data.",
        image: "/images/3d_modelling_service.png",
        span: "col-span-1 row-span-1",
    },
];

export default function BentoGrid() {
    return (
        <section id="services" className="relative px-6 md:px-12 py-24">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-16 text-center">
                Our Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className={`bento-card ${service.span} bg-slate-900 min-h-[300px] flex flex-col justify-end relative overflow-hidden group`}
                    >
                        {/* Background Image */}
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />

                        {/* Dark gradient overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80" />

                        {/* Hover accent overlay */}
                        <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 p-8">
                            <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                                {service.title}
                            </h3>
                            <p className="text-slate-300 text-lg leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
