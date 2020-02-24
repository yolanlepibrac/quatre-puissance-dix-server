import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './mongoose/user/user.module';
import { GamesModule } from './mongoose/game/games.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    /* MongooseModule.forRoot(
      'mongodb://yolanpibrac:Lasvegasparano1@ds217548.mlab.com:17548/heroku_wwwcrrdp',
    ),
    */
    UserModule,
    GamesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
