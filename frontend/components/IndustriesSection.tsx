import Link from 'next/link';

const industries = [
    { name: 'Healthcare', slug: 'healthcare', icon: '🏥' },
    { name: 'Chemicals & Materials', slug: 'chemicals-and-materials', icon: '⚗️' },
    { name: 'Information & Technology', slug: 'information-and-technology', icon: '💻' },
    { name: 'Machinery & Equipment', slug: 'machinery-and-equipment', icon: '⚙️' },
    { name: 'Automotive & Transportation', slug: 'automotive-and-transportation', icon: '🚗' },
    { name: 'Food & Beverages', slug: 'food-and-beverages', icon: '🍔' },
    { name: 'Agriculture', slug: 'agriculture', icon: '🌾' },
    { name: 'Consumer Goods', slug: 'consumer-goods', icon: '🛍️' },
    { name: 'Semiconductor & Electronics', slug: 'semiconductor-and-electronics', icon: '🔌' },
    { name: 'Packaging', slug: 'packaging', icon: '📦' },
    { name: 'Consumer Goods and Services', slug: 'consumer-goods-and-services', icon: '🏪' },
    { name: 'Financial Services & Investment Intelligence', slug: 'financial-services-and-investment-intelligence', icon: '💰' },
    { name: 'Logistics', slug: 'logistics', icon: '🚚' },
    { name: 'Manufacturing Products & Services', slug: 'manufacturing-products-and-services', icon: '🏭' },
    { name: 'Real Estate & Construction', slug: 'real-estate-and-construction', icon: '🏗️' },
    { name: 'Technology, Media & Telecom', slug: 'technology-media-and-telecom', icon: '📡' },
    { name: 'Services', slug: 'services', icon: '🤝' },
    { name: 'Animal Nutrition & Wellness', slug: 'animal-nutrition-and-wellness', icon: '🐾' },
    { name: 'Home & Property Improvement', slug: 'home-and-property-improvement', icon: '🏠' },
    { name: 'Hospitality & Tourism', slug: 'hospitality-and-tourism', icon: '✈️' },
];

export default function IndustriesSection() {
    return (
        <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-8 sm:mb-12">
                    <span className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-2 block">Coverage</span>
                    <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: '#1e3a5f' }}>Industries We Cover</h2>
                    <p className="text-gray-500 mt-3 text-sm max-w-xl mx-auto px-2">
                        Deep-dive research across 200+ sectors to help you stay ahead of the competition.
                    </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                    {industries.map((ind) => (
                        <Link
                            key={ind.slug}
                            href={`/industries/${ind.slug}`}
                            className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 hover:shadow-md transition-all group text-center"
                        >
                            <span className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform">{ind.icon}</span>
                            <span className="text-xs font-medium text-gray-600 group-hover:text-blue-700 leading-tight">{ind.name}</span>
                        </Link>
                    ))}
                </div>
                <div className="text-center mt-6 sm:mt-8">
                    <Link
                        href="/industries"
                        className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
                        style={{ background: '#1e3a5f' }}
                    >
                        View All Industries
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
