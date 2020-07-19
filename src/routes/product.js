import { Router } from 'express';
import * as ProductController from '../controllers/ProductController';

const router = Router({ mergeParams: true });

// router.post('', ProductController.createProduct);
router.get('', ProductController.findProductByStore);
// router.put('/:productId', ProductController.updateProduct);
// router.delete('/:productId', ProductController.deleteProduct);

export default router
