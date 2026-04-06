import Link from 'next/link';

const industries = [
    { label: 'Healthcare', href: '/industries/healthcare' },
    { label: 'Chemicals & Materials', href: '/industries/chemicals-and-materials' },
    { label: 'Information & Technology', href: '/industries/information-and-technology' },
    { label: 'Machinery & Equipment', href: '/industries/machinery-and-equipment' },
    { label: 'Automotive & Transportation', href: '/industries/automotive-and-transportation' },
    { label: 'Food & Beverages', href: '/industries/food-and-beverages' },
];

export default function Footer() {
    return (
        <footer style={{ background: '#0f1f3d' }} className="text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 md:pt-16 pb-6 sm:pb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">

                    {/* Brand */}
                    <div className="sm:col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div
                                className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                                style={{ background: 'linear-gradient(135deg, #1e3a5f, #2563eb)' }}
                            >
                                TVR
                            </div>
                            <span className="font-bold text-lg">
                                <span style={{ color: '#e85d26' }}>Trendvault</span>{' '}
                                <span className="text-white">Research</span>
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-5">
                            Comprehensive market intelligence that empowers global business decisions across 200+ sectors.
                        </p>
                        <div className="flex gap-3">
                            <a href="https://www.facebook.com/people/TrendVault-Research-Media-Pvt-Ltd/61578967139082/" target="_blank" rel="noopener noreferrer"
                                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-gray-400 hover:text-white transition-colors"
                                style={{ background: 'rgba(255,255,255,0.08)' }}>f</a>
                            <a href="https://x.com/research031991" target="_blank" rel="noopener noreferrer"
                                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-gray-400 hover:text-white transition-colors"
                                style={{ background: 'rgba(255,255,255,0.08)' }}>𝕏</a>
                            <a href="https://www.linkedin.com/company/trendvault-research-media" target="_blank" rel="noopener noreferrer"
                                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-gray-400 hover:text-white transition-colors"
                                style={{ background: 'rgba(255,255,255,0.08)' }}>in</a>
                        </div>
                    </div>

                    {/* Industries */}
                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">Industries</h4>
                        <ul className="space-y-2.5">
                            {industries.map((i) => (
                                <li key={i.href}>
                                    <Link href={i.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                                        {i.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/industries" className="text-sm font-semibold hover:underline" style={{ color: '#e85d26' }}>
                                    View All →
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">Quick Links</h4>
                        <ul className="space-y-2.5">
                            {[
                                { label: 'About Us', href: '/about' },
                                { label: 'Services', href: '/services' },
                                { label: 'Contact', href: '/contact' },
                                { label: 'Privacy Policy', href: '/privacy-policy' },
                                { label: 'Terms & Conditions', href: '/terms' },
                                { label: 'FAQ', href: '/faq' },
                            ].map((l) => (
                                <li key={l.href}>
                                    <Link href={l.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact + Subscribe */}
                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">Contact Us</h4>
                        <div className="space-y-2.5 text-sm text-gray-400 mb-6">
                            <p>📍 Udchalo House, Viman Nagar, Pune 411014</p>
                            <p>📍 78 Temple Lawns, Dublin 9, Ireland</p>
                            <a href="tel:+442030499458" className="flex items-center gap-1 hover:text-white transition-colors">📞 +44 20 3049 9458</a>
                            <a href="tel:+12028882153" className="flex items-center gap-1 hover:text-white transition-colors">📞 +1 (202) 888-2153</a>
                            <a href="mailto:sales@trendvaultresearch.com" className="hover:text-white transition-colors block break-all" style={{ color: '#e85d26' }}>
                                sales@trendvaultresearch.com
                            </a>
                        </div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-3">Newsletter</h4>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 min-w-0 px-3 py-2 rounded-lg text-sm text-gray-900 outline-none bg-white"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-opacity flex-shrink-0"
                                style={{ background: '#e85d26' }}
                            >
                                Go
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-gray-800 pt-5 sm:pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
                    <p className="text-gray-500 text-xs sm:text-sm">© 2025 Trendvault Research. All rights reserved.</p>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
                        <Link href="/privacy-policy" className="text-gray-500 text-xs sm:text-sm hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-gray-500 text-xs sm:text-sm hover:text-white transition-colors">Terms</Link>
                        <Link href="/faq" className="text-gray-500 text-xs sm:text-sm hover:text-white transition-colors">FAQ</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
