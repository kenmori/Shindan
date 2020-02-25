export const getTeams = (req: any, res: any) => {
  console.log(req, "req");
  const data = [
    {
      id: 2,
      sport_id: 2,
      name: "ANA"
    },
    {
      id: 1,
      sport_id: 1,
      name: "ヴィッセル神戸"
    },
    {
      id: 3,
      sport_id: 1,
      name: "フロンターレ川崎"
    }
  ];
  res.send(data);
};
