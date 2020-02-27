import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './mongoose/user/user.module';
import { GamesModule } from './mongoose/game/games.module';
import { ChatGateway } from './chat/chat.gateway';

@Module({
  imports: [UserModule, GamesModule],
  controllers: [AppController],
  providers: [AppService, ChatGateway],
})
export class AppModule {}
