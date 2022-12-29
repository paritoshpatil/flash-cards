import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema;

const DeckSchema = new Schema({
  title: String,
});

const DeckModel = new mongoose.Model("Deck", DeckSchema);

export default DeckModel;
