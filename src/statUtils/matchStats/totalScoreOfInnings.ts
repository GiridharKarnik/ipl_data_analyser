import {
  MatchInningsOver,
  MatchOverDelivery,
  MatchStatInnings,
} from "../../types";

export const totalScoreOfInnings = (
  matchStatInnings: MatchStatInnings
): number => {
  let totalRuns = 0;

  matchStatInnings.overs.forEach((over: MatchInningsOver) => {
    over.deliveries.forEach((delivery: MatchOverDelivery) => {
      totalRuns = totalRuns + delivery.runs.total;
    });
  });

  return totalRuns;
};
