import { Store } from '../models/Store';

const transform = (store) => ({
  _id: store._id,
  name: store.name,
  image: store.image,
  description: store.description,
  tel: store.tel,
  isRunning: store.isRunning,
})

const transforms = (stores) => stores.map(transform);

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

export const indexStoresByMarket = async (req, res) => {
  const data = await Store.find({ market: req.params.marketId }).exec();
  console.log(data, req.params.marketId);
  res.json({
    data: transforms(data),
  });
};

export const findStore = async (req, res) => {
  const data = await Store.find({ market: marketId }).exec();
  res.json({
    data: transforms(data),
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
