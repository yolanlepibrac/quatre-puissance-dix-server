import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './users.service';
import { GamesService } from '../game/games.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './users.schema';
import { AuthenticationMiddleware } from './authentication.middleware';
import { DatabaseModule } from '../database.module';
import { UsersProviders } from './users.providers';
import { GamesProviders } from '../game/games.providers';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [UserController],
  providers: [
    UserService,
    ...UsersProviders,
    GamesService,
    ...GamesProviders,
    JwtStrategy,
  ],
})
export class UserModule {}
/* export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer
      .apply(AuthenticationMiddleware)
      .forRoutes(
        { method: RequestMethod.POST, path: '/blog/post' },
        { method: RequestMethod.PUT, path: '/blog/edit' },
        { method: RequestMethod.DELETE, path: '/blog/delete' },
      );
  }
} */
