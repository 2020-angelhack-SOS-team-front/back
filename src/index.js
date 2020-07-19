const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const { Store } = require("./models/storeModel");
const { Product } = require("./models/productModel");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose
  .connect(
    "mongodb+srv://marketDB:marketDB@cluster0.zmds9.mongodb.net/marketDB?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

////////STORE CONTROLLERS////////////////STORE CONTROLLERS////////
const createStore = async (req, res) => {
  const store = new Store(req.body);
  store.save((err, storeInfo) => {
    if (err) return res.json({ success: false, err });
    return res.json({ success: true, storeInfo });
  });
};
//여기 whatMarket 쪽 잘 모르겠음
const findStore = async (req, res) => {
  const marketId = req.params.marketId;
  await Store.find({ whatMarket: marketId }, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
};

const updateStore = async (req, res) => {
  await Store.updateOne(
    { _id: req.params.storeId },
    req.body,
    (err, result) => {
      if (err) return res.json(err);
      return res.json({ updateSuccess: true, result });
    }
  );
};

const deleteStore = async (req, res) => {
  await Store.deleteOne({ _id: req.params.storeId }, (err) => {
    if (err) return res.json(err);
    return res.json({ deleteSuccess: true });
  });
};
////////STORE CONTROLLERS////////////////STORE CONTROLLERS////////

////////STORE ROUER////////////////STORE ROUER////////
app.post("/markets/:marketId/stores/create", createStore);
app.get("/markets/:marketId/stores", findStore);
app.put("/stores/:storeId/update", updateStore);
app.delete("/stores/:storeId/delete", deleteStore);
////////STORE ROUER////////////////STORE ROUER////////

////////PRODUCT CONTROLLERS////////////////PRODUCT CONTROLLERS////////

const createProduct = async (req, res) => {
  const product = new Store(req.body);
  product.save((err, productInfo) => {
    if (err) return res.json({ success: false, err });
    return res.json({ success: true, productInfo });
  });
};
//여기 문제 있어요..
const findProductByMarket = async (req, res) => {
  await Product.find({ whatMarket: req.params.marketId }, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
};

const updateProduct = async (req, res) => {
  await Product.updateOne(
    { _id: req.params.productId },
    req.body,
    (err, result) => {
      if (err) return res.json(err);
      return res.json({ updateSuccess: true, result });
    }
  );
};

const deleteProduct = async (req, res) => {
  await Product.deleteOne({ _id: req.params.productId }, (err) => {
    if (err) return res.json(err);
    return res.json({ deleteSuccess: true });
  });
};

const findProductByStore = async (req, res) => {
  await Product.find({ whatStore: req.params.storeId }, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
};
////////PRODUCT CONTROLLERS////////////////PRODUCT CONTROLLERS////////

////////PRODUCT ROUER////////////////PRODUCT ROUER////////
app.post("/stores/:storeId/products/create", createProduct);
app.get("/markets/:marketId/products", findProductByMarket);
app.put("/products/:productId/update", updateProduct);
app.delete("/products/:productId/delete", deleteProduct);
app.get("stores/:storeId/products", findProductByStore);
////////PRODUCT ROUER////////////////PRODUCT ROUER////////

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
