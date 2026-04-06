import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRouter from './routes/contact';
import reportsRouter from './routes/reports';
import industriesRouter from './routes/industries';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: '*' }));
app.use(express.json());

app.use('/api/contact', contactRouter);
app.use('/api/reports', reportsRouter);
app.use('/api/industries', industriesRouter);

app.get('/api/health', (_req, res) => res.json({ status: 'ok', message: 'Server running' }));

app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
