import { Product } from '../models/Product';
import { Market } from '../models/Market';
import { Store } from '../models/Store';

export const createProduct = async (req, res) => {
  const product = new Product(req.body);
  product.save((err, productInfo) => {
    if (err) return res.json({
      success: false,
      err
    });
    return res.json({
      success: true,
      productInfo
    });
  });
};
//여기 문제 있어요..
export const findProductByMarket = async (req, res) => {
  const market = await Market.findById(req.params.marketId).exec();
  const stores = await Store.find({ whatMarket: market }).exec();
  await Product.find({
    whatMarket: { $in: stores},
  }, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
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