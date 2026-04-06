import Link from 'next/link';

const services = [
    {
        title: 'Consulting',
        icon: '💼',
        color: '#eff6ff',
        iconColor: '#1e3a5f',
        desc: 'Expert guidance to help you make informed business decisions and maximize growth. Our consultants bring deep industry expertise and data-driven insights to every engagement.',
        features: ['Strategic market entry analysis', 'Competitive benchmarking', 'Growth opportunity mapping', 'Risk assessment & mitigation'],
    },
    {
        title: 'Customized Research',
        icon: '🔬',
        color: '#fff7ed',
        iconColor: '#e85d26',
        desc: 'Tailored research solutions to address your unique market challenges. We design bespoke research methodologies to answer your specific business questions.',
        features: ['Custom survey design', 'Primary & secondary research', 'Proprietary data modeling', 'Dedicated analyst support'],
    },
    {
        title: 'Syndicate Research',
        icon: '📊',
        color: '#f0fdf4',
        iconColor: '#16a34a',
        desc: 'Comprehensive industry reports to keep you ahead of the curve. Our syndicated reports cover 200+ sectors with in-depth analysis and forecasts.',
        features: ['200+ industry sectors', 'Market size & forecasts', 'Competitor landscape', 'Instant PDF delivery'],
    },
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <div style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #1e40af 100%)' }} className="py-14 sm:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-3 block">What We Offer</span>
                    <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4">Our Services</h1>
                    <p className="text-blue-200 text-sm sm:text-base max-w-xl mx-auto">
                        End-to-end market intelligence solutions tailored to your business needs.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
                {/* Services grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
                    {services.map((s) => (
                        <div key={s.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all p-6 sm:p-8 flex flex-col">
                            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5" style={{ background: s.color }}>
                                {s.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-3" style={{ color: '#1e3a5f' }}>{s.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{s.desc}</p>
                            <ul className="space-y-2 mb-6">
                                {s.features.map((f) => (
                                    <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                                        <svg className="w-3.5 h-3.5 flex-shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact" className="inline-flex items-center gap-1 text-sm font-semibold transition-colors" style={{ color: '#e85d26' }}>
                                Learn More
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Process */}
                <div className="mb-16">
                    <div className="text-center mb-10">
                        <span className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-2 block">How It Works</span>
                        <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: '#1e3a5f' }}>Our Process</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                        {[
                            { step: '01', title: 'Define Scope', desc: 'We understand your research needs and objectives.' },
                            { step: '02', title: 'Data Collection', desc: 'Primary and secondary research using verified sources.' },
                            { step: '03', title: 'Analysis', desc: 'Expert analysts process and interpret the data.' },
                            { step: '04', title: 'Delivery', desc: 'Comprehensive report delivered to your inbox.' },
                        ].map((p) => (
                            <div key={p.step} className="text-center p-5 rounded-2xl bg-gray-50 border border-gray-100">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-3" style={{ background: '#1e3a5f' }}>
                                    {p.step}
                                </div>
                                <h4 className="font-bold text-sm mb-2" style={{ color: '#1e3a5f' }}>{p.title}</h4>
                                <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="rounded-2xl p-8 sm:p-12 text-center" style={{ background: 'linear-gradient(135deg, #1e3a5f, #1e40af)' }}>
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Need a Custom Solution?</h2>
                    <p className="text-blue-200 text-sm mb-6">Talk to our team and get a tailored research proposal.</p>
                    <Link href="/contact" className="inline-block px-8 py-3 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90" style={{ background: '#e85d26' }}>
                        Get in Touch
                    </Link>
                </div>
            </div>
        </div>
    );
}
