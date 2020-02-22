import { Document } from 'mongoose';

export interface User extends Document {
  readonly title: string;
  readonly description: string;
  readonly body: string;
  readonly author: string;
}
