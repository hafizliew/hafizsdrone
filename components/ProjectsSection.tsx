"use client";

import { motion } from "motion/react";
import Image from "next/image";

const projects = [
    {
        title: "3D Rendering & Modelling Sabah",
        location: "Penampang, Sabah",
        image: "/hafizsdrone/projects/sabah-analysis.png",
        category: "3D Modelling",
    },
    {
        title: "Lumut Maritime Terminal 2",
        location: "Manjung, Perak",
        image: "/hafizsdrone/projects/lumut-terminal.png",
        category: "Infrastructure",
    },
    {
        title: "Genting Tunnel Progress",
        location: "Gombak",
        image: "/hafizsdrone/projects/genting-tunnel.png",
        category: "Infrastructure",
    },
    {
        title: "Taman Melawati Estate",
        location: "Kuala Lumpur",
        image: "/hafizsdrone/projects/project1.jpg",
        category: "Real Estate",
    },
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="relative px-6 md:px-12 py-24 bg-slate-950/50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                            Featured Projects
                        </h2>
                        <p className="text-slate-400 text-lg max-w-xl">
                            A showcase of our precision drone work across various industries in Malaysia.
                        </p>
                    </div>
                    <div className="h-px flex-grow bg-white/10 mx-8 hidden md:block mb-4" />
                    <div className="text-slate-500 font-mono text-sm tracking-widest uppercase mb-4">
                        [ Recent Work ]
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="group relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-900 border border-white/5"
                        >
                            {/* Background Image */}
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                                <span className="text-blue-400 font-mono text-sm mb-2 tracking-wider">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-bold mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-slate-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    {project.location}
                                </p>
                            </div>

                            {/* Hover Border/Glow */}
                            <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-2xl transition-colors duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
