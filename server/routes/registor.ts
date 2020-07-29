export const postRegistor = (req: any, res: any) => {
  if (req.body.post) {
    // TODO check
  }
  const token = Math.random();
  res.send({ token, message: "wellcome to our service", statusCode: 200 });
};

export const putRegistor = (req: any, res: any) => {
  res.send({
    message: `I received your PUT request. This is what you sent me: ${req.body.put}`,
  });
};
