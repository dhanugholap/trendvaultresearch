'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { API_URL } from '@/lib/api';

const countries = ['India', 'United States', 'United Kingdom', 'Germany', 'France', 'Canada', 'Australia', 'Japan', 'China', 'Brazil', 'UAE', 'Singapore', 'Netherlands', 'Italy', 'Spain', 'Mexico', 'South Korea'];

interface ReportProp {
  id: number; title: string; slug: string; industry_slug: string; price?: number;
}

export default function SampleRequestForm({ report }: { report: ReportProp }) {
  const [name, setName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [country, setCountry] = useState('India');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleClick = async () => {
    if (!name.trim()) { alert('Please enter your full name'); return; }
    if (!email.trim()) { alert('Please enter your email'); return; }
    if (!phone.trim()) { alert('Please enter your phone number'); return; }
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(), email: email.trim(), phone: phone.trim(),
          company: company.trim() || jobTitle.trim() || 'N/A',
          message: `[FREE SAMPLE REQUEST]\nReport: ${report.title}\nJob Title: ${jobTitle}\nCompany: ${company}\nCountry: ${country}\n\n${message}`,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        setName(''); setJobTitle(''); setEmail(''); setPhone(''); setCompany('');
      } else {
        setStatus('error');
        setErrorMsg(data.message || 'Server error. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Cannot connect to server. Make sure backend is running on port 5000.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>›</span>
          <Link href={`/industries/${report.industry_slug}`} className="hover:text-blue-600 capitalize">
            {report.industry_slug?.replace(/-/g, ' ')}
          </Link>
          <span>›</span>
          <span className="text-gray-800 font-medium">Request Free Sample</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* FORM COLUMN */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-2" style={{ color: '#1a3c6e' }}>Request Free Sample</h1>
            <p className="text-gray-500 text-base mb-8">Get a free sample of this market research report to evaluate its content and quality.</p>

            <div className="border border-blue-100 rounded-xl p-5 mb-8 bg-blue-50">
              <p className="text-xs text-blue-500 font-semibold uppercase tracking-wider mb-2">Sample Request for:</p>
              <p className="text-sm font-bold leading-relaxed" style={{ color: '#1a3c6e' }}>{report.title}</p>
              <div className="mt-3 flex items-center gap-2 text-xs text-blue-600 bg-blue-100 rounded-lg px-3 py-2 w-fit">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                You&apos;re requesting a free sample of this report.
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Your Full Name" value={name} onChange={(e) => setName(e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-800 outline-none focus:border-blue-500 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Job Title</label>
                  <input type="text" placeholder="Your Job Title" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-800 outline-none focus:border-blue-500 transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Business Email <span className="text-red-500">*</span></label>
                  <input type="email" placeholder="you@email.com" value={email} onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-800 outline-none focus:border-blue-500 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                  <input type="tel" placeholder="+91 00000 00000" value={phone} onChange={(e) => setPhone(e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-800 outline-none focus:border-blue-500 transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                <input type="text" placeholder="Your Company Name" value={company} onChange={(e) => setCompany(e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-800 outline-none focus:border-blue-500 transition-all" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Select Country</label>
                <select value={country} onChange={(e) => setCountry(e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-800 outline-none focus:border-blue-500 transition-all bg-white">
                  {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message <span className="text-gray-400 font-normal">(Optional)</span></label>
                <textarea rows={5} value={message} onChange={(e) => setMessage(e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-800 outline-none focus:border-blue-500 transition-all resize-none" />
              </div>

              {status === 'success' && (
                <div className="flex items-start gap-3 bg-green-50 border-2 border-green-200 rounded-xl px-5 py-4">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-green-800 font-semibold text-sm">Sample Request sent successfully!</p>
                    <p className="text-green-600 text-xs mt-0.5">Our team will get back to you within 24 hours. Data saved to MySQL ✓</p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-start gap-3 bg-red-50 border-2 border-red-200 rounded-xl px-5 py-4">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-red-700 font-semibold text-sm">Error</p>
                    <p className="text-red-500 text-xs mt-0.5">{errorMsg}</p>
                  </div>
                </div>
              )}

              <button type="button" onClick={handleClick} disabled={status === 'loading'}
                className="w-full py-4 rounded-xl text-base font-bold text-white transition-all hover:opacity-90 disabled:opacity-60 flex items-center justify-center gap-3"
                style={{ background: 'linear-gradient(135deg, #1a3c6e, #2563eb)', boxShadow: '0 4px 20px rgba(37,99,235,0.3)' }}>
                {status === 'loading' ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Request Sample
                  </>
                )}
              </button>

              <p className="text-center text-xs text-gray-400">🔒 Your information is 100% secure and will never be shared.</p>
            </div>

            {/* MAP + CONTACT */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <div className="bg-green-600 text-white text-xs font-bold px-4 py-2">
                    📍 India Office - Pune
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2655888563425!2d73.91171!3d18.56794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3a7b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sViman%20Nagar%2C%20Pune%2C%20Maharashtra%20411014!5e0!3m2!1sen!2sin!4v1680000000000"
                    width="100%"
                    height="180"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <div className="bg-green-600 text-white text-xs font-bold px-4 py-2">
                    📍 Ireland Office - Dublin
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.0!2d-6.2489!3d53.3975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e80a5b3b3b3%3A0x1234567890abcdef!2sSantry%2C%20Dublin%2C%20Ireland!5e0!3m2!1sen!2sie!4v1680000000001"
                    width="100%"
                    height="180"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <div className="rounded-xl p-6 text-white" style={{ background: '#2563eb' }}>
                <h3 className="text-lg font-bold mb-4">Contact Details</h3>
                <p className="font-bold text-xs mb-3 text-blue-200 uppercase tracking-wider">Our Offices</p>
                <div className="mb-4">
                  <p className="font-semibold text-sm mb-1">India Office</p>
                  <p className="text-blue-100 text-xs leading-relaxed">
                    Udchalo House Arena Building Plot no 10,<br />
                    Sakore Nagar, Viman Nagar,<br />
                    Pune, Maharashtra 411014
                  </p>
                </div>
                <div className="mb-5">
                  <p className="font-semibold text-sm mb-1">Ireland Office</p>
                  <p className="text-blue-100 text-xs leading-relaxed">
                    78 Temple Lawns Northwood Santry<br />
                    EIRCODE D09R527, Dublin 9, Ireland
                  </p>
                </div>
                <p className="font-bold text-xs mb-3 text-blue-200 uppercase tracking-wider">Contact Information</p>
                <div className="space-y-2">
                  <a href="tel:+442030499458" className="flex items-center gap-2 text-xs text-blue-100 hover:text-white">
                    📞 <span className="underline">+44 20 3049 9458 (UK)</span>
                  </a>
                  <a href="tel:+12028882153" className="flex items-center gap-2 text-xs text-blue-100 hover:text-white">
                    📞 <span className="underline">+1 (202) 888-2153 (US)</span>
                  </a>
                  <a href="mailto:sales@trendvaultresearch.com" className="flex items-center gap-2 text-xs text-blue-100 hover:text-white">
                    ✉️ <span className="underline">sales@trendvaultresearch.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">
            {[
              { name: 'Maria Wilson', role: 'Head Of Sales', email: 'sales@trendvaultresearch.com', phone: '+44 20 3049 9458 (UK)' },
              { name: 'Prat M.', role: 'Head Of Sales', email: 'sales@trendvaultresearch.com', phone: '+1(202) 888-2153 (US)' },
            ].map((p) => (
              <div key={p.name} className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm">
                <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3 bg-gray-100">
                  <Image src="https://www.trendvaultresearch.com/_next/image?url=%2FImages%2Fperson-avatar.png&w=256&q=75"
                    alt={p.name} width={64} height={64} className="object-cover" unoptimized />
                </div>
                <p className="font-bold text-sm" style={{ color: '#1a3c6e' }}>{p.name}</p>
                <p className="text-xs text-gray-400 mb-3">{p.role}</p>
                <p className="text-xs text-gray-500">{p.email}</p>
                <p className="text-xs text-gray-500 mt-1">{p.phone}</p>
              </div>
            ))}

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-base mb-5" style={{ color: '#1a3c6e' }}>Our Licensing Options</h3>
              {[
                { title: 'Corporate User License', icon: '🏢', features: ['Shared among all employees, can print.', 'Includes Excel for BI integration.', 'Free customizations included.', 'Dedicated analyst support.'] },
                { title: 'Multi User License', icon: '👥', features: ['PDF via email.', '1–10 employees access.'] },
                { title: 'Single User License', icon: '👤', features: ['One user only.', 'No printing or sharing.'] },
              ].map((opt) => (
                <div key={opt.title} className="mb-5 last:mb-0 pb-5 last:pb-0 border-b last:border-0 border-gray-100">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">{opt.icon}</span>
                    <p className="font-bold text-sm" style={{ color: '#1a3c6e' }}>{opt.title}</p>
                  </div>
                  <ul className="space-y-2">
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
  );
}
