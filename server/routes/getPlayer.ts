export const getPlayer = (req: any, res: any) => {
  const data = [
    {
      id: "1",
      sport_id: 1,
      team_id: 11,
      first_name: "翔也1",
      last_name: "中島",
      near_match_date: "2019/11/11",
    },
    {
      id: "2",
      sport_id: 1,
      team_id: 11,
      first_name: "翔也2",
      last_name: "中島",
      near_match_date: "2019/11/11",
    },
    {
      id: "3",
      sport_id: 1,
      team_id: 11,
      first_name: "翔也3",
      last_name: "中島",
      near_match_date: "2019/11/11",
    },
  ];
  const fa = data.find((e) => e.id === req.params.id);
  res.send(fa);
};
