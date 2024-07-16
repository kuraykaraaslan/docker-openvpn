import express , { Request, Response, NextFunction } from 'express';
import GenericResponse from '../responses/GenericResponse';

const router = express.Router();


router.get('/', function (req: Request, res: Response, next: NextFunction) {
  const EXPRESS_APP_NAME = process.env.EXPRESS_APP_NAME || 'Express';
  const EXPRESS_APP_VERSION = process.env.EXPRESS_APP_VERSION || '1.0.0';
  const response = new GenericResponse(200, {
    appName: EXPRESS_APP_NAME,
    appVersion: EXPRESS_APP_VERSION,
    message: EXPRESS_APP_NAME + ' is running!'
  });
  
  res.send(response);
});


module.exports = router;


export default router;