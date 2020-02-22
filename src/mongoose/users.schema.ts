import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  title: String,
  description: String,
  body: String,
  author: String,
});
