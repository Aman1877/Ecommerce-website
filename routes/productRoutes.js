import express from "express";
import {
  createProductController,
  getProductController,
  getSingleProductController,
  productPhotoController,
  deleteProductController,
  updateProductController,
  productFiltersController,
  productCountController,
  productListController,
  searchProductController,
  realtedProductController,
  productCategoryController,
  braintreeTokenController,
  brainTreePaymentController,
} from "../controllers/productController.js";
import { requireSignIn, isAdmin } from "../middlewares/authMiddlerware.js";
import formidable from "express-formidable";

const router = express.Router();

// Routes

// Create Product
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

// Update product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

// Get products
router.get("/get-product", getProductController);

// Single product
router.get("/get-product/:slug", getSingleProductController);

// Get photo
router.get("/product-photo/:pid", productPhotoController);

// Delete product
router.delete("/delete-product/:pid", deleteProductController);

// Filter product
router.post("/product-filters", productFiltersController);

// Product count
router.get("/product-count", productCountController);

// Product per page
router.get("/product-list/:page", productListController);

// Search product
router.get("/search/:keyword", searchProductController);

// Similar product
router.get("/related-product/:pid/:cid", realtedProductController);

// Category wise product
router.get("/product-category/:slug", productCategoryController);

// Payments routes
// Token
router.get("/braintree/token", braintreeTokenController);

// Payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router;
