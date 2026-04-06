import Link from 'next/link';
import SampleForm from '@/components/SampleForm';
import { API_URL } from '@/lib/api';

interface Report {
    id: number;
    title: string;
    slug: string;
    industry_slug: string;
    description: string;
    pages: number;
    base_year: number;
    forecast_year: number;
    price: number;
    is_new: boolean;
}

async function getReport(slug: string): Promise<Report | null> {
    try {
        const res = await fetch(`${API_URL}/api/reports/${slug}`, { cache: 'no-store' });
        const data = await res.json();
        return data.data || null;
    } catch { return null; }
}

export default async function ReportPage({
    params,
    searchParams,
}: {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ type?: string }>;
}) {
    const { slug } = await params;
    const { type } = await searchParams;
    const report = await getReport(slug);
    const isSamplePage = type === 'sample';

    if (!report) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="text-6xl mb-4">📭</div>
                    <h1 className="text-2xl font-bold text-gray-600 mb-2">Report not found</h1>
                    <Link href="/industries" className="text-sm font-semibold" style={{ color: '#e85d26' }}>
                        Browse All Reports →
                    </Link>
                </div>
            </div>
        );
    }

    const industryName = report.industry_slug?.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

    if (isSamplePage) {
        return <SampleForm report={report} industryName={industryName} />;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #1e40af 100%)' }} className="py-10">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex items-center gap-2 text-blue-300 text-sm mb-4">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span>›</span>
                        <Link href="/industries" className="hover:text-white">Industries</Link>
                        <span>›</span>
                        {report.industry_slug && (
                            <>
                                <Link href={`/industries/${report.industry_slug}`} className="hover:text-white capitalize">
                                    {industryName}
                                </Link>
                                <span>›</span>
                            </>
                        )}
                        <span className="text-white truncate max-w-xs">{report.title.slice(0, 50)}...</span>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold text-white leading-snug max-w-4xl">{report.title}</h1>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    { label: 'Pages', value: report.pages || 'N/A' },
                                    { label: 'Base Year', value: report.base_year || 'N/A' },
                                    { label: 'Forecast Year', value: report.forecast_year || 'N/A' },
                                    { label: 'Industry', value: industryName || 'N/A' },
                                ].map((s) => (
                                    <div key={s.label} className="text-center p-3 rounded-xl bg-gray-50">
                                        <p className="text-xs text-gray-400 mb-1">{s.label}</p>
                                        <p className="font-bold text-sm capitalize" style={{ color: '#1e3a5f' }}>{s.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <h2 className="font-bold text-lg mb-4" style={{ color: '#1e3a5f' }}>Report Overview</h2>
                            <p className="text-gray-600 text-sm leading-relaxed">{report.description}</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <h2 className="font-bold text-lg mb-4" style={{ color: '#1e3a5f' }}>What's Included</h2>
                            <ul className="space-y-3">
                                {['Executive Summary & Key Findings', 'Market Size, Share & Forecast (2025–2033)', 'Competitive Landscape & Company Profiles', 'Market Segmentation by Type, Application & Region', 'Growth Drivers, Restraints & Opportunities', 'Recent Developments & Strategic Recommendations'].map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                                        <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-5">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
                            <div className="text-center mb-5">
                                <p className="text-xs text-gray-400 mb-1">Report Price</p>
                                <p className="text-4xl font-bold" style={{ color: '#1e3a5f' }}>${report.price?.toLocaleString()}</p>
                                <p className="text-xs text-gray-400 mt-1">Single User License</p>
                            </div>
                            <div className="space-y-3">
                                <button className="w-full py-3 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-all" style={{ background: 'linear-gradient(135deg, #e85d26, #f97316)' }}>
                                    Buy Now
                                </button>
                                <Link
                                    href={`/report/${report.slug}?type=sample`}
                                    className="w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center border-2 transition-all hover:bg-blue-50"
                                    style={{ borderColor: '#1e3a5f', color: '#1e3a5f' }}
                                >
                                    Request Free Sample
                                </Link>
                                <Link href="/contact" className="w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all">
                                    Ask a Question
                                </Link>
                            </div>
                            <div className="mt-5 pt-5 border-t border-gray-100 space-y-2">
                                {['Secure Payment', 'Instant Download', 'Free Customization'].map((f) => (
                                    <div key={f} className="flex items-center gap-2 text-xs text-gray-500">
                                        <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {f}
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
