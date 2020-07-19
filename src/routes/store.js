import { Router } from 'express';
import * as StoreController from '../controllers/StoreController';
import ProductRouter from './product';

const router = Router({ mergeParams: true });

// router.post('', StoreController.createStore);
router.get('', StoreController.indexStoresByMarket);
router.get('/:storeId', StoreController.findStore);
// router.put('/:storeId', StoreController.updateStore);
// router.delete('/:storeId', StoreController.deleteStore);

router.use('/:storeId/products', ProductRouter);

export default router
