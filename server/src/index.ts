import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Deck from "./models/Deck";

const PORT = 5000;

mongoose.set("strictQuery", false);

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

mongoose
  .connect(
    "mongodb+srv://flashcarduser:30a4H3uTEnJLy4tx@cluster0.qyezg2a.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log(`listening on port ${PORT} ...`);
    app.listen(PORT);
  })
  .catch((e) => {
    console.log("ERROR: " + e);
  });
