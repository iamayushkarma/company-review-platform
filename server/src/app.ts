import express from "express";
import cors from "cors";
import errorHandler from "./middleware/error.middleware";

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

app.use(errorHandler);
export default app;
