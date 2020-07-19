const express = require("express");
const mongoose = require("mongoose");
import * as storeController from "../controllers/storeController";
const app = express();

app.post("/", storeController.createStore);
