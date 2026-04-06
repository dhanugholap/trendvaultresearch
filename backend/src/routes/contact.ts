import { Router, Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();

// Try to use MySQL, fallback to JSON file
async function saveContact(data: {
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
}) {
    // Try MySQL first
    try {
        const pool = require('../db').default;
        await pool.query(
            'INSERT INTO contacts (name, email, phone, company, message) VALUES (?, ?, ?, ?, ?)',
            [data.name, data.email, data.phone || null, data.company || null, data.message]
        );
        console.log('✅ Saved to MySQL');
        return 'mysql';
    } catch (mysqlErr) {
        console.log('⚠️  MySQL not available, saving to file instead...');
        // Fallback: save to JSON file
        const filePath = path.join(__dirname, '../../data/contacts.json');
        const dir = path.dirname(filePath);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

        let existing: object[] = [];
        if (fs.existsSync(filePath)) {
            try { existing = JSON.parse(fs.readFileSync(filePath, 'utf-8')); } catch { existing = []; }
        }

        const record = { ...data, id: Date.now(), created_at: new Date().toISOString() };
        existing.push(record);
        fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));
        console.log('✅ Saved to data/contacts.json');
        return 'file';
    }
}

router.post('/', async (req: Request, res: Response) => {
    try {
        const { name, email, phone, company, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: 'Name, email and message are required',
            });
        }

        const savedTo = await saveContact({ name, email, phone, company, message });

        res.json({
            success: true,
            message: 'Request submitted successfully',
            savedTo,
        });
    } catch (err) {
        console.error('Contact route error:', err);
        res.status(500).json({ success: false, message: 'Server error: ' + String(err) });
    }
});

// GET all contacts (for admin view)
router.get('/', async (_req: Request, res: Response) => {
    try {
        const pool = require('../db').default;
        const [rows] = await pool.query('SELECT * FROM contacts ORDER BY created_at DESC');
        res.json({ success: true, data: rows });
    } catch {
        // Read from file
        const filePath = path.join(__dirname, '../../data/contacts.json');
        if (fs.existsSync(filePath)) {
            const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
            res.json({ success: true, data, source: 'file' });
        } else {
            res.json({ success: true, data: [], source: 'empty' });
        }
    }
});

export default router;
