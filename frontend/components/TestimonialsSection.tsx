const testimonials = [
    {
        name: 'Shankar Godavarti',
        role: 'Global Product, Quality & Strategy Executive',
        company: 'Donaldson',
        quote: 'Happy with the final report and post-sales by your team. The insights were exactly what we needed to make our strategic decisions.',
        initials: 'SG',
        color: '#1e3a5f',
    },
    {
        name: 'Erik Perison',
        role: 'US TPS Business Development Manager',
        company: 'Thermon',
        quote: 'The response was good, and I got what I was looking for. Highly professional team with deep industry knowledge.',
        initials: 'EP',
        color: '#e85d26',
    },
];

export default function TestimonialsSection() {
    return (
        <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-8 sm:mb-12">
                    <span className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-2 block">Testimonials</span>
                    <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: '#1e3a5f' }}>What Our Clients Say</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 max-w-4xl mx-auto">
                    {testimonials.map((t) => (
                        <div
                            key={t.name}
                            className="rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                            style={{ background: '#f8fafc' }}
                        >
                            <div className="text-3xl sm:text-4xl font-serif mb-3 sm:mb-4" style={{ color: '#e85d26', lineHeight: 1 }}>"</div>
                            <p className="text-gray-600 text-sm leading-relaxed mb-5 sm:mb-6 italic">{t.quote}</p>
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                                    style={{ background: t.color }}
                                >
                                    {t.initials}
                                </div>
                                <div>
                                    <p className="font-semibold text-sm" style={{ color: '#1e3a5f' }}>{t.name}</p>
                                    <p className="text-gray-400 text-xs">{t.role} — {t.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
