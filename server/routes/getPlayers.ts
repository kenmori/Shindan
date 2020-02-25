export const getPlayers = (_req: any, res: any) => {
  const data = [
    {
      id: 1,
      sport_id: 1,
      sport_name: "サッカー",
      team_id: 2,
      team_name: "フロンターレ川崎",
      first_name: "憲剛",
      last_name: "中村",
      rank: 1,
      near_match_date: "2019/11/12",
      diff_previous_price: 100
    },
    {
      id: 2,
      sport_id: 1,
      sport_name: "サッカー",
      team_id: 1,
      team_name: "ヴィッセル神戸",
      first_name: "翔也2",
      last_name: "中島",
      rank: 1,
      near_match_date: "2019/11/12",
      diff_previous_price: 1
    },
    {
      id: 3,
      sport_id: 2,
      sport_name: "卓球",
      team_id: 2,
      team_name: "ANA",
      first_name: "福原",
      last_name: "愛",
      rank: 1,
      near_match_date: "2019/11/12",
      diff_previous_price: 1
    }
  ];
  res.send(data);
};
