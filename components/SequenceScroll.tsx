"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "motion/react";

interface SequenceScrollProps {
    frameCount?: number;
    framePrefix?: string;
}

export default function SequenceScroll({
    frameCount = 240,
    framePrefix = "matrice-frame-"
}: SequenceScrollProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [loadProgress, setLoadProgress] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const currentFrame = useTransform(
        scrollYProgress,
        [0, 1],
        [0, frameCount - 1]
    );

    // Preload all images
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            const frameNumber = String(i).padStart(3, "0");
            img.src = `/sequence/${framePrefix}${frameNumber}.jpg`;

            img.onload = () => {
                loadedCount++;
                setLoadProgress((loadedCount / frameCount) * 100);

                if (loadedCount === frameCount) {
                    setImagesLoaded(true);
                }
            };

            img.onerror = () => {
                console.error(`Failed to load image: ${img.src}`);
                loadedCount++;
                setLoadProgress((loadedCount / frameCount) * 100);

                if (loadedCount === frameCount) {
                    setImagesLoaded(true);
                }
            };

            loadedImages[i - 1] = img;
        }

        setImages(loadedImages);
    }, [frameCount, framePrefix]);

    // Render current frame to canvas
    useEffect(() => {
        if (!imagesLoaded || !canvasRef.current || images.length === 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const unsubscribe = currentFrame.on("change", (latest) => {
            const index = Math.round(latest);
            const img = images[index];

            if (img && img.complete) {
                // Set canvas size to match window
                const dpr = window.devicePixelRatio || 1;
                canvas.width = window.innerWidth * dpr;
                canvas.height = window.innerHeight * dpr;
                canvas.style.width = `${window.innerWidth}px`;
                canvas.style.height = `${window.innerHeight}px`;

                ctx.scale(dpr, dpr);

                // Calculate dimensions to cover the canvas while maintaining aspect ratio
                const canvasAspect = window.innerWidth / window.innerHeight;
                const imgAspect = img.width / img.height;

                let drawWidth, drawHeight, offsetX, offsetY;

                if (canvasAspect > imgAspect) {
                    drawWidth = window.innerWidth;
                    drawHeight = drawWidth / imgAspect;
                    offsetX = 0;
                    offsetY = (window.innerHeight - drawHeight) / 2;
                } else {
                    drawHeight = window.innerHeight;
                    drawWidth = drawHeight * imgAspect;
                    offsetX = (window.innerWidth - drawWidth) / 2;
                    offsetY = 0;
                }

                ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
                ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
            }
        });

        // Initial render
        const img = images[0];
        if (img && img.complete) {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;

            ctx.scale(dpr, dpr);

            const canvasAspect = window.innerWidth / window.innerHeight;
            const imgAspect = img.width / img.height;

            let drawWidth, drawHeight, offsetX, offsetY;

            if (canvasAspect > imgAspect) {
                drawWidth = window.innerWidth;
                drawHeight = drawWidth / imgAspect;
                offsetX = 0;
                offsetY = (window.innerHeight - drawHeight) / 2;
            } else {
                drawHeight = window.innerHeight;
                drawWidth = drawHeight * imgAspect;
                offsetX = (window.innerWidth - drawWidth) / 2;
                offsetY = 0;
            }

            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        }

        return () => unsubscribe();
    }, [imagesLoaded, images, currentFrame]);

    // Handle window resize
    useEffect(() => {
        if (!imagesLoaded) return;

        const handleResize = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            const index = Math.round(currentFrame.get());
            const img = images[index];

            if (img && img.complete) {
                const dpr = window.devicePixelRatio || 1;
                canvas.width = window.innerWidth * dpr;
                canvas.height = window.innerHeight * dpr;
                canvas.style.width = `${window.innerWidth}px`;
                canvas.style.height = `${window.innerHeight}px`;

                ctx.scale(dpr, dpr);

                const canvasAspect = window.innerWidth / window.innerHeight;
                const imgAspect = img.width / img.height;

                let drawWidth, drawHeight, offsetX, offsetY;

                if (canvasAspect > imgAspect) {
                    drawWidth = window.innerWidth;
                    drawHeight = drawWidth / imgAspect;
                    offsetX = 0;
                    offsetY = (window.innerHeight - drawHeight) / 2;
                } else {
                    drawHeight = window.innerHeight;
                    drawWidth = drawHeight * imgAspect;
                    offsetX = (window.innerWidth - drawWidth) / 2;
                    offsetY = 0;
                }

                ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
                ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [imagesLoaded, images, currentFrame]);

    // Text overlay opacity transforms
    const heroOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
    const text1Opacity = useTransform(scrollYProgress, [0.25, 0.3, 0.55, 0.6], [0, 1, 1, 0]);
    const text2Opacity = useTransform(scrollYProgress, [0.55, 0.6, 0.85, 0.9], [0, 1, 1, 0]);
    const text3Opacity = useTransform(scrollYProgress, [0.85, 0.9, 0.95, 1], [0, 1, 1, 0]);

    return (
        <>
            {/* Preloader */}
            {!imagesLoaded && (
                <div className="preloader">
                    <div className="preloader-text">Loading Experience</div>
                    <div className="preloader-bar">
                        <div
                            className="preloader-progress"
                            style={{ width: `${loadProgress}%` }}
                        />
                    </div>
                    <div className="text-sm text-slate-400 mt-2">
                        {Math.round(loadProgress)}%
                    </div>
                </div>
            )}

            {/* Main scroll container */}
            <div ref={containerRef} className="relative h-[400vh]">
                {/* Sticky canvas */}
                <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                    <canvas
                        ref={canvasRef}
                        className="absolute inset-0"
                    />

                    {/* Text overlays */}
                    <motion.div
                        style={{ opacity: heroOpacity }}
                        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10"
                    >
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">
                            Hafiz&apos;s Drone
                        </h1>
                        <p className="text-xl md:text-3xl text-slate-300 tracking-tight">
                            Industrial Excellence from Above
                        </p>
                    </motion.div>

                    <motion.div
                        style={{ opacity: text1Opacity }}
                        className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 max-w-lg z-10"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                            Aerial Photography & Videography
                        </h2>
                        <p className="text-lg md:text-xl text-slate-300">
                            Cinematic Precision.
                        </p>
                    </motion.div>

                    <motion.div
                        style={{ opacity: text2Opacity }}
                        className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 max-w-lg text-right z-10"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                            Mapping & Inspection
                        </h2>
                        <p className="text-lg md:text-xl text-slate-300">
                            Millimeter-Accurate Data.
                        </p>
                    </motion.div>

                    <motion.div
                        style={{ opacity: text3Opacity }}
                        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                            Monitoring Solutions
                        </h2>
                        <p className="text-lg md:text-xl text-slate-300 mb-8">
                            Secure Your Assets.
                        </p>
                        <button className="magnetic-btn px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-lg font-semibold hover:scale-105 transition-transform">
                            Book a Consultation
                        </button>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
