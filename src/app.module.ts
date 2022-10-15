import { Module } from '@nestjs/common';
import { UserModule } from './mongoose/user/user.module';
import { GamesModule } from './mongoose/game/games.module';
import { ChatGateway } from './chat/chat.gateway';

@Module({
  imports: [UserModule, GamesModule] ,
  providers: [ ChatGateway],
})
export class AppModule {}
