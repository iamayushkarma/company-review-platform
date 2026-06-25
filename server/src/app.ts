import express from "express";
import cors from "cors";
import errorHandler from "./middleware/error.middleware.js";

import companyRoutes from "./routes/company.routes.js";
import reviewRoutes from "./routes/review.routes.js";
const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_, res) => {
  res.json({
    success: true,
    message: "Server Running",
  });
});
// routes
app.use("/api/v1/companies", companyRoutes);
app.use("/api/v1/reviews", reviewRoutes);

// error middleware
app.use(errorHandler);
export default app;
