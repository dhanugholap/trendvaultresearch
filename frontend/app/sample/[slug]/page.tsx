import SampleRequestForm from '@/components/SampleRequestForm';
import { API_URL } from '@/lib/api';

async function getReport(slug: string) {
    try {
        const res = await fetch(`${API_URL}/api/reports/${slug}`, { cache: 'no-store' });
        const data = await res.json();
        return data.data || null;
    } catch {
        return null;
    }
}

export default async function SamplePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const report = await getReport(slug);

    if (!report) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500">Report not found.</p>
            </div>
        );
    }

    return <SampleRequestForm report={report} />;
}
