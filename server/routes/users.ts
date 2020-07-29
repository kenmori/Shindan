export const getUser = (req: any, res: any) => {
  const id = req.params.id;
  console.log(req, "req");
  const data = [
    {
      id: 1,
      sport_id: 1,
      team_id: 1,
      first_name: "翔也",
      last_name: "中島",
      rank: 1,
      near_match_date: "2019/11/12",
      diff_previous_price: 100,
    },
    {
      id: 2,
      sport_id: 1,
      team_id: 1,
      first_name: "翔也2",
      last_name: "中島",
      rank: 1,
      near_match_date: "2019/11/11",
      diff_previous_price: 0,
    },
    {
      id: 3,
      sport_id: 2,
      team_id: 1,
      first_name: "愛",
      last_name: "福原",
      rank: 1,
      near_match_date: "2019/11/21",
      diff_previous_price: 0,
    },
  ];
  res.send(data);
};
