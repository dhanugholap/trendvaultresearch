import Link from 'next/link';

interface Report {
    id: number;
    title: string;
    slug: string;
    industry_slug: string;
    is_new: boolean;
}

async function getAllReports(): Promise<Report[]> {
    try {
        const res = await fetch('http://localhost:5000/api/reports?limit=50', { cache: 'no-store' });
        const data = await res.json();
        return data.data || [];
    } catch {
        return [];
    }
}

export default async function AllReportsPage() {
    const reports = await getAllReports();

    return (
        <div className="py-12">
            <div className="container">
                <h1 className="text-3xl font-bold mb-2" style={{ color: '#1a3c6e' }}>All Reports</h1>
                <p className="text-gray-500 mb-8">Browse all available market research reports.</p>

                {reports.length === 0 ? (
                    <div className="text-center py-16 text-gray-400">
                        <p>No reports available yet.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {reports.map((r) => (
                            <div key={r.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow relative">
                                {r.is_new && (
                                    <span style={{ background: '#e85d26' }} className="absolute top-4 right-4 text-white text-xs px-2 py-1 rounded font-semibold">
                                        New
                                    </span>
                                )}
                                <h3 className="font-semibold text-sm leading-snug mb-4 pr-10" style={{ color: '#1a3c6e' }}>{r.title}</h3>
                                <Link href={`/report/${r.slug}`} style={{ color: '#e85d26' }} className="text-sm font-semibold hover:underline">
                                    View Report →
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
