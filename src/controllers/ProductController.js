import { Product } from '../models/Product';
import { Market } from '../models/Market';
import { Store } from '../models/Store';

const transform = (product) => ({
  _id: product._id,
  type: product.type,
  name: product.name,
  price: product.price,
  image: product.image,
  description: product.description,
});

const transforms = (products) => products.map(transform);

export const createProduct = async (req, res) => {
  const product = new Product(req.body);
  const response = await product.save();
  res.json({
    data: transform(response),
  });
};
//여기 문제 있어요..
export const findProductByMarket = async (req, res) => {
  const market = await Market.findById(req.params.marketId).exec();
  const stores = await Store.find({ whatMarket: market }).exec();
  const data = await Product.find({ whatMarket: { $in: stores } }).exec();
  res.json({
    data: transforms(data),
  })
};

export const updateProduct = async (req, res) => {
  
  await Product.updateOne({
      _id: req.params.productId
    },
    req.body,
    (err, result) => {
      if (err) return res.json(err);
      return res.json({
        updateSuccess: true,
        result
      });
    }
  );
};

export const deleteProduct = async (req, res) => {
  await Product.deleteOne({
    _id: req.params.productId
  }, (err) => {
    if (err) return res.json(err);
    return res.json({
      deleteSuccess: true
    });
  });
};

export const findProductByStore = async (req, res) => {
  await Product.find({
    whatStore: req.params.storeId
  }, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
};
