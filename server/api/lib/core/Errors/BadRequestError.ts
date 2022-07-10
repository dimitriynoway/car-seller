export class BadRequestError extends Error {
  public code: number;

  constructor(message: string) {
    super(message);
    this.name = "BadRequestError";
    this.code = 400;
  }
}
