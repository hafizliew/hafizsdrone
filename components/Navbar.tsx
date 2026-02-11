"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-3"
                >
                    <div className="text-2xl font-bold tracking-tight">Hafiz&apos;s Drone</div>
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full">
                        Certified Pilot
                    </span>
                </motion.div>

                <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    onClick={() => setMenuOpen(true)}
                    className="px-6 py-3 border border-slate-600 rounded-full hover:bg-slate-800 transition-colors"
                    suppressHydrationWarning
                >
                    Menu
                </motion.button>
            </nav>

            {/* Fullscreen Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="menu-overlay"
                    >
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="absolute top-6 right-6 md:top-12 md:right-12 text-4xl hover:rotate-90 transition-transform duration-300"
                            suppressHydrationWarning
                        >
                            ×
                        </button>

                        <div className="flex flex-col items-center gap-6 md:gap-8">
                            <motion.a
                                href="#services"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.6 }}
                                onClick={() => setMenuOpen(false)}
                                className="menu-link"
                            >
                                Services
                            </motion.a>
                            <motion.a
                                href="#about"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                onClick={() => setMenuOpen(false)}
                                className="menu-link"
                            >
                                About
                            </motion.a>
                            <motion.a
                                href="#testimonials"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                onClick={() => setMenuOpen(false)}
                                className="menu-link"
                            >
                                Testimonials
                            </motion.a>
                            <motion.a
                                href="#contact"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                onClick={() => setMenuOpen(false)}
                                className="menu-link"
                            >
                                Contact
                            </motion.a>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="flex gap-6 mt-8 text-sm text-slate-400"
                            >
                                <a href="https://www.youtube.com/@hafizsdrone4190" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a>
                                <a href="https://www.instagram.com/hafizsdrone?igsh=M2h0djE5N25wZ3o4" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
                                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
