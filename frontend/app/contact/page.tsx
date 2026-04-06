'use client';
import { useState } from 'react';
import { API_URL } from '@/lib/api';

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const res = await fetch(`${API_URL}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (data.success) {
                setStatus('success');
                setForm({ name: '', email: '', phone: '', company: '', message: '' });
            } else setStatus('error');
        } catch { setStatus('error'); }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <div style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #1e40af 100%)' }} className="py-14 sm:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-3 block">Get In Touch</span>
                    <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4">Contact Us</h1>
                    <p className="text-blue-200 text-sm sm:text-base max-w-xl mx-auto">
                        Our team is ready to help you with any inquiries about our research and services.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Contact Info */}
                    <div className="space-y-5">
                        {[
                            { icon: '📍', title: 'India Office', lines: ['Udchalo House Arena Building', 'Plot no 10, Sakore Nagar,', 'Viman Nagar, Pune 411014'] },
                            { icon: '📍', title: 'Ireland Office', lines: ['78 Temple Lawns Northwood Santry', 'EIRCODE D09R527', 'Dublin 9, Ireland'] },
                        ].map((o) => (
                            <div key={o.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xl">{o.icon}</span>
                                    <h3 className="font-bold text-sm" style={{ color: '#1e3a5f' }}>{o.title}</h3>
                                </div>
                                {o.lines.map((l) => <p key={l} className="text-gray-500 text-xs leading-relaxed">{l}</p>)}
                            </div>
                        ))}

                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                            <h3 className="font-bold text-sm mb-3" style={{ color: '#1e3a5f' }}>📞 Phone & Email</h3>
                            <div className="space-y-2">
                                <a href="tel:+442030499458" className="flex items-center gap-2 text-xs text-gray-600 hover:text-blue-600 transition-colors">
                                    +44 20 3049 9458 (UK)
                                </a>
                                <a href="tel:+12028882153" className="flex items-center gap-2 text-xs text-gray-600 hover:text-blue-600 transition-colors">
                                    +1 (202) 888-2153 (US)
                                </a>
                                <a href="mailto:sales@trendvaultresearch.com" className="flex items-center gap-2 text-xs font-semibold hover:underline break-all" style={{ color: '#e85d26' }}>
                                    sales@trendvaultresearch.com
                                </a>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                            <h3 className="font-bold text-sm mb-3" style={{ color: '#1e3a5f' }}>🕐 Business Hours</h3>
                            <div className="space-y-1 text-xs text-gray-500">
                                <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
                                <p>Saturday: 10:00 AM – 2:00 PM</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
                            <h2 className="text-xl font-bold mb-1" style={{ color: '#1e3a5f' }}>Send us a Message</h2>
                            <p className="text-gray-400 text-sm mb-6">We&apos;ll get back to you within 24 hours.</p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                                        <input type="text" required placeholder="Your Name" value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email <span className="text-red-500">*</span></label>
                                        <input type="email" required placeholder="you@email.com" value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                                        <input type="tel" placeholder="+1 000 000 0000" value={form.phone}
                                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Company</label>
                                        <input type="text" placeholder="Your Company" value={form.company}
                                            onChange={(e) => setForm({ ...form, company: e.target.value })}
                                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Message <span className="text-red-500">*</span></label>
                                    <textarea required rows={5} placeholder="How can we help you?" value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all resize-none" />
                                </div>

                                {status === 'success' && (
                                    <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-4 py-3">
                                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <p className="text-green-700 text-sm font-medium">Message sent! We&apos;ll get back to you within 24 hours.</p>
                                    </div>
                                )}
                                {status === 'error' && (
                                    <p className="text-red-500 text-sm">Something went wrong. Please try again or email us directly.</p>
                                )}

                                <button type="submit" disabled={status === 'loading'}
                                    className="w-full py-3.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 disabled:opacity-60 flex items-center justify-center gap-2"
                                    style={{ background: 'linear-gradient(135deg, #1e3a5f, #2563eb)' }}>
                                    {status === 'loading' ? (
                                        <>
                                            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                            </svg>
                                            Sending...
                                        </>
                                    ) : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
