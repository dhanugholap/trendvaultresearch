'use client';
import Link from 'next/link';
import { useState } from 'react';

interface Industry {
    id: number;
    name: string;
    slug: string;
}

const industryIcons: Record<string, string> = {
    healthcare: '🏥', 'chemicals-and-materials': '⚗️',
    'information-and-technology': '💻', 'machinery-and-equipment': '⚙️',
    'automotive-and-transportation': '🚗', 'food-and-beverages': '🍔',
    agriculture: '🌾', 'consumer-goods': '🛍️',
    'semiconductor-and-electronics': '🔌', packaging: '📦',
};

export default function SidebarIndustries({ industries, currentSlug }: { industries: Industry[]; currentSlug: string }) {
    const [expanded, setExpanded] = useState<string | null>(currentSlug);

    return (
        <div>
            {industries.map((ind) => {
                const isActive = ind.slug === currentSlug;
                return (
                    <div key={ind.slug}>
                        <Link
                            href={`/industries/${ind.slug}`}
                            className="flex items-center justify-between px-4 py-2.5 text-sm transition-colors border-b border-gray-50"
                            style={{
                                background: isActive ? '#eff6ff' : 'transparent',
                                color: isActive ? '#1e40af' : '#4b5563',
                            }}
                            onClick={() => setExpanded(isActive ? null : ind.slug)}
                        >
                            <div className="flex items-center gap-2">
                                <span className="text-base">{industryIcons[ind.slug] || '📊'}</span>
                                <span className={`text-xs ${isActive ? 'font-bold' : 'font-medium'}`}>{ind.name}</span>
                            </div>
                            {isActive && (
                                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            )}
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}
