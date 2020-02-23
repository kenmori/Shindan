import { ErrorHandler } from "../modules/error";

export const authLogin = (req: any, res: any, next: any) => {
  try {
    const { password, email } = req.body;
    if (password !== "password" && email !== "example@dummy.com") {
      throw new ErrorHandler("401", "認証されませんでした");
    }
    // db.user.fined
    if (!email) {
      throw new ErrorHandler("404", "ユーザーが存在しません");
    }
    if (!password && password !== "password") {
      throw new ErrorHandler("400", "passwordが正しくありません");
    }
    req.sesson.user = { email: req.body.email, password: req.body.password };
    res.send({ status: 200, message: "ok" });
  } catch (error) {
    next(error);
  }
};
