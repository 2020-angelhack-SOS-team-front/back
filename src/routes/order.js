import { Router } from 'express';
import * as OrderController from '../controllers/OrderController';

const router = Router({
  mergeParams: true
});

router.post('', OrderController.createOrder)
router.get('', OrderController.indexOrders)
router.get('/:orderId', OrderController.findOrder)

export default router
