import { Module } from '@nestjs/common';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';
import { GamesProviders } from './games.providers';
import { DatabaseModule } from '../database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [GamesController],
  providers: [GamesService, ...GamesProviders],
})
export class GamesModule {}
