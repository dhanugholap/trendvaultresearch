import Link from 'next/link';
import { API_URL } from '@/lib/api';

interface Report {
    id: number;
    title: string;
    slug: string;
    industry_slug: string;
    is_new: boolean;
    pages: number;
    base_year: number;
    forecast_year: number;
    price: number;
    description: string;
}

interface Industry {
    id: number;
    name: string;
    slug: string;
    description: string;
}

async function getReports(slug: string): Promise<Report[]> {
    try {
        const res = await fetch(`${API_URL}/api/reports?industry=${slug}&limit=50`, { cache: 'no-store' });
        const data = await res.json();
        return data.data || [];
    } catch { return []; }
}

async function getAllIndustries(): Promise<Industry[]> {
    try {
        const res = await fetch(`${API_URL}/api/industries`, { cache: 'no-store' });
        const data = await res.json();
        return data.data || [];
    } catch { return []; }
}

const icons: Record<string, string> = {
    healthcare: '🏥', 'chemicals-and-materials': '⚗️',
    'information-and-technology': '💻', 'machinery-and-equipment': '⚙️',
    'automotive-and-transportation': '🚗', 'food-and-beverages': '🍔',
    agriculture: '🌾', 'consumer-goods': '🛍️',
    'semiconductor-and-electronics': '🔌', packaging: '📦',
};

const regions = ['Global', 'Asia', 'Africa', 'Europe', 'Latin America', 'Middle East', 'North America'];

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const [reports, industries] = await Promise.all([getReports(slug), getAllIndustries()]);
    const current = industries.find(i => i.slug === slug);
    const name = current?.name || slug.replace(/-/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase());

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-8">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                    <Link href="/" className="hover:text-blue-600">Home</Link>
                    <span>›</span>
                    <Link href="/industries" className="hover:text-blue-600">Industries</Link>
                    <span>›</span>
                    <span className="text-gray-700 font-medium">{name}</span>
                </div>

                <div className="flex gap-6">

                    {/* Left sidebar */}
                    <aside className="hidden lg:block w-52 flex-shrink-0">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
                            <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
                                <p className="font-bold text-sm text-gray-700">Industries</p>
                                <p className="text-xs text-gray-400">Explore by category</p>
                            </div>
                            <Link href="/industries" className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-500 hover:bg-gray-50 border-b border-gray-50">
                                🌐 All Industries
                            </Link>
                            {industries.map((ind) => {
                                const isActive = ind.slug === slug;
                                return (
                                    <Link
                                        key={ind.slug}
                                        href={`/industries/${ind.slug}`}
                                        className="flex items-center justify-between px-4 py-2.5 text-xs border-b border-gray-50 transition-colors"
                                        style={{
                                            background: isActive ? '#eff6ff' : 'transparent',
                                            color: isActive ? '#1e40af' : '#6b7280',
                                            fontWeight: isActive ? 700 : 500,
                                        }}
                                    >
                                        <span className="flex items-center gap-2">
                                            <span>{icons[ind.slug] || '📊'}</span>
                                            {ind.name}
                                        </span>
                                        {isActive && <span className="text-blue-500">›</span>}
                                    </Link>
                                );
                            })}
                        </div>
                    </aside>

                    {/* Main content */}
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-5">
                            <h1 className="text-2xl font-bold" style={{ color: '#1e3a5f' }}>{name} Reports</h1>
                            <span className="text-sm text-gray-400">{reports.length} reports found</span>
                        </div>

                        {reports.length === 0 ? (
                            <div className="bg-white rounded-xl p-16 text-center border border-gray-100">
                                <div className="text-5xl mb-3">📭</div>
                                <p className="text-gray-500 font-medium mb-1">No reports available yet</p>
                                <Link href="/contact" className="text-sm font-semibold" style={{ color: '#e85d26' }}>
                                    Request a Custom Report →
                                </Link>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {reports.map((r) => (
                                    <div
                                        key={r.id}
                                        className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-5 flex gap-4 items-start"
                                    >
                                        {/* Thumbnail */}
                                        <div
                                            className="w-20 h-24 rounded-lg flex-shrink-0 flex flex-col items-center justify-center text-white text-center p-2"
                                            style={{ background: 'linear-gradient(135deg, #1e3a5f, #2563eb)' }}
                                        >
                                            <span className="text-2xl">{icons[slug] || '📊'}</span>
                                            <span className="text-xs mt-1 font-bold opacity-80">TVR</span>
                                        </div>

                                        {/* Info */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-1.5">
                                                <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: '#f0fdf4', color: '#16a34a' }}>
                                                    🌐 Global
                                                </span>
                                                {r.is_new && (
                                                    <span className="text-xs px-2 py-0.5 rounded-full font-bold text-white" style={{ background: '#e85d26' }}>
                                                        NEW
                                                    </span>
                                                )}
                                            </div>
                                            <h3 className="font-semibold text-sm leading-snug mb-2" style={{ color: '#1e3a5f' }}>
                                                {r.title}
                                            </h3>
                                            <p className="text-xs text-gray-400 line-clamp-2 mb-3">{r.description}</p>
                                            <div className="flex items-center gap-4 text-xs text-gray-400">
                                                {r.pages > 0 && <span>📄 {r.pages} pages</span>}
                                                {r.base_year && <span>📅 {r.base_year}–{r.forecast_year}</span>}
                                                {r.price > 0 && <span className="font-semibold" style={{ color: '#1e3a5f' }}>${r.price?.toLocaleString()}</span>}
                                            </div>
                                        </div>

                                        {/* Free Sample button */}
                                        <div className="flex-shrink-0 self-center">
                                            <Link
                                                href={`/sample/${r.slug}`}
                                                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white transition-all hover:opacity-90 hover:shadow-md whitespace-nowrap"
                                                style={{ background: 'linear-gradient(135deg, #e85d26, #f97316)' }}
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                </svg>
                                                Free Sample
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right filter */}
                    <aside className="hidden xl:block w-40 flex-shrink-0">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sticky top-24">
                            <h3 className="font-bold text-sm text-gray-700 mb-3">Filter Reports</h3>
                            <p className="text-xs text-gray-400 mb-2 font-semibold uppercase tracking-wider">By Region</p>
                            <div className="space-y-2">
                                {regions.map((r) => (
                                    <label key={r} className="flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="region" className="w-3.5 h-3.5 accent-blue-600" />
                                        <span className="text-xs text-gray-600 hover:text-blue-600">{r}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </aside>

                </div>
            </div>
        </div>
    );
}
