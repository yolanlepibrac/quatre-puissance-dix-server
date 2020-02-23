import { Connection } from 'mongoose';
import { GameSchema } from './games.schema';

export const GamesProviders = [
  {
    provide: 'GAME_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Game', GameSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
