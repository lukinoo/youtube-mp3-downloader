import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  console.log(req);
  res.send("hello, world");
});

app.listen(5500);
