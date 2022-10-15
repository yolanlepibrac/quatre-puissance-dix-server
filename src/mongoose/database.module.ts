import { Module } from '@nestjs/common';
import * as mongoose from 'mongoose';


@Module({
  providers:  [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: (): Promise<typeof mongoose> =>
        mongoose.connect(process.env.DATABASE_PATH),
    },
  ],
  exports:  [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: (): Promise<typeof mongoose> =>
        mongoose.connect(process.env.DATABASE_PATH),
    },
  ],
})
export class DatabaseModule {}
