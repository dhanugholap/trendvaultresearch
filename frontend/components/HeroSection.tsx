'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const slides = [
    {
        bg: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80',
        title: 'Comprehensive Market Intelligence That Empowers Global Business Decisions',
        subtitle: 'Trendvault Research delivers actionable market insights and industry forecasts across 200+ sectors.',
    },
    {
        bg: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80',
        title: 'Data-Driven Insights',
        subtitle: 'Empowering your business with actionable market intelligence.',
    },
    {
        bg: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1600&q=80',
        title: 'Trusted by Industry Leaders',
        subtitle: 'Join thousands of satisfied clients worldwide.',
    },
];

export default function HeroSection() {
    const [current, setCurrent] = useState(0);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative overflow-hidden" style={{ minHeight: '480px', height: 'clamp(420px, 60vw, 580px)' }}>
            {/* BG slides */}
            {slides.map((s, i) => (
                <div
                    key={i}
                    className="absolute inset-0 transition-opacity duration-1000"
                    style={{
                        opacity: i === current ? 1 : 0,
                        backgroundImage: `url(${s.bg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            ))}

            {/* Dark overlay */}
            <div className="absolute inset-0" style={{ background: 'rgba(15,30,60,0.50)' }} />

            {/* Search bar */}
            <div className="absolute top-4 sm:top-6 left-0 right-0 z-20 flex justify-center px-3 sm:px-6">
                <div className="w-full max-w-2xl flex items-center bg-white rounded-lg shadow-xl overflow-hidden" style={{ height: '46px' }}>
                    <div className="flex items-center pl-3 pr-2 text-gray-400 flex-shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search Reports..."
                        className="flex-1 h-full px-2 text-sm text-gray-700 outline-none bg-transparent min-w-0"
                    />
                    <button
                        className="h-full px-4 sm:px-6 text-xs sm:text-sm font-semibold text-white transition-opacity hover:opacity-90 flex-shrink-0"
                        style={{ background: '#e85d26' }}
                    >
                        Search
                    </button>
                </div>
            </div>

            {/* Slide card */}
            <div className="absolute inset-0 z-10 flex items-center justify-center px-3 sm:px-6 pt-14 sm:pt-16">
                <div
                    className="text-center w-full rounded-2xl px-4 sm:px-8 md:px-10 py-6 sm:py-8 md:py-10 shadow-2xl"
                    style={{
                        maxWidth: '640px',
                        background: 'rgba(255,255,255,0.15)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255,255,255,0.25)',
                    }}
                >
                    <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-white leading-snug mb-3 drop-shadow">
                        {slides[current].title}
                    </h1>
                    <p className="text-gray-200 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-7">
                        {slides[current].subtitle}
                    </p>
                    <Link
                        href="/industries"
                        className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
                        style={{ background: 'linear-gradient(135deg, #1e3a5f, #2563eb)' }}
                    >
                        Explore Our Reports
                    </Link>
                </div>
            </div>

            {/* Prev arrow */}
            <button
                onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
                aria-label="Previous"
                className="absolute left-2 sm:left-4 top-1/2 z-20 flex items-center justify-center rounded-full text-white font-bold transition-all hover:scale-110"
                style={{
                    transform: 'translateY(-50%)',
                    width: '34px', height: '34px',
                    fontSize: '20px',
                    background: 'rgba(255,255,255,0.2)',
                    border: '1.5px solid rgba(255,255,255,0.5)',
                    backdropFilter: 'blur(4px)',
                }}
            >
                ‹
            </button>

            {/* Next arrow */}
            <button
                onClick={() => setCurrent((c) => (c + 1) % slides.length)}
                aria-label="Next"
                className="absolute right-2 sm:right-4 top-1/2 z-20 flex items-center justify-center rounded-full text-white font-bold transition-all hover:scale-110"
                style={{
                    transform: 'translateY(-50%)',
                    width: '34px', height: '34px',
                    fontSize: '20px',
                    background: 'rgba(255,255,255,0.2)',
                    border: '1.5px solid rgba(255,255,255,0.5)',
                    backdropFilter: 'blur(4px)',
                }}
            >
                ›
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 z-20 flex gap-2" style={{ transform: 'translateX(-50%)' }}>
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        aria-label={`Slide ${i + 1}`}
                        className="rounded-full transition-all duration-300"
                        style={{
                            width: i === current ? '24px' : '8px',
                            height: '8px',
                            background: i === current ? '#fff' : 'rgba(255,255,255,0.45)',
                        }}
                    />
                ))}
            </div>
        </section>
    );
}
