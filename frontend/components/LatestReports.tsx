import Link from 'next/link';
import { API_URL } from '@/lib/api';

interface Report {
    id: number;
    title: string;
    slug: string;
    industry_slug: string;
    is_new: boolean;
}

async function getLatestReports(): Promise<Report[]> {
    try {
        const res = await fetch(`${API_URL}/api/reports/latest`, { cache: 'no-store' });
        const data = await res.json();
        return data.data || [];
    } catch {
        return [
            { id: 1, title: 'Vaccine - 2025-2033 Trends: Unveiling Growth Opportunities and Competitor Dynamics', slug: 'vaccine', industry_slug: 'healthcare', is_new: true },
            { id: 2, title: 'Global Automotive Seat Sliders Market - 2025-2033 Trends', slug: 'global-automotive-seat-sliders-market', industry_slug: 'automotive-and-transportation', is_new: true },
            { id: 3, title: 'Global Smart Grid Sensors Market Dynamics: Drivers and Barriers to Growth 2025-2033', slug: 'global-smart-grid-sensors-market', industry_slug: 'semiconductor-and-electronics', is_new: true },
        ];
    }
}

export default async function LatestReports() {
    const reports = await getLatestReports();

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-end justify-between mb-8 sm:mb-10">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-2 block">Fresh Research</span>
                        <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: '#1e3a5f' }}>Latest Reports</h2>
                    </div>
                    <Link
                        href="/industries"
                        className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold hover:underline"
                        style={{ color: '#1e3a5f' }}
                    >
                        Browse All
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                    {reports.map((r) => (
                        <div
                            key={r.id}
                            className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-blue-100 flex flex-col"
                        >
                            <div className="flex items-start justify-between mb-3 sm:mb-4">
                                <span
                                    className="text-xs font-semibold px-2.5 py-1 rounded-full capitalize"
                                    style={{ background: '#eff6ff', color: '#1e40af' }}
                                >
                                    {r.industry_slug?.replace(/-/g, ' ') || 'Research'}
                                </span>
                                {r.is_new && (
                                    <span
                                        className="text-xs font-bold px-2.5 py-1 rounded-full text-white flex-shrink-0 ml-2"
                                        style={{ background: '#e85d26' }}
                                    >
                                        NEW
                                    </span>
                                )}
                            </div>
                            <h3 className="font-semibold text-sm leading-snug flex-1 mb-4 sm:mb-5" style={{ color: '#1e3a5f' }}>
                                {r.title}
                            </h3>
                            <Link
                                href={`/report/${r.slug}`}
                                className="inline-flex items-center gap-1 text-sm font-semibold transition-colors"
                                style={{ color: '#e85d26' }}
                            >
                                View Report
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-6 sm:hidden">
                    <Link
                        href="/industries"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white"
                        style={{ background: '#1e3a5f' }}
                    >
                        Browse All Reports
                    </Link>
                </div>
            </div>
        </section>
    );
}
