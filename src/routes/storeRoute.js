const express = require("express");

import * as StoreController from "../controllers/StoreController";

app.post("/", StoreController.createStore);
