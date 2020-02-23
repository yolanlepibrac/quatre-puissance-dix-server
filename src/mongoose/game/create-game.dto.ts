export class CreateGameDto {
  readonly id: String;
  readonly player1: String;
  readonly player2: String;
  readonly vectors1: Array<number>;
  readonly vectors2: Array<number>;
  readonly dimensions: Number;
  readonly player1ToPlay: Boolean;
  readonly finish: Boolean;
  readonly winner1: Boolean;
}
