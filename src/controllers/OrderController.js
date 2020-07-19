import { Order } from '../models/Order';
import { Product } from '../models/Product';

const transform = (order) => ({
  _id: order._id,
  name: order.name,
  address: order.address,
  items: order.items,
  amount: order.amount,
});

const transforms = (orders) => orders.map(transform);

export const createOrder = async (req, res, next) => {
  const products = await Product.find({ _id: { $in: req.body.items.map((item) => item.product_id) }}).exec();
  const productsByKey = products.reduce((keyBy, product) => ({ ...keyBy, [product._id]: product }), {});
  const order = new Order({
    name: req.body.name,
    address: req.body.address,
    items: req.body.items.map((item) => ({
      product: item.product_id,
      count: item.count,
    })),
    amount: req.body.items.reduce((sum, item) => sum + productsByKey[item.product_id].price * Number(item.count), 0),
  });
  const data = await order.save();
  
  res.json({
    data: transform(await Order.findById(data._id).populate('items.product').exec()),
  })
};


export const indexOrders = async (req, res) => {
  const data = await Order.find().exec();
  res.json({
    data: transforms(data),
  });
}

export const findOrder = async (req, res) => {
  const order = await Order.findById(req.params.orderId).populate('items.product').exec();
  res.json({
    data: transform(order),
  });
}


