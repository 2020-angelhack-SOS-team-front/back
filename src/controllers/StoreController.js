import { Store } from '../models/Store';

export const createStore = async (req, res) => {
  const store = new Store(req.body);
  store.save((err, storeInfo) => {
    if (err) return res.json({
      success: false,
      err
    });
    return res.json({
      success: true,
      storeInfo
    });
  });
};

export const findStore = async (req, res) => {
  const marketId = req.params.marketId;
  await Store.find({
    whatMarket: marketId
  }, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
};

export const updateStore = async (req, res) => {
  await Store.updateOne({
      _id: req.params.storeId
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

export const deleteStore = async (req, res) => {
  await Store.deleteOne({
    _id: req.params.storeId
  }, (err) => {
    if (err) return res.json(err);
    return res.json({
      deleteSuccess: true
    });
  });
};
