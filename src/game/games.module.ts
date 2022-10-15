import { Module } from '@nestjs/common';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';
import { DatabaseModule } from '../mongoose/database.module';
import { Connection } from 'mongoose';
import { GameSchema } from './games.schema';

@Module({
  imports: [DatabaseModule],
  controllers: [GamesController],
  providers: [GamesService, {
    provide: 'GAME_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Game', GameSchema),
    inject: ['DATABASE_CONNECTION'],
  }],
})
export class GamesModule {}
