import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './mongoose/user/users.module';
import { GamesModule } from './mongoose/game/games.module';

@Module({
  imports: [
    /* MongooseModule.forRoot(
      'mongodb://yolanpibrac:Lasvegasparano1@ds217548.mlab.com:17548/heroku_wwwcrrdp',
    ),
    */
    UsersModule,
    GamesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
