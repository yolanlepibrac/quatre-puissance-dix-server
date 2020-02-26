import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        email: 'john',
        password: 'changeme',
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG4iLCJwYXNzd29yZCI6ImNoYW5nZW1lIiwiaWF0IjoxNTgyNzQ5MTkyLCJleHAiOjE1ODI3NDkyNTJ9.nN2P7-8xh0AkDvqR5NyGKKHhWTgo5VzHmOU04Bw16zU',
      },
      {
        userId: 2,
        email: 'chris',
        password: 'secret',
      },
      {
        userId: 3,
        email: 'maria',
        password: 'guess',
      },
    ];
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }
}
