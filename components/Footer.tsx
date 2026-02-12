export default function Footer() {
    return (
        <footer id="contact" className="relative px-6 md:px-12 py-24 overflow-hidden">
            <div className="footer-bg" />

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    <div>
                        <h3 className="text-3xl font-bold tracking-tight mb-4">
                            Hafiz&apos;s Drone
                        </h3>
                        <p className="text-slate-400 leading-relaxed">
                            Industrial Excellence from Above. Professional drone services for businesses that demand precision.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-slate-400">
                            <li><a href="#services" className="hover:text-white transition-colors">Aerial Photography</a></li>
                            <li><a href="#services" className="hover:text-white transition-colors">Mapping & Surveying</a></li>
                            <li><a href="#services" className="hover:text-white transition-colors">Infrastructure Inspection</a></li>
                            <li><a href="#services" className="hover:text-white transition-colors">Monitoring Solutions</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2 text-slate-400">
                            <li>Email: hafizsdrone@gmail.com</li>
                            <li>Phone: +60 (16) - 950 0270</li>
                            <li className="pt-4 flex gap-4">
                                <a href="https://www.youtube.com/@hafizsdrone4190" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a>
                                <a href="https://www.instagram.com/hafizsdrone?igsh=M2h0djE5N25wZ3o4" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
                                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-700 pt-12 pb-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex flex-col md:flex-row items-center gap-6 bg-white/5 px-8 py-6 rounded-2xl border border-white/10 max-w-3xl">
                            <div className="relative w-24 h-16 flex-shrink-0">
                                <img src="/hafizsdrone/logos/caam-logo.png" alt="CAAM Logo" className="w-full h-full object-contain" />
                            </div>
                            <div className="text-left">
                                <h4 className="text-lg font-bold mb-1">CAAM Certified Pilot</h4>
                                <p className="text-slate-400 text-xs leading-relaxed max-w-md">
                                    RCOC-B Certified by Civil Aviation Authority of Malaysia.
                                    Fully compliant with Malaysian drone regulations for industrial operations.
                                </p>
                            </div>
                        </div>

                        <div className="text-right">
                            <p className="text-slate-500 text-sm">&copy; 2026 Hafiz&apos;s Drone. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
