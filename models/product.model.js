const { default: mongoose } = require("mongoose");

const product = mongoose.model(
  "products",
  mongoose.Schema(
    {
      productName: String,
      productDescription: String,
      ProductPrice: Number,
      ProductImege: String,
    },
    {
      timestamps: true,
    }
  )
);

module.exports = {product}