import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb://yolanpibrac:Lasvegasparano1@ds217548.mlab.com:17548/heroku_wwwcrrdp',
      ),
  },
];
