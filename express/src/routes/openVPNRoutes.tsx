import express , { Request, Response, NextFunction } from 'express';
const router = express.Router();

import OpenVPNService from '../services/OpenVPNService';
import GenericResponse from '../responses/GenericResponse';

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const openvpnService = new OpenVPNService();
  const openvpn = await openvpnService.statusOpenVPNServer();
  const response = new GenericResponse(200, openvpn);
  res.send(response);
});


router.post('/start', async (req: Request, res: Response, next: NextFunction) => {
  const openvpnService = new OpenVPNService();
  await openvpnService.startOpenVPNServer();
  const response = new GenericResponse(200, 'OpenVPN server started');
  res.send(response);
});


export default router;