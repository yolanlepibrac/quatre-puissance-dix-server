export class CreateUserDto {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  password: string;
  readonly games: Array<string>;
}
