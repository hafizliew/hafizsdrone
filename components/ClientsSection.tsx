"use client";

import { motion } from "motion/react";
import Image from "next/image";

const clients = [
    { name: "PROLINTAS", logo: "/logos/prolintas.png" },
    { name: "JKR", logo: "/logos/jkr.png" },
    { name: "PETRONAS", logo: null },
    { name: "LLM", logo: "/logos/llm.png" },
];

export default function ClientsSection() {
    return (
        <section id="clients" className="relative py-24 overflow-hidden bg-black/50 backdrop-blur-sm border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6 mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-bold tracking-tighter text-center"
                >
                    TRUSTED BY
                </motion.h2>
            </div>

            <div className="flex relative overflow-hidden group">
                <motion.div
                    animate={{
                        x: ["0%", "-100%"],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear",
                        },
                    }}
                    className="flex whitespace-nowrap gap-24 md:gap-48 items-center"
                >
                    {/* Seamless Loop: Repeat the array enough times to fill the width */}
                    {[...clients, ...clients, ...clients, ...clients, ...clients, ...clients].map((client, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0"
                        >
                            {client.logo ? (
                                <div className="relative h-12 md:h-20 w-32 md:w-56 grayscale hover:grayscale-0 transition-all duration-500 opacity-30 hover:opacity-100">
                                    <Image
                                        src={client.logo}
                                        alt={client.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ) : (
                                <div className="text-3xl md:text-5xl font-black tracking-[0.2em] text-white/10 hover:text-white/40 transition-colors duration-500 cursor-default select-none uppercase">
                                    {client.name}
                                </div>
                            )}
                        </div>
                    ))}
                </motion.div>

                {/* Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-center mt-12 text-slate-500 text-sm tracking-[0.3em] uppercase"
            >
                Partners in Precision & Excellence
            </motion.p>
        </section>
    );
}
