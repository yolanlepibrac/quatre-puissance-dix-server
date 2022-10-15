export class CreateGameDto {
  readonly id: string;
  readonly player1: string;
  readonly player2: string;
  readonly vectors1: Array<number>;
  readonly vectors2: Array<number>;
  readonly dimensions: number;
  readonly player1ToPlay: boolean;
  readonly finish: boolean;
  readonly winner1: boolean;
}
