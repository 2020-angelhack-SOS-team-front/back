const { Store } = require("../models/Store.js");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

export const createStore = async (req, res) => {
  const store = await new Store(req.body);
  store.save((err, storeInfo) => {
    if (err) return res.json({ success: false, err });
    return res.json({ success: true, storeInfo });
  });
};

export const findStore = async (req, res) => {
  await Store.find({ location: req.body.location }, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
};

export const updateStore = async (req, res) => {
  await Store.updateOne({ _id: req.params.id }, req.body).exec();
  res.json(result);
};

export const deleteStore = async (req, res) => {
  const result = await Store.deleteOne({ _id: req.params.id }).exec();
  res.json(result);
};
