const stats = [
    { value: '5,150+', label: 'Research Reports', icon: '📄' },
    { value: '2,350+', label: 'Global Clients', icon: '🌍' },
    { value: '1,050+', label: 'Managed Reports', icon: '📊' },
    { value: '100%', label: 'Client Satisfaction', icon: '⭐' },
];

export default function StatsSection() {
    return (
        <section className="py-12 sm:py-16 md:py-20" style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #1e40af 100%)' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">Doing the right thing,</h2>
                    <p className="text-blue-200 text-base sm:text-lg mt-1">at the right time.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                    {stats.map((s) => (
                        <div
                            key={s.label}
                            className="text-center p-4 sm:p-6 rounded-2xl"
                            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
                        >
                            <div className="text-2xl sm:text-3xl mb-2">{s.icon}</div>
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">{s.value}</div>
                            <div className="text-blue-200 text-xs sm:text-sm">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
