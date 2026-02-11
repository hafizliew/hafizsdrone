import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Hafiz's Drone | Industrial Excellence from Above",
    description: "Professional drone services for aerial photography, mapping, inspection, and monitoring. Precision and excellence in every flight.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={outfit.variable}>
            <body suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}
