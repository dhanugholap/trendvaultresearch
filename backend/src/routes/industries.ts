import { Router, Request, Response } from 'express';

const router = Router();

const staticIndustries = [
    { id: 1, name: 'Healthcare', slug: 'healthcare', description: 'Healthcare sector reports and analysis.', icon: '🏥' },
    { id: 2, name: 'Chemicals & Materials', slug: 'chemicals-and-materials', description: 'Chemicals and materials industry insights.', icon: '⚗️' },
    { id: 3, name: 'Information & Technology', slug: 'information-and-technology', description: 'IT sector market research.', icon: '💻' },
    { id: 4, name: 'Machinery & Equipment', slug: 'machinery-and-equipment', description: 'Machinery and equipment industry reports.', icon: '⚙️' },
    { id: 5, name: 'Automotive & Transportation', slug: 'automotive-and-transportation', description: 'Automotive market intelligence.', icon: '🚗' },
    { id: 6, name: 'Food & Beverages', slug: 'food-and-beverages', description: 'Food and beverage sector analysis.', icon: '🍔' },
    { id: 7, name: 'Agriculture', slug: 'agriculture', description: 'Agriculture industry research.', icon: '🌾' },
    { id: 8, name: 'Consumer Goods', slug: 'consumer-goods', description: 'Consumer goods market reports.', icon: '🛍️' },
    { id: 9, name: 'Semiconductor & Electronics', slug: 'semiconductor-and-electronics', description: 'Semiconductor market insights.', icon: '🔌' },
    { id: 10, name: 'Packaging', slug: 'packaging', description: 'Packaging industry analysis.', icon: '📦' },
];

async function getFromDB(query: string, params: unknown[] = []) {
    const pool = require('../db').default;
    const [rows] = await pool.query(query, params);
    return rows;
}

router.get('/', async (_req: Request, res: Response) => {
    try {
        const rows = await getFromDB('SELECT * FROM industries ORDER BY name ASC');
        res.json({ success: true, data: rows });
    } catch {
        res.json({ success: true, data: staticIndustries, source: 'static' });
    }
});

router.get('/:slug', async (req: Request, res: Response) => {
    try {
        const rows: unknown[] = await getFromDB('SELECT * FROM industries WHERE slug = ?', [req.params.slug]);
        if (!Array.isArray(rows) || rows.length === 0) {
            const found = staticIndustries.find(i => i.slug === req.params.slug);
            if (found) return res.json({ success: true, data: found, source: 'static' });
            return res.status(404).json({ success: false, message: 'Not found' });
        }
        res.json({ success: true, data: (rows as unknown[])[0] });
    } catch {
        const found = staticIndustries.find(i => i.slug === req.params.slug);
        if (found) return res.json({ success: true, data: found, source: 'static' });
        res.status(404).json({ success: false, message: 'Not found' });
    }
});

export default router;
