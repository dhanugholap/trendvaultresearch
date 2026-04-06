import Link from 'next/link';

const services = [
    {
        title: 'Consulting',
        desc: 'Expert guidance to help you make informed business decisions and maximize growth.',
        icon: (
            <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
    },
    {
        title: 'Customized Research',
        desc: 'Tailored research solutions to address your unique market challenges.',
        icon: (
            <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
    },
    {
        title: 'Syndicate Research',
        desc: 'Comprehensive industry reports to keep you ahead of the curve.',
        icon: (
            <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
];

export default function ServicesSection() {
    return (
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-8 sm:mb-12">
                    <span className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-2 block">What We Offer</span>
                    <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: '#1e3a5f' }}>Our Core Services</h2>
                    <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm px-2">
                        We provide end-to-end market intelligence solutions tailored to your business needs.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
                    {services.map((s) => (
                        <div
                            key={s.title}
                            className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all group border border-gray-100 hover:border-blue-100"
                        >
                            <div
                                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform"
                                style={{ background: 'linear-gradient(135deg, #eff6ff, #dbeafe)', color: '#1e3a5f' }}
                            >
                                {s.icon}
                            </div>
                            <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3" style={{ color: '#1e3a5f' }}>{s.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-4 sm:mb-5">{s.desc}</p>
                            <Link
                                href="/services"
                                className="inline-flex items-center gap-1 text-sm font-semibold transition-colors"
                                style={{ color: '#e85d26' }}
                            >
                                Explore More
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
