import { Router } from 'express';
import * as MarketController from '../controllers/MarketController';
import * as ProductController from '../controllers/ProductController';
import StoreRouter from './store';

const router = Router({ mergeParams: true });

router.get('', MarketController.indexMarkets)
// router.post('', MarketController.createMarket)
router.get('/:marketId', MarketController.findMarket)
// router.put('/:marketId', MarketController.updateMarket)
// router.delete('/:marketId', MarketController.deleteMarket)
router.get("/:marketId/products", ProductController.findProductByMarket);

router.use('/:marketId/stores', StoreRouter)

export default router
