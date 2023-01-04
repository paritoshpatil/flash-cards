import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Deck from "./models/Deck";

const PORT = 5000;

const app = express();
mongoose.set("strictQuery", false);
app.use(express.json());

// Endpoints

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.post("/decks", async (req: Request, res: Response) => {
  console.log(req.body);
  const newDeck = new Deck({
    title: req.body.title,
  });
  const createdDeck = await newDeck.save();
  res.send(createdDeck);
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
