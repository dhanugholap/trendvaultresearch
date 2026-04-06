'use client';
import { useState } from 'react';

const faqs = [
    { q: 'What types of reports do you offer?', a: 'We offer syndicated research reports, customized research, and consulting services across 200+ industry sectors globally.' },
    { q: 'How can I purchase a report?', a: 'You can purchase reports directly from our website or contact our sales team for bulk purchases and custom pricing.' },
    { q: 'Do you offer sample reports?', a: 'Yes, we provide free sample reports. Click "Free Sample" on any report page or contact us through our contact form.' },
    { q: 'What is the delivery time for reports?', a: 'Syndicated reports are delivered within 24–48 hours. Custom research timelines vary based on scope and complexity.' },
    { q: 'Can I request a customized report?', a: 'Absolutely. Our team specializes in tailored research solutions. Contact us to discuss your specific requirements.' },
    { q: 'What license types are available?', a: 'We offer Single User, Multi User (1–10 employees), and Corporate (unlimited employees) license options.' },
    { q: 'Are the reports available in Excel format?', a: 'Yes, Corporate license includes Excel version for BI integration along with the PDF report.' },
];

export default function FAQPage() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <div style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #1e40af 100%)' }} className="py-12 sm:py-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-3 block">Support</span>
                    <h1 className="text-2xl sm:text-4xl font-bold text-white mb-3">Frequently Asked Questions</h1>
                    <p className="text-blue-200 text-sm sm:text-base">Find answers to common questions about our services.</p>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                            <button
                                className="w-full text-left px-5 sm:px-6 py-4 font-semibold text-sm flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors"
                                style={{ color: '#1e3a5f' }}
                                onClick={() => setOpen(open === i ? null : i)}
                            >
                                <span>{faq.q}</span>
                                <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold transition-all"
                                    style={{ background: open === i ? '#e85d26' : '#1e3a5f' }}>
                                    {open === i ? '−' : '+'}
                                </span>
                            </button>
                            {open === i && (
                                <div className="px-5 sm:px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-3">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-10 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 text-center">
                    <div className="text-3xl mb-3">💬</div>
                    <h3 className="font-bold text-base mb-2" style={{ color: '#1e3a5f' }}>Still have questions?</h3>
                    <p className="text-gray-500 text-sm mb-4">Our team is happy to help you with any queries.</p>
                    <a href="mailto:sales@trendvaultresearch.com"
                        className="inline-block px-6 py-3 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
                        style={{ background: '#e85d26' }}>
                        Contact Support
                    </a>
                </div>
            </div>
        </div>
    );
}
