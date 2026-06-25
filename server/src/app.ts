import express from "express";
import cors from "cors";
import errorHandler from "./middleware/error.middleware";

import companyRoutes from "./routes/company.routes";

const app = express();

app.use(cors());
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
// error middleware
app.use(errorHandler);
export default app;
