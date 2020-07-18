import { Router } from 'express';
import market from './market';

const router = Router();

router.use('/markets', market)

export default router
