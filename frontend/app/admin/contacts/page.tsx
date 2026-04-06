async function getContacts() {
    try {
        const res = await fetch('http://localhost:5000/api/contact', { cache: 'no-store' });
        const data = await res.json();
        return data.data || [];
    } catch {
        return [];
    }
}

interface Contact {
    id: number;
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
    created_at: string;
}

export default async function AdminContactsPage() {
    const contacts: Contact[] = await getContacts();

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-2xl font-bold" style={{ color: '#1a3c6e' }}>
                            📋 Submitted Sample Requests
                        </h1>
                        <p className="text-gray-500 text-sm mt-1">
                            Total: <span className="font-bold text-blue-600">{contacts.length}</span> requests saved in MySQL
                        </p>
                    </div>
                    <div className="px-4 py-2 rounded-lg text-sm font-semibold text-white" style={{ background: '#1a3c6e' }}>
                        MySQL → contacts table
                    </div>
                </div>

                {contacts.length === 0 ? (
                    <div className="bg-white rounded-2xl p-16 text-center border border-gray-100">
                        <div className="text-5xl mb-3">📭</div>
                        <p className="text-gray-500 font-medium">No submissions yet</p>
                        <p className="text-gray-400 text-sm mt-1">Submit a Free Sample form to see data here</p>
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <table className="w-full text-sm">
                            <thead>
                                <tr style={{ background: '#1a3c6e' }}>
                                    {['ID', 'Name', 'Email', 'Phone', 'Company', 'Message Preview', 'Submitted At'].map((h) => (
                                        <th key={h} className="text-left px-4 py-3 text-white text-xs font-semibold uppercase tracking-wider">
                                            {h}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((c, i) => (
                                    <tr
                                        key={c.id}
                                        className="border-t border-gray-100 hover:bg-blue-50 transition-colors"
                                        style={{ background: i % 2 === 0 ? '#fff' : '#f9fafb' }}
                                    >
                                        <td className="px-4 py-3 font-bold text-blue-600">#{c.id}</td>
                                        <td className="px-4 py-3 font-semibold text-gray-800">{c.name}</td>
                                        <td className="px-4 py-3 text-gray-600">{c.email}</td>
                                        <td className="px-4 py-3 text-gray-600">{c.phone}</td>
                                        <td className="px-4 py-3 text-gray-600">{c.company}</td>
                                        <td className="px-4 py-3 text-gray-500 max-w-xs">
                                            <span className="line-clamp-2 text-xs">{c.message?.slice(0, 80)}...</span>
                                        </td>
                                        <td className="px-4 py-3 text-gray-400 text-xs whitespace-nowrap">
                                            {new Date(c.created_at).toLocaleString('en-IN')}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* MySQL info box */}
                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <p className="text-sm font-semibold text-blue-800 mb-2">📊 MySQL Database Info:</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-blue-700">
                        <div><span className="font-bold">Database:</span> market_research</div>
                        <div><span className="font-bold">Table:</span> contacts</div>
                        <div><span className="font-bold">Total Records:</span> {contacts.length}</div>
                    </div>
                    <p className="text-xs text-blue-600 mt-2 font-mono">
                        SELECT * FROM market_research.contacts ORDER BY created_at DESC;
                    </p>
                </div>

            </div>
        </div>
    );
}
