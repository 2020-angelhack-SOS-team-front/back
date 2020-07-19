import { Product } from '../models/Product';
import { Store } from '../models/Store';
import { transform as transformStore } from './StoreController';

const transform = (product) => ({
  _id: product._id,
  type: product.type,
  name: product.name,
  price: product.price,
  image: product.image,
  description: product.description,
  store: product.store,
});

const transforms = (products) => products.map(transform);

export const createProduct = async (req, res) => {
  const product = new Product(req.body);
  const response = await product.save();
  res.json({
    data: transform(response),
  });
};

export const findProductByMarket = async (req, res) => {
  const stores = await Store.find({ market: req.params.marketId }).exec();
  const data = await Product.find({
    store: {
      $in: stores.map(store => store._id)
    },
    type: {
      $regex: new RegExp(req.query.type || '.*')
    }
  }).populate('store').exec();
  console.log(data);
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
  const products = await Product.find({ store: req.params.storeId, type: { $regex: new RegExp(req.query.type || '.*') } }).exec();
  res.json({
    data: transforms(products),
  });
};
