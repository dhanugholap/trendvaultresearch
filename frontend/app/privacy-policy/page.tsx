const sections = [
    { title: 'Information We Collect', content: 'We collect information you provide directly to us, such as when you contact us, request a report, or subscribe to our newsletter. This includes name, email, phone number, company name, and any messages you send.' },
    { title: 'How We Use Your Information', content: 'We use the information we collect to provide, maintain, and improve our services, communicate with you about reports and updates, process transactions, and comply with legal obligations.' },
    { title: 'Information Sharing', content: 'We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website.' },
    { title: 'Data Security', content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.' },
    { title: 'Cookies', content: 'We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie settings through your browser preferences.' },
    { title: 'Contact', content: 'For privacy-related questions, contact us at sales@trendvaultresearch.com or write to us at our registered offices.' },
];

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #1e40af 100%)' }} className="py-12 sm:py-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
                    <h1 className="text-2xl sm:text-4xl font-bold text-white mb-3">Privacy Policy</h1>
                    <p className="text-blue-200 text-sm">Last updated: January 2025</p>
                </div>
            </div>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-10">
                    <p className="text-gray-600 text-sm leading-relaxed mb-8">
                        At Trendvault Research, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information.
                    </p>
                    <div className="space-y-8">
                        {sections.map((s, i) => (
                            <div key={s.title}>
                                <h2 className="text-base sm:text-lg font-bold mb-3 flex items-center gap-2" style={{ color: '#1e3a5f' }}>
                                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ background: '#e85d26' }}>
                                        {i + 1}
                                    </span>
                                    {s.title}
                                </h2>
                                <p className="text-gray-600 text-sm leading-relaxed pl-8">{s.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
