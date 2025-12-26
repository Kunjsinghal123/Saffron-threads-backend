const express = require("express");
const router = express.Router();

const {
  createProduct,
  getProducts,
  getWomenProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.post("/", createProduct);
router.get("/", getProducts);

// ✅ FRONTEND
router.get("/women", getWomenProducts);

router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
