import Link from 'next/link';

const industries = [
    { name: 'Healthcare', slug: 'healthcare', icon: '🏥', desc: 'Pharma, biotech, medical devices & diagnostics.' },
    { name: 'Chemicals & Materials', slug: 'chemicals-and-materials', icon: '⚗️', desc: 'Specialty chemicals, polymers & advanced materials.' },
    { name: 'Information & Technology', slug: 'information-and-technology', icon: '💻', desc: 'Software, cloud, AI & digital transformation.' },
    { name: 'Machinery & Equipment', slug: 'machinery-and-equipment', icon: '⚙️', desc: 'Industrial machinery, tools & automation.' },
    { name: 'Automotive & Transportation', slug: 'automotive-and-transportation', icon: '🚗', desc: 'Vehicles, EV, logistics & mobility solutions.' },
    { name: 'Food & Beverages', slug: 'food-and-beverages', icon: '🍔', desc: 'Food processing, beverages & nutrition.' },
    { name: 'Agriculture', slug: 'agriculture', icon: '🌾', desc: 'Crop science, agri-tech & farm equipment.' },
    { name: 'Consumer Goods', slug: 'consumer-goods', icon: '🛍️', desc: 'FMCG, retail & consumer electronics.' },
    { name: 'Semiconductor & Electronics', slug: 'semiconductor-and-electronics', icon: '🔌', desc: 'Chips, PCBs, sensors & electronic components.' },
    { name: 'Packaging', slug: 'packaging', icon: '📦', desc: 'Flexible, rigid & sustainable packaging.' },
    { name: 'Consumer Goods and Services', slug: 'consumer-goods-and-services', icon: '🏪', desc: 'Retail services & consumer lifestyle.' },
    { name: 'Financial Services', slug: 'financial-services-and-investment-intelligence', icon: '💰', desc: 'Banking, insurance & investment intelligence.' },
    { name: 'Logistics', slug: 'logistics', icon: '🚚', desc: 'Supply chain, warehousing & freight.' },
    { name: 'Manufacturing', slug: 'manufacturing-products-and-services', icon: '🏭', desc: 'Industrial manufacturing & production.' },
    { name: 'Real Estate & Construction', slug: 'real-estate-and-construction', icon: '🏗️', desc: 'Property, construction & infrastructure.' },
    { name: 'Technology, Media & Telecom', slug: 'technology-media-and-telecom', icon: '📡', desc: 'Telecom, media & digital platforms.' },
    { name: 'Services', slug: 'services', icon: '🤝', desc: 'Professional & business services.' },
    { name: 'Animal Nutrition & Wellness', slug: 'animal-nutrition-and-wellness', icon: '🐾', desc: 'Pet food, animal health & veterinary.' },
    { name: 'Home & Property Improvement', slug: 'home-and-property-improvement', icon: '🏠', desc: 'Home renovation, décor & smart home.' },
    { name: 'Hospitality & Tourism', slug: 'hospitality-and-tourism', icon: '✈️', desc: 'Hotels, travel & tourism industry.' },
];

export default function IndustriesPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <div style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #1e40af 100%)' }} className="py-12 sm:py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-3 block">Coverage</span>
                    <h1 className="text-2xl sm:text-4xl font-bold text-white mb-3">Industries We Cover</h1>
                    <p className="text-blue-200 text-sm sm:text-base max-w-xl mx-auto">
                        Deep-dive research across 200+ sectors to help you stay ahead of the competition.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {industries.map((ind) => (
                        <Link
                            key={ind.slug}
                            href={`/industries/${ind.slug}`}
                            className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:border-orange-300 transition-all group"
                        >
                            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform inline-block">{ind.icon}</div>
                            <h3 className="font-bold text-sm mb-1.5 group-hover:text-orange-500 transition-colors" style={{ color: '#1e3a5f' }}>
                                {ind.name}
                            </h3>
                            <p className="text-gray-400 text-xs leading-relaxed">{ind.desc}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
