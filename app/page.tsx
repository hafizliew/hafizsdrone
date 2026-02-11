"use client";

import { useLenis } from "@/hooks/useLenis";
import Navbar from "@/components/Navbar";
import SequenceScroll from "@/components/SequenceScroll";
import AboutSection from "@/components/AboutSection";
import BentoGrid from "@/components/BentoGrid";
import ProjectsSection from "@/components/ProjectsSection";
import StatsSection from "@/components/StatsSection";
import ClientsSection from "@/components/ClientsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
    useLenis();

    return (
        <main className="relative">
            <Navbar />

            <WhatsAppButton />

            {/* Hero Scrollytelling Section */}
            <SequenceScroll frameCount={180} framePrefix="ezgif-frame-" />

            {/* Content sections that scroll over the hero */}
            <div className="relative -mt-[100vh] z-10">
                <AboutSection />
                <BentoGrid />
                <ProjectsSection />
                <StatsSection />
                <ClientsSection />
                <Footer />
            </div>
        </main>
    );
}
