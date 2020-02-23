import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { CatsModule } from './mongoose/cats.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://yolanpibrac:Lasvegasparano1@ds217548.mlab.com:17548/heroku_wwwcrrdp',
    ),
    UsersModule,
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
