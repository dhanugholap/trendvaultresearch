'use client';
import Link from 'next/link';
import { useState } from 'react';

const industries = [
    { label: 'Healthcare', href: '/industries/healthcare', icon: '🏥' },
    { label: 'Chemicals & Materials', href: '/industries/chemicals-and-materials', icon: '⚗️' },
    { label: 'Information & Technology', href: '/industries/information-and-technology', icon: '💻' },
    { label: 'Machinery & Equipment', href: '/industries/machinery-and-equipment', icon: '⚙️' },
    { label: 'Automotive & Transportation', href: '/industries/automotive-and-transportation', icon: '🚗' },
    { label: 'Food & Beverages', href: '/industries/food-and-beverages', icon: '🍔' },
    { label: 'Agriculture', href: '/industries/agriculture', icon: '🌾' },
    { label: 'Consumer Goods', href: '/industries/consumer-goods', icon: '🛍️' },
    { label: 'Semiconductor & Electronics', href: '/industries/semiconductor-and-electronics', icon: '🔌' },
    { label: 'Packaging', href: '/industries/packaging', icon: '📦' },
    { label: 'Consumer Goods and Services', href: '/industries/consumer-goods-and-services', icon: '🏪' },
    { label: 'Financial Services & Investment', href: '/industries/financial-services-and-investment-intelligence', icon: '💰' },
    { label: 'Logistics', href: '/industries/logistics', icon: '🚚' },
    { label: 'Manufacturing Products & Services', href: '/industries/manufacturing-products-and-services', icon: '🏭' },
    { label: 'Real Estate & Construction', href: '/industries/real-estate-and-construction', icon: '🏗️' },
    { label: 'Technology, Media & Telecom', href: '/industries/technology-media-and-telecom', icon: '📡' },
    { label: 'Services', href: '/industries/services', icon: '🤝' },
    { label: 'Animal Nutrition & Wellness', href: '/industries/animal-nutrition-and-wellness', icon: '🐾' },
    { label: 'Home & Property Improvement', href: '/industries/home-and-property-improvement', icon: '🏠' },
    { label: 'Hospitality & Tourism', href: '/industries/hospitality-and-tourism', icon: '✈️' },
];

const half = Math.ceil(industries.length / 2);
const leftCol = industries.slice(0, half);
const rightCol = industries.slice(half);

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [reportsOpen, setReportsOpen] = useState(false);
    const [mobileReportsOpen, setMobileReportsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50">
            {/* Top contact bar — desktop only */}
            <div style={{ background: '#1e3a5f' }} className="hidden md:block">
                <div className="max-w-7xl mx-auto px-6 py-2 flex justify-end items-center gap-6 lg:gap-8">
                    <a href="tel:+442030499458" className="flex items-center gap-1.5 text-gray-300 text-xs hover:text-white transition-colors">
                        <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        +44 20 3049 9458
                    </a>
                    <a href="tel:+12028882153" className="flex items-center gap-1.5 text-gray-300 text-xs hover:text-white transition-colors">
                        <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        +1(202) 888-2153
                    </a>
                    <a href="mailto:sales@trendvaultresearch.com" className="flex items-center gap-1.5 text-gray-300 text-xs hover:text-white transition-colors">
                        <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        sales@trendvaultresearch.com
                    </a>
                </div>
            </div>

            {/* Main navbar */}
            <nav className="bg-white shadow-sm border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0" onClick={() => setMobileOpen(false)}>
                        <div
                            className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center text-white font-bold text-xs"
                            style={{ background: 'linear-gradient(135deg, #1e3a5f, #2563eb)' }}
                        >
                            TVR
                        </div>
                        <div className="leading-tight">
                            <span className="font-bold text-base sm:text-lg" style={{ color: '#e85d26' }}>Trendvault</span>
                            <span className="font-bold text-base sm:text-lg ml-1" style={{ color: '#1e3a5f' }}>Research</span>
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-0.5 lg:gap-1">
                        <Link href="/" className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-all">
                            Home
                        </Link>

                        {/* Reports dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setReportsOpen(true)}
                            onMouseLeave={() => setReportsOpen(false)}
                        >
                            <button className="flex items-center gap-1 px-3 lg:px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-all">
                                Reports
                                <svg className={`w-4 h-4 transition-transform ${reportsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {reportsOpen && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white rounded-xl shadow-2xl border border-gray-100 p-4 z-50" style={{ width: '580px' }}>
                                    <div className="grid grid-cols-2 gap-0.5">
                                        {leftCol.map((ind) => (
                                            <Link key={ind.href} href={ind.href}
                                                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-all group">
                                                <span className="text-sm w-5 text-center flex-shrink-0">{ind.icon}</span>
                                                <span className="group-hover:font-medium transition-all text-xs">{ind.label}</span>
                                            </Link>
                                        ))}
                                        {rightCol.map((ind) => (
                                            <Link key={ind.href} href={ind.href}
                                                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-all group">
                                                <span className="text-sm w-5 text-center flex-shrink-0">{ind.icon}</span>
                                                <span className="group-hover:font-medium transition-all text-xs">{ind.label}</span>
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="mt-3 pt-3 border-t border-gray-100 text-center">
                                        <Link href="/industries" className="text-xs font-semibold text-blue-600 hover:text-blue-800 hover:underline">
                                            View All Industries →
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link href="/about" className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-all">
                            About Us
                        </Link>
                        <Link href="/services" className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-all">
                            Services
                        </Link>
                        <Link href="/industries" className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-all">
                            Industries
                        </Link>
                        <Link href="/contact" className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-all">
                            Contact
                        </Link>

                        <Link
                            href="/contact"
                            className="ml-2 px-4 lg:px-5 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90 whitespace-nowrap"
                            style={{ background: 'linear-gradient(135deg, #e85d26, #f97316)' }}
                        >
                            Get a Quote
                        </Link>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile menu */}
                {mobileOpen && (
                    <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-1 max-h-[80vh] overflow-y-auto">
                        {/* Contact info on mobile */}
                        <div className="px-3 py-2 mb-2 rounded-lg bg-gray-50 space-y-1">
                            <a href="tel:+442030499458" className="flex items-center gap-2 text-xs text-gray-500">📞 +44 20 3049 9458</a>
                            <a href="tel:+12028882153" className="flex items-center gap-2 text-xs text-gray-500">📞 +1(202) 888-2153</a>
                            <a href="mailto:sales@trendvaultresearch.com" className="flex items-center gap-2 text-xs text-gray-500 break-all">✉️ sales@trendvaultresearch.com</a>
                        </div>

                        <Link href="/" className="block px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all" onClick={() => setMobileOpen(false)}>Home</Link>

                        {/* Reports accordion */}
                        <div>
                            <button
                                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all"
                                onClick={() => setMobileReportsOpen(!mobileReportsOpen)}
                            >
                                Reports
                                <svg className={`w-4 h-4 transition-transform ${mobileReportsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {mobileReportsOpen && (
                                <div className="ml-3 mt-1 space-y-0.5 border-l-2 border-blue-100 pl-3">
                                    {industries.map((ind) => (
                                        <Link key={ind.href} href={ind.href}
                                            className="flex items-center gap-2 px-2 py-2 rounded-lg text-xs text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-all"
                                            onClick={() => setMobileOpen(false)}>
                                            <span>{ind.icon}</span>
                                            <span>{ind.label}</span>
                                        </Link>
                                    ))}
                                    <Link href="/industries" className="flex items-center gap-2 px-2 py-2 text-xs font-semibold" style={{ color: '#e85d26' }} onClick={() => setMobileOpen(false)}>
                                        View All Industries →
                                    </Link>
                                </div>
                            )}
                        </div>

                        {[
                            { label: 'About Us', href: '/about' },
                            { label: 'Services', href: '/services' },
                            { label: 'Industries', href: '/industries' },
                            { label: 'Contact', href: '/contact' },
                        ].map((l) => (
                            <Link key={l.href} href={l.href}
                                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all"
                                onClick={() => setMobileOpen(false)}>
                                {l.label}
                            </Link>
                        ))}

                        <div className="pt-2">
                            <Link href="/contact"
                                className="block w-full text-center px-5 py-3 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
                                style={{ background: 'linear-gradient(135deg, #e85d26, #f97316)' }}
                                onClick={() => setMobileOpen(false)}>
                                Get a Quote
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
