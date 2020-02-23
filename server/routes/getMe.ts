import { ErrorHandler } from "../modules/error";

export const getMe = (req: any, res: any, next: any) => {
  try {
    const { token } = req.body;
    if (!token) {
      throw new ErrorHandler("500", "トークンがありません");
    }
    // db.user.fined
    res.send({
      status: 200,
      message: "ok",
      user: { name: "kenji", email: "kenjimoritata@gmail.com", password: 1111 }
    });
  } catch (error) {
    next(error);
  }
};
