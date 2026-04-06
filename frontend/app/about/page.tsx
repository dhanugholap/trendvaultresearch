import Link from 'next/link';

const stats = [
    { value: '5,150+', label: 'Research Reports', icon: '📄' },
    { value: '2,350+', label: 'Global Clients', icon: '🌍' },
    { value: '200+', label: 'Industry Sectors', icon: '🏭' },
    { value: '100%', label: 'Client Satisfaction', icon: '⭐' },
];

const team = [
    { name: 'Maria Wilson', role: 'Head of Sales — UK', initials: 'MW', color: '#1e3a5f' },
    { name: 'Prat M.', role: 'Head of Sales — US', initials: 'PM', color: '#e85d26' },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <div style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #1e40af 100%)' }} className="py-14 sm:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-3 block">About Us</span>
                    <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                        Empowering Decisions with<br className="hidden sm:block" /> Market Intelligence
                    </h1>
                    <p className="text-blue-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                        Trendvault Research is a leading market research firm delivering actionable insights across 200+ industry sectors worldwide.
                    </p>
                </div>
            </div>

            {/* Stats */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-8 sm:-mt-10 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                    {stats.map((s) => (
                        <div key={s.label} className="bg-white rounded-2xl shadow-md border border-gray-100 p-4 sm:p-6 text-center">
                            <div className="text-2xl sm:text-3xl mb-1">{s.icon}</div>
                            <div className="text-xl sm:text-2xl font-bold mb-0.5" style={{ color: '#e85d26' }}>{s.value}</div>
                            <div className="text-gray-500 text-xs sm:text-sm">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* About content */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center mb-16">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-2 block">Who We Are</span>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#1e3a5f' }}>Global Market Intelligence Partner</h2>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            Trendvault Research combines expert analysis, verified data, and proprietary modeling to help businesses identify growth opportunities and outperform competition.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            Our team of experienced analysts and industry experts work tirelessly to provide comprehensive, accurate, and timely market intelligence that empowers global business decisions.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            With offices in Pune, India and Dublin, Ireland, we serve clients across the globe including Fortune 500 companies, SMEs, and government organizations.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { title: 'Expert Analysts', desc: 'Seasoned professionals with deep domain expertise', icon: '🎓' },
                            { title: 'Verified Data', desc: 'Rigorous data validation and quality assurance', icon: '✅' },
                            { title: 'Global Reach', desc: 'Serving clients in 50+ countries worldwide', icon: '🌐' },
                            { title: 'Fast Delivery', desc: 'Reports delivered within 24–48 hours', icon: '⚡' },
                        ].map((item) => (
                            <div key={item.title} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                                <div className="text-2xl mb-2">{item.icon}</div>
                                <h4 className="font-bold text-sm mb-1" style={{ color: '#1e3a5f' }}>{item.title}</h4>
                                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Offices */}
                <div className="mb-16">
                    <div className="text-center mb-8">
                        <span className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-2 block">Our Presence</span>
                        <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: '#1e3a5f' }}>Global Offices</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {[
                            { city: 'Pune, India', flag: '🇮🇳', address: 'Udchalo House Arena Building Plot no 10, Sakore Nagar, Viman Nagar, Pune, Maharashtra 411014', phone: '+44 20 3049 9458' },
                            { city: 'Dublin, Ireland', flag: '🇮🇪', address: '78 Temple Lawns Northwood Santry, EIRCODE D09R527, Dublin 9, Ireland', phone: '+1 (202) 888-2153' },
                        ].map((office) => (
                            <div key={office.city} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-3xl">{office.flag}</span>
                                    <h3 className="font-bold text-base" style={{ color: '#1e3a5f' }}>{office.city}</h3>
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed mb-3">{office.address}</p>
                                <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-sm font-semibold" style={{ color: '#e85d26' }}>
                                    📞 {office.phone}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Team */}
                <div className="mb-16">
                    <div className="text-center mb-8">
                        <span className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-2 block">Our Team</span>
                        <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: '#1e3a5f' }}>Sales Leadership</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-xl mx-auto">
                        {team.map((t) => (
                            <div key={t.name} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
                                <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3" style={{ background: t.color }}>
                                    {t.initials}
                                </div>
                                <h3 className="font-bold text-sm mb-1" style={{ color: '#1e3a5f' }}>{t.name}</h3>
                                <p className="text-gray-400 text-xs mb-3">{t.role}</p>
                                <a href="mailto:sales@trendvaultresearch.com" className="text-xs font-semibold" style={{ color: '#e85d26' }}>
                                    sales@trendvaultresearch.com
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="rounded-2xl p-8 sm:p-12 text-center" style={{ background: 'linear-gradient(135deg, #1e3a5f, #1e40af)' }}>
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Ready to Get Started?</h2>
                    <p className="text-blue-200 text-sm mb-6">Explore our reports or get in touch with our team.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/industries" className="px-6 py-3 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90" style={{ background: '#e85d26' }}>
                            Browse Reports
                        </Link>
                        <Link href="/contact" className="px-6 py-3 rounded-xl text-sm font-bold text-white border border-white/30 hover:bg-white/10 transition-all">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
