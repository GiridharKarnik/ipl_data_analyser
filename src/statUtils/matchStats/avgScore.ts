import { MatchStat, MatchStatInnings } from "../../types";
import { totalScoreOfInnings } from "./totalScoreOfInnings";

type AvgScore = {
  (
    matchStats: Array<MatchStat>,
    team?: string,
    innings?: number,
    venue?: string,
    startDate?: string,
    endDate?: string
  ): number;
  (
    matchStats: Array<MatchStat>,
    team: string,
    innings?: number,
    venue?: string,
    startDate?: string,
    endDate?: string
  ): number;
  (
    matchStats: Array<MatchStat>,
    team: string,
    innings: number,
    venue?: string,
    startDate?: string,
    endDate?: string
  ): number;
};

export const avgScore: AvgScore = (
  matchStats: Array<MatchStat>,
  team?: string,
  innings?: number,
  venue?: string,
  startDate?: string,
  endDate?: string
): number => {
  //filter the set based on the above criteria.
  const filteredData = matchStats.filter((matchStat) => {
    if (team && !matchStat.info.teams.includes(team)) {
      return false;
    }

    // //! not sure this is needed
    // if (innings && !matchStat.innings[innings]) {
    //   return false;
    // }
    //
    // if (venue && matchStat.info.venue !== venue) {
    //   return false;
    // }

    return true;
  });

  const totalMatches = filteredData.length;

  console.log(`js: ${filteredData.length} matches meet criteria`);

  const sumOfAllScores = filteredData.reduce(
    (previousValue: number, nextMatchStat: MatchStat): number => {
      const inningsOfInterest = nextMatchStat.innings.find(
        (matchStatInnings: MatchStatInnings, index) => {
          if (
            matchStatInnings.team === team ||
            (innings !== undefined && innings === index)
          ) {
            return true;
          }

          return false;
        }
      );

      return (
        previousValue +
        (inningsOfInterest ? totalScoreOfInnings(inningsOfInterest) : 0)
      );
    },
    0
  );

  return sumOfAllScores / totalMatches;
};
