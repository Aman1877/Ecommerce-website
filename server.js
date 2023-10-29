import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productsRoutes from "./routes/productRoutes.js";

import cors from "cors";

// Configure env (its in our root folder thats why we dont need to define path)
dotenv.config();

// Database Config
connectDB();

// Rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productsRoutes);

// Rest API
app.get("/", (req, res) => {
  res.send({
    message: "Welcome",
  });
});

// PORT
const PORT = process.env.PORT || 8080;

// App listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
