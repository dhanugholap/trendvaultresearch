import { Router, Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();

// Static fallback data - 20 healthcare reports
const staticReports = [
    { id: 1, title: 'Vaccine Market - 2025-2033 Trends: Unveiling Growth Opportunities and Competitor Dynamics', slug: 'vaccine-market-2025-2033', industry_slug: 'healthcare', description: 'Comprehensive vaccine market analysis covering growth trends and competitor dynamics from 2025 to 2033.', pages: 180, base_year: 2024, forecast_year: 2033, price: 4500, is_new: true },
    { id: 2, title: 'Global Oncology Drugs Market Size, Share & Forecast 2025-2033', slug: 'global-oncology-drugs-market', industry_slug: 'healthcare', description: 'In-depth analysis of the global oncology drugs market with forecasts through 2033.', pages: 175, base_year: 2024, forecast_year: 2033, price: 4800, is_new: true },
    { id: 3, title: 'Medical Devices Market - Growth, Trends and Forecast 2025-2033', slug: 'medical-devices-market-2025', industry_slug: 'healthcare', description: 'Comprehensive study of the global medical devices market including key drivers and restraints.', pages: 190, base_year: 2024, forecast_year: 2033, price: 5200, is_new: true },
    { id: 4, title: 'Global Telemedicine Market Analysis and Forecast 2025-2033', slug: 'global-telemedicine-market', industry_slug: 'healthcare', description: 'Telemedicine market research covering digital health platforms, growth opportunities and competitive landscape.', pages: 165, base_year: 2024, forecast_year: 2033, price: 4200, is_new: true },
    { id: 5, title: 'Pharmaceutical Drug Delivery Systems Market 2025-2033', slug: 'pharma-drug-delivery-systems', industry_slug: 'healthcare', description: 'Analysis of drug delivery systems including oral, injectable, transdermal and inhalation segments.', pages: 170, base_year: 2024, forecast_year: 2033, price: 4600, is_new: true },
    { id: 6, title: 'Global Biotechnology Market Size and Forecast 2025-2033', slug: 'global-biotechnology-market', industry_slug: 'healthcare', description: 'Biotechnology market covering biopharmaceuticals, genomics, agricultural biotech and industrial biotech.', pages: 185, base_year: 2024, forecast_year: 2033, price: 5000, is_new: true },
    { id: 7, title: 'Mental Health Software Market - Trends and Forecast 2025-2033', slug: 'mental-health-software-market', industry_slug: 'healthcare', description: 'Mental health software market analysis including telepsychiatry, EHR and patient engagement platforms.', pages: 155, base_year: 2024, forecast_year: 2033, price: 3900, is_new: true },
    { id: 8, title: 'Global Hospital Management Software Market 2025-2033', slug: 'hospital-management-software-market', industry_slug: 'healthcare', description: 'Hospital management software market covering clinical, administrative and financial management systems.', pages: 160, base_year: 2024, forecast_year: 2033, price: 4100, is_new: true },
    { id: 9, title: 'Orthopedic Implants Market Size, Share & Forecast 2025-2033', slug: 'orthopedic-implants-market', industry_slug: 'healthcare', description: 'Orthopedic implants market analysis covering joint reconstruction, spinal implants and trauma fixation.', pages: 172, base_year: 2024, forecast_year: 2033, price: 4700, is_new: true },
    { id: 10, title: 'Global Diagnostics Market - Growth Opportunities 2025-2033', slug: 'global-diagnostics-market', industry_slug: 'healthcare', description: 'Diagnostics market research covering in-vitro diagnostics, imaging and point-of-care testing.', pages: 168, base_year: 2024, forecast_year: 2033, price: 4400, is_new: true },
    { id: 11, title: 'Wearable Medical Devices Market Analysis 2025-2033', slug: 'wearable-medical-devices-market', industry_slug: 'healthcare', description: 'Wearable medical devices market covering fitness trackers, smartwatches and remote patient monitoring.', pages: 158, base_year: 2024, forecast_year: 2033, price: 4300, is_new: true },
    { id: 12, title: 'Global Stem Cell Therapy Market Forecast 2025-2033', slug: 'stem-cell-therapy-market', industry_slug: 'healthcare', description: 'Stem cell therapy market analysis covering autologous, allogeneic and xenogeneic therapies.', pages: 162, base_year: 2024, forecast_year: 2033, price: 4900, is_new: true },
    { id: 13, title: 'Healthcare IT Market - Trends, Growth and Forecast 2025-2033', slug: 'healthcare-it-market', industry_slug: 'healthcare', description: 'Healthcare IT market covering EHR, health information exchange, telehealth and cybersecurity.', pages: 178, base_year: 2024, forecast_year: 2033, price: 4650, is_new: true },
    { id: 14, title: 'Global Surgical Robots Market Size and Forecast 2025-2033', slug: 'surgical-robots-market', industry_slug: 'healthcare', description: 'Surgical robots market analysis covering laparoscopic, orthopedic and neurosurgical robotic systems.', pages: 182, base_year: 2024, forecast_year: 2033, price: 5100, is_new: true },
    { id: 15, title: 'Personalized Medicine Market - Growth Analysis 2025-2033', slug: 'personalized-medicine-market', industry_slug: 'healthcare', description: 'Personalized medicine market covering genomics, proteomics, pharmacogenomics and companion diagnostics.', pages: 174, base_year: 2024, forecast_year: 2033, price: 4850, is_new: true },
    { id: 16, title: 'Global Blood Glucose Monitoring Market 2025-2033', slug: 'blood-glucose-monitoring-market', industry_slug: 'healthcare', description: 'Blood glucose monitoring market covering self-monitoring devices, continuous glucose monitors and data management.', pages: 150, base_year: 2024, forecast_year: 2033, price: 3800, is_new: true },
    { id: 17, title: 'Ophthalmology Devices Market Analysis and Forecast 2025-2033', slug: 'ophthalmology-devices-market', industry_slug: 'healthcare', description: 'Ophthalmology devices market covering surgical equipment, diagnostic devices and vision care products.', pages: 163, base_year: 2024, forecast_year: 2033, price: 4250, is_new: true },
    { id: 18, title: 'Global Dental Equipment Market Size and Forecast 2025-2033', slug: 'dental-equipment-market', industry_slug: 'healthcare', description: 'Dental equipment market covering imaging systems, dental chairs, CAD/CAM systems and sterilization equipment.', pages: 156, base_year: 2024, forecast_year: 2033, price: 4050, is_new: true },
    { id: 19, title: 'Rehabilitation Equipment Market - Trends 2025-2033', slug: 'rehabilitation-equipment-market', industry_slug: 'healthcare', description: 'Rehabilitation equipment market covering physical therapy, occupational therapy and assistive technology.', pages: 148, base_year: 2024, forecast_year: 2033, price: 3750, is_new: true },
    { id: 20, title: 'Global Home Healthcare Market Size and Forecast 2025-2033', slug: 'home-healthcare-market', industry_slug: 'healthcare', description: 'Home healthcare market covering home medical equipment, home health services and telehealth solutions.', pages: 169, base_year: 2024, forecast_year: 2033, price: 4350, is_new: true },
];

const staticIndustries = [
    'healthcare', 'chemicals-and-materials', 'information-and-technology',
    'machinery-and-equipment', 'automotive-and-transportation', 'food-and-beverages',
    'agriculture', 'consumer-goods', 'semiconductor-and-electronics', 'packaging',
];

async function getFromDB(query: string, params: unknown[] = []) {
    const pool = require('../db').default;
    const [rows] = await pool.query(query, params);
    return rows;
}

// GET /api/reports?industry=healthcare&limit=50
router.get('/', async (req: Request, res: Response) => {
    const { industry, limit = 50 } = req.query;
    try {
        let query = 'SELECT * FROM reports';
        const params: unknown[] = [];
        if (industry) { query += ' WHERE industry_slug = ?'; params.push(industry); }
        query += ' ORDER BY created_at DESC LIMIT ?';
        params.push(Number(limit));
        const rows = await getFromDB(query, params);
        res.json({ success: true, data: rows });
    } catch {
        // Fallback to static
        let data = staticReports;
        if (industry) data = staticReports.filter(r => r.industry_slug === industry);
        res.json({ success: true, data: data.slice(0, Number(limit)), source: 'static' });
    }
});

// GET /api/reports/latest
router.get('/latest', async (_req: Request, res: Response) => {
    try {
        const rows = await getFromDB('SELECT * FROM reports ORDER BY created_at DESC LIMIT 6');
        res.json({ success: true, data: rows });
    } catch {
        res.json({ success: true, data: staticReports.slice(0, 3), source: 'static' });
    }
});

// GET /api/reports/:slug
router.get('/:slug', async (req: Request, res: Response) => {
    try {
        const rows: unknown[] = await getFromDB('SELECT * FROM reports WHERE slug = ?', [req.params.slug]);
        if (!Array.isArray(rows) || rows.length === 0) {
            const found = staticReports.find(r => r.slug === req.params.slug);
            if (found) return res.json({ success: true, data: found, source: 'static' });
            return res.status(404).json({ success: false, message: 'Report not found' });
        }
        res.json({ success: true, data: (rows as unknown[])[0] });
    } catch {
        const found = staticReports.find(r => r.slug === req.params.slug);
        if (found) return res.json({ success: true, data: found, source: 'static' });
        res.status(404).json({ success: false, message: 'Report not found' });
    }
});

export default router;
