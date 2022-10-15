import { Module,} from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './users.service';
import { GamesService } from '../game/games.service';
import { UserSchema } from './users.schema';
import { DatabaseModule } from '../mongoose/database.module';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../constants/constants';
import { Connection } from 'mongoose';
import { GamesModule } from 'src/game/games.module';

@Module({
  imports: [
    GamesModule,
    DatabaseModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [UserController],
  providers: [
    UserService,
    JwtStrategy,
    {
      provide: 'USER_MODEL',
      useFactory: (connection: Connection) =>
        connection.model('User', UserSchema),
      inject: ['DATABASE_CONNECTION'],
    },
  ],
})
export class UserModule {}
