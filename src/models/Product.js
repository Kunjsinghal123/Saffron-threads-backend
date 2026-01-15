const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },

    category: {
      type: String,
      enum: ["Men", "Women", "Kids", "Home Decor"],
      required: true,
    },

    subCategory: { type: String, required: true },
    style: { type: String },
    fabric: { type: String },
    length: { type: String },
    work: { type: String },
    thread: { type: String },

    dyeable: { type: Boolean, default: false },
    sizeRange: { type: String },

    stock: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },

    images: { type: [String], default: [] },
    tags: { type: [String], default: [] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
