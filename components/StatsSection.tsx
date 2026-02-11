"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

const stats = [
    { label: "Flights Completed", value: 500, suffix: "+" },
    { label: "Acres Mapped", value: 10000, suffix: "+" },
    { label: "Happy Clients", value: 150, suffix: "+" },
    { label: "Years Experience", value: 5, suffix: "" },
];

export default function StatsSection() {
    return (
        <section className="relative px-6 md:px-12 py-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-7xl mx-auto">
                {stats.map((stat, index) => (
                    <StatCounter key={stat.label} stat={stat} index={index} />
                ))}
            </div>
        </section>
    );
}

function StatCounter({ stat, index }: { stat: typeof stats[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        const duration = 2000;
        const steps = 60;
        const increment = stat.value / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= stat.value) {
                setCount(stat.value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [isInView, stat.value]);

    return (
        <div
            ref={ref}
            className="text-center"
            style={{ transitionDelay: `${index * 0.1}s` }}
        >
            <div className="stat-number mb-2">
                {count.toLocaleString()}
                {stat.suffix}
            </div>
            <div className="text-slate-400 text-sm md:text-base tracking-wide">
                {stat.label}
            </div>
        </div>
    );
}
