import { Router } from 'express';
import * as MarketController from '../controllers/MarketController';
import * as ProductController from '../controllers/ProductController';
import StoreRouter from './store';

const router = Router({ mergeParams: true });

router.get('', MarketController.indexMarkets)
router.post('', MarketController.createMarket)
router.get('/:id', MarketController.findMarket)
router.put('/:id', MarketController.updateMarket)
router.delete('/:id', MarketController.deleteMarket)
router.get("/products", ProductController.findProductByMarket);

router.use('/:id/stores', StoreRouter)

export default router
