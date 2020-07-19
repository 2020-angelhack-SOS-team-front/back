import { Market } from "../models/Market";
import axios from "axios";

const transform = (market) => {
  return {
    _id: market._id,
    name: market.name,
    address: market.address,
  }
};
const transforms = (markets) => markets.map(transform);

export const indexMarkets = async (req, res) => {
  res.json({
    data: transforms(await Market.find()),
  });
};

export const findMarket = async (req, res) => {
  const result = await Market.findById(req.params.id);
  res.json({
    data: transform(result),
  });
};

export const findNewMarket = async (req, res, next) => {
  try {
    const response = await axios.get(`${process.env.KAKAO_API_BASE_URL}/v2/local/search/address.json?`, {
      params: req.query,
      headers: {
        Authorization: `KakaoAK ${process.env.KAKAO_REST_API_KEY}`
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error(error)
    next(error);
  }
}

export const createMarket = async (req, res) => {
  const result = await Market.create(req.body);
  res.json({
    data: transform(result),
  });
}

export const updateMarket = async (req, res) => {
  await Market.updateOne({ _id: req.params.id }, req.body).exec();
  const result = await Market.findById(req.params.id).exec();
  res.json({
    data: transform(result),
  });
}

export const deleteMarket = async (req, res) => {
  const result = await Market.deleteOne({ _id: req.params.id }).exec();
  res.json({
    data: result,
  });
};
