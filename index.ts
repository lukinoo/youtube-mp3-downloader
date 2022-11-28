import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

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
      title: "something went wrong",
      message: "Please Enter youtube video Id...",
    });
  } else {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.API_KEY as string,
        "x-rapidapi-host": process.env.API_HOST as string,
      },
    };

    axios
      .get(`https://youtube-mp36.p.rapidapi.com/dl?id=${mp3Id}`, options)
      .then((resp) => {
        if (resp.data.status === "ok") {
          return res.render("index", {
            succsess: true,
            song_title: resp.data.title,
            song_url: resp.data.link,
            title: resp.data.title,
          });
        } else {
          return res.render("index", {
            succsess: false,
            message: resp.data.msg,
            title: resp.data.msg,
          });
        }
      });
  }
});

app.listen(5500);
