import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.set("view engine", "ejs");

// scss middleware
app.use(express.static("public"));

app.get("/", (_req: Request, res: Response): void => {
  res.render("index.ejs", {
    title: "MP3 downloader",
  });
});

app.listen(5500);
