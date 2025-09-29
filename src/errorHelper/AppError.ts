class AppError extends Error {
  public statusCode: number;
  public code: string;

  constructor(
    message: string,
    statusCode: number,
    code = "UNKNOWN_ERROR",
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default AppError;
