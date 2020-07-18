import { Router } from 'express';
import * as MarketController from '../controllers/MarketController';
import StoreRouter from './store';

const router = Router();

router.get('', MarketController.indexMarkets)
router.post('', MarketController.createMarket)
router.get('/:id', MarketController.findMarket)
router.put('/:id', MarketController.updateMarket)
router.delete('/:id', MarketController.deleteMarket)

router.use('/stores', StoreRouter)

export default router
