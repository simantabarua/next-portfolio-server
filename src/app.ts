import express, { Request, Response } from "express";
import cors from "cors";
import { globalErrorHandler } from "./middlewares/globalErrorHandler";
import { router } from "./routes";

const app = express();

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://ridenest-dev.web.app"]
    : ["http://localhost:3000"];

app.use(express.json());

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);
app.get("/", (req: Request, res: Response) => {
  res.status(200).send("server is running online");
});

app.use("/api/v1", router);

app.use(globalErrorHandler);

export default app;
