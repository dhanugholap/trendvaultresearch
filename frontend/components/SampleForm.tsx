'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { API_URL } from '@/lib/api';

interface Report {
    id: number;
    title: string;
    slug: string;
    industry_slug: string;
    price: number;
}

const countries = [
    'India', 'United States', 'United Kingdom', 'Germany', 'France',
    'Canada', 'Australia', 'Japan', 'China', 'Brazil', 'South Africa',
    'UAE', 'Singapore', 'Netherlands', 'Italy', 'Spain', 'Mexico',
    'South Korea', 'Russia', 'Sweden',
];

const licensingOptions = [
    {
        title: 'Corporate User License',
        icon: '🏢',
        features: [
            'Shared among all employees, can print.',
            'Includes Excel for BI integration.',
            'Free customizations included.',
            'Dedicated analyst support.',
        ],
    },
    {
        title: 'Multi User License',
        icon: '👥',
        features: [
            'PDF via email.',
            '1–10 employees access.',
        ],
    },
    {
        title: 'Single User License',
        icon: '👤',
        features: [
            'One user only.',
            'No printing or sharing.',
        ],
    },
];

export default function SampleForm({ report, industryName }: { report: Report; industryName: string }) {
    const [form, setForm] = useState({
        name: '',
        job_title: '',
        email: '',
        phone: '',
        company: '',
        country: 'India',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name.trim()) { alert('Please enter your full name'); return; }
        if (!form.email.trim()) { alert('Please enter your email'); return; }
        if (!form.phone.trim()) { alert('Please enter your phone number'); return; }
        setStatus('loading');
        setErrorMsg('');
        try {
            const res = await fetch(`${API_URL}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    phone: form.phone,
                    company: form.company || form.job_title || 'N/A',
                    message: `[FREE SAMPLE REQUEST]\nReport: ${report.title}\nJob Title: ${form.job_title}\nCompany: ${form.company}\nCountry: ${form.country}\n\n${form.message}`,
                }),
            });
            const data = await res.json();
            if (res.ok && data.success) {
                setStatus('success');
                setForm({ ...form, name: '', job_title: '', email: '', phone: '', company: '' });
            } else {
                setStatus('error');
                setErrorMsg(data.message || 'Server error. Please try again.');
            }
        } catch {
            setStatus('error');
            setErrorMsg('Cannot connect to server. Make sure backend is running.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 py-8">

                {/* Breadcrumb */}
                <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-6">
                    <Link href="/" className="hover:text-blue-600">Home</Link>
                    <span>›</span>
                    <Link href={`/industries/${report.industry_slug}`} className="hover:text-blue-600 capitalize">{industryName}</Link>
                    <span>›</span>
                    <span className="text-gray-800">Request Free Sample</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* LEFT: Form */}
                    <div className="lg:col-span-2">
                        <h1 className="text-3xl font-bold mb-1" style={{ color: '#1e3a5f' }}>Request Free Sample</h1>
                        <p className="text-gray-500 text-sm mb-6">Get a free sample of this market research report to evaluate its content and quality.</p>

                        {/* Report info */}
                        <div className="rounded-xl p-4 mb-6 border" style={{ background: '#f0f7ff', borderColor: '#bfdbfe' }}>
                            <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#e85d26' }}>Sample Request for:</p>
                            <p className="text-sm font-bold leading-snug" style={{ color: '#1e3a5f' }}>{report.title}</p>
                            <div className="mt-3 flex items-center gap-2 text-xs text-blue-700 bg-blue-100 rounded-lg px-3 py-2 w-fit">
                                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                You&apos;re requesting a free sample of this report.
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                                    <input type="text" required placeholder="Your Full Name" value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                                    <input type="text" placeholder="Your Job Title" value={form.job_title}
                                        onChange={(e) => setForm({ ...form, job_title: e.target.value })}
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Business Email <span className="text-red-500">*</span></label>
                                    <input type="email" required placeholder="you@email.com" value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
                                    <input type="tel" required placeholder="+91 00000 00000" value={form.phone}
                                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                                <input type="text" placeholder="Your Company Name" value={form.company}
                                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Select Country</label>
                                <select value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all bg-white">
                                    {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Your Message <span className="text-gray-400 font-normal">(Optional)</span></label>
                                <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all resize-none" />
                            </div>

                            {status === 'success' && (
                                <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-lg px-4 py-3">
                                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <p className="text-green-700 text-sm font-medium">Sample request submitted! Our team will contact you within 24 hours.</p>
                                </div>
                            )}

                            {status === 'error' && (
                                <p className="text-red-500 text-sm">{errorMsg || 'Something went wrong. Please try again.'}</p>
                            )}

                            <button type="submit" disabled={status === 'loading'}
                                className="w-full py-3 rounded-lg text-sm font-bold text-white transition-all hover:opacity-90 disabled:opacity-60 flex items-center justify-center gap-2"
                                style={{ background: '#1e3a5f' }}>
                                {status === 'loading' ? (
                                    <>
                                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        Request Sample
                                    </>
                                )}
                            </button>

                            <p className="text-center text-xs text-gray-400">🔒 Your information is 100% secure and will never be shared.</p>
                        </form>

                        {/* Map + Contact */}
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-3">
                                <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                                    <div className="bg-green-600 text-white text-xs font-bold px-3 py-1.5">📍 India Office - Pune</div>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2655888563425!2d73.91171!3d18.56794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3a7b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sViman%20Nagar%2C%20Pune%2C%20Maharashtra%20411014!5e0!3m2!1sen!2sin!4v1680000000000"
                                        width="100%" height="160" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                </div>
                                <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                                    <div className="bg-green-600 text-white text-xs font-bold px-3 py-1.5">📍 Ireland Office - Dublin</div>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.0!2d-6.2489!3d53.3975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e80a5b3b3b3%3A0x1234567890abcdef!2sSantry%2C%20Dublin%2C%20Ireland!5e0!3m2!1sen!2sie!4v1680000000001"
                                        width="100%" height="160" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                </div>
                            </div>
                            <div className="rounded-xl p-5 text-white" style={{ background: '#2563eb' }}>
                                <h3 className="text-base font-bold mb-3">Contact Details</h3>
                                <p className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-2">Our Offices</p>
                                <div className="mb-3">
                                    <p className="font-semibold text-sm">India Office</p>
                                    <p className="text-blue-100 text-xs leading-relaxed">Udchalo House Arena Building Plot no 10,<br />Sakore Nagar, Viman Nagar,<br />Pune, Maharashtra 411014</p>
                                </div>
                                <div className="mb-4">
                                    <p className="font-semibold text-sm">Ireland Office</p>
                                    <p className="text-blue-100 text-xs leading-relaxed">78 Temple Lawns Northwood Santry<br />EIRCODE D09R527, Dublin 9, Ireland</p>
                                </div>
                                <p className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-2">Contact Information</p>
                                <div className="space-y-1.5">
                                    <a href="tel:+442030499458" className="flex items-center gap-2 text-xs text-blue-100 hover:text-white">📞 +44 20 3049 9458 (UK)</a>
                                    <a href="tel:+12028882153" className="flex items-center gap-2 text-xs text-blue-100 hover:text-white">📞 +1 (202) 888-2153 (US)</a>
                                    <a href="mailto:sales@trendvaultresearch.com" className="flex items-center gap-2 text-xs text-blue-100 hover:text-white">✉️ sales@trendvaultresearch.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Sidebar */}
                    <div className="space-y-5">
                        {[
                            { name: 'Maria Wilson', role: 'Head Of Sales', email: 'sales@trendvaultresearch.com', phone: '+44 20 3049 9458 (United Kingdom)' },
                            { name: 'Prat M.', role: 'Head Of Sales', email: 'sales@trendvaultresearch.com', phone: '+1(202) 888-2153 (United States)' },
                        ].map((person) => (
                            <div key={person.name} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 text-center">
                                <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3 bg-gray-100 flex items-center justify-center">
                                    <Image
                                        src="https://www.trendvaultresearch.com/_next/image?url=%2FImages%2Fperson-avatar.png&w=256&q=75"
                                        alt={person.name}
                                        width={64}
                                        height={64}
                                        className="object-cover"
                                        unoptimized
                                    />
                                </div>
                                <p className="font-bold text-sm" style={{ color: '#1e3a5f' }}>{person.name}</p>
                                <p className="text-xs text-gray-400 mb-2">{person.role}</p>
                                <p className="text-xs text-gray-500">{person.email}</p>
                                <p className="text-xs text-gray-500 mt-0.5">{person.phone}</p>
                            </div>
                        ))}

                        {/* Licensing Options */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                            <h3 className="font-bold text-sm mb-4" style={{ color: '#1e3a5f' }}>Our Licensing Options</h3>
                            <div className="space-y-4">
                                {licensingOptions.map((opt, idx) => (
                                    <div key={opt.title} className={idx < licensingOptions.length - 1 ? 'pb-4 border-b border-gray-100' : ''}>
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-base">{opt.icon}</span>
                                            <p className="font-semibold text-sm" style={{ color: '#1e3a5f' }}>{opt.title}</p>
                                        </div>
                                        <ul className="space-y-1.5">
                                            {opt.features.map((f) => (
                                                <li key={f} className="flex items-start gap-2 text-xs text-gray-500">
                                                    <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
