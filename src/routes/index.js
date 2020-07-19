import { Router } from 'express';
import MarketRouter from './market';
import OrderRouter from './order';

const router = Router();

router.use('/markets', MarketRouter);
router.use('/orders', OrderRouter);

export default router
