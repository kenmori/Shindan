export type Followers = Follower[];

export type Row = {
  id: string;
  attrName: string;
  attrValue: string;
};

export type MatchDetail = { match_date: string; rows: Row[] };

export type Follower = {
  fullName: string;
  nearMatchDate?: string;
  rank?: number;
  id?: number;
  teamId: number;
  teamName: string;
  displayName: string;
  sportId: number;
  sportName: string;
  untilPrice: string;
  diffPreviousPrice: number;
  statistics: {
    graphScale: { top: number; middle: number } | null;
    activities: {
      id: number;
      matchId: number;
      unitPrice: number;
      updatedDate: string;
    }[];
    matchDetails: MatchDetail[] | null;
  };
};

export type FllowPlayer = Pick<
  Follower,
  | "id"
  | "fullName"
  | "teamName"
  | "nearMatchDate"
  | "rank"
  | "sportName"
  | "sportId"
  | "untilPrice"
>;

export const createFullName = (lastName = "", firstName = "") => {
  return lastName + firstName;
};
