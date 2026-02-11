"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import Image from "next/image";

export default function AboutSection() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    const text = "We deliver precision aerial solutions for industrial applications. From cinematic photography to millimeter-accurate mapping, our advanced drone technology transforms how businesses capture, analyze, and monitor their operations.";

    const words = text.split(" ");
    let cumulativeCharIndex = 0;

    return (
        <section
            id="about"
            ref={ref}
            className="relative min-h-screen flex items-center justify-center px-6 md:px-12 py-24"
        >
            <div className="max-w-5xl text-center">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12 mx-auto">
                    About Us
                </h2>
                <div className="text-2xl md:text-4xl leading-relaxed tracking-tight mx-auto flex flex-wrap justify-center">
                    {words.map((word, wordIndex) => {
                        const wordChars = word.split("");
                        const wordStartIdx = cumulativeCharIndex;
                        cumulativeCharIndex += wordChars.length + 1; // +1 for the space

                        return (
                            <span key={wordIndex} className="inline-block whitespace-nowrap">
                                {wordChars.map((char, charIndex) => (
                                    <span
                                        key={charIndex}
                                        className={`char ${isInView ? "revealed" : ""}`}
                                        style={{
                                            transitionDelay: `${(wordStartIdx + charIndex) * 0.01}s`,
                                        }}
                                    >
                                        {char}
                                    </span>
                                ))}
                                {/* Space character */}
                                <span
                                    className={`char ${isInView ? "revealed" : ""}`}
                                    style={{
                                        transitionDelay: `${(wordStartIdx + wordChars.length) * 0.01}s`,
                                    }}
                                >
                                    &nbsp;
                                </span>
                            </span>
                        );
                    })}
                </div>

                <div className="mt-20 flex flex-col items-center border-t border-white/5 pt-12">
                    <p className="text-slate-400 font-mono text-sm uppercase tracking-[0.2em] mb-8">Official Certification</p>
                    <div className="flex flex-col md:flex-row items-center gap-8 bg-white/5 p-8 rounded-3xl border border-white/10 max-w-2xl">
                        <div className="relative w-32 h-20">
                            <Image src="/logos/caam-logo.png" alt="CAAM Logo" fill className="object-contain" />
                        </div>
                        <div className="text-left">
                            <h4 className="text-xl font-bold mb-2">RCOC-B Certified by CAAM</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Fully certified for Remote Pilot Competency (B-Category) by the Civil Aviation Authority of Malaysia,
                                ensuring the highest safety standards and regulatory compliance for all drone operations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
