import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (_req: Request, res: Response): void => {
  res.render("index.ejs", {
    title: "MP3 downloader",
  });
});

app.post("/convert-mp3", async (req: Request, res: Response) => {
  const { mp3Id }: { mp3Id: string } = req.body;

  if (mp3Id === undefined || mp3Id.trim() === "" || mp3Id === null) {
    return res.render("index", {
      succsess: false,
      message: "Please Enter youtube video Url...",
    });
  }

  console.log(mp3Id);
});

app.listen(5500);
