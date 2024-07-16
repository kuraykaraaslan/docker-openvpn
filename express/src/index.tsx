// Express server
import express , { Request, Response } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

// Routes
import indexRoutes from './routes/indexRoutes';
import iptablesRoutes from './routes/iptablesRoutes';
import openVPNRoutes from './routes/openVPNRoutes';

// Load environment variables
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = 3000;

app.use('/', indexRoutes);
app.use('/iptables', iptablesRoutes);
app.use('/openvpn', openVPNRoutes);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
