const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },

    category: {
      type: String,
      enum: ["Men", "Women", "Kids", "Home Decor"],
      required: true,
    },

    subCategory: { type: String, required: true },
    style: String,
    fabric: String,
    length: String,
    work: String,
    thread: String,

    dyeable: { type: Boolean, default: false },
    sizeRange: String,

    price: { type: Number, required: true },
    stock: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },

    images: { type: [String], default: [] },
    tags: { type: [String], default: [] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
