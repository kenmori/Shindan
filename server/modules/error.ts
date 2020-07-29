export class ErrorHandler extends Error {
  statusCode: string;
  message: string;
  constructor(statusCode: string, message: string) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

export const handleError = (err: any, res: any) => {
  const { statusCode, message } = err;
  res.status(statusCode).json({
    status: "error",
    statusCode,
    message,
  });
};
