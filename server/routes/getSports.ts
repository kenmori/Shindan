export const getSports = (_req: any, res: any) => {
  const data = [
    {
      id: 1,
      name: "サッカー"
    },
    {
      id: 2,
      name: "卓球"
    }
  ];
  res.send(data);
};
