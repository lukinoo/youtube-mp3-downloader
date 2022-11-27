import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.set("view engine", "ejs");

app.get("/", (_req: Request, res: Response): void => {
  res.render("index.ejs", { name: "world" });
});

app.listen(5500);
