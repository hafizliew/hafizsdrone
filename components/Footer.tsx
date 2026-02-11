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

                <div className="border-t border-slate-700 pt-8 text-center text-slate-500">
                    <p>&copy; 2026 Hafiz&apos;s Drone. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
