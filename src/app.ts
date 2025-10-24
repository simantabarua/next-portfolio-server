import express, { Request, Response } from "express";
import cors from "cors";
import { globalErrorHandler } from "./middlewares/globalErrorHandler";
import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.get("/", (req: Request, res: Response) => {
  res.status(200).send("server is running online");
});

app.use("/api/v1", router);

app.use(globalErrorHandler);

export default app;
