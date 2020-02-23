import * as mongoose from 'mongoose';

export const GameSchema = new mongoose.Schema({
  id: String,
  player1: String,
  player2: String,
  vectors1: Array,
  vectors2: Array,
  dimensions: Number,
  player1ToPlay: Boolean,
  finish: Boolean,
  winner1: Boolean,
});
