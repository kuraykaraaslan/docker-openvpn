import express , { Request, Response, NextFunction } from 'express';
const router = express.Router();

import IpTablesService from '../services/IpTablesService';
import GenericResponse from '../responses/GenericResponse';

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const iptables = await IpTablesService.getIPTableRules();
  const response = new GenericResponse(200, iptables);
  res.send(response);
});

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id);
  const iptable = await IpTablesService.getIPTableRule(id);
  const response = new GenericResponse(200, iptable);
  res.send(response);
});

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const iptable = await IpTablesService.createIPTableRule(req.body);
  const response = new GenericResponse(200, iptable);
  res.send(response);
});

router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id);
  const iptable = await IpTablesService.updateIPTableRule(id, req.body);
  const response = new GenericResponse(200, iptable);
  res.send(response);
});

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id);
  const result = await IpTablesService.deleteIPTableRule(id);
  const response = new GenericResponse(200, result);
  res.send(response);
});

router.delete('/', async (req: Request, res: Response, next: NextFunction) => {
  const result = await IpTablesService.deleteAllIPTableRules();
  const response = new GenericResponse(200, result);
  res.send(response);
});

router.get('/target/:target', async (req: Request, res: Response, next: NextFunction) => {
  const target = req.params.target;
  const iptables = await IpTablesService.getIPTableRulesByTarget(target);
  const response = new GenericResponse(200, iptables);
  res.send(response);
});


export default router;