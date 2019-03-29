const express = require("express");
const app = express();
const port = 9090;
const getProducts = require("./getProducts");
const getProduct = require("./getProduct");

app.listen(port, () => {
  console.log("dont pingle my fingle: ${port}");
});

// endpoint consists of a method path and handler

app.get("/api/products", getProducts);

app.get("/api/product/:id", getProduct);
