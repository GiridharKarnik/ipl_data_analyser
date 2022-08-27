export enum MatchStatDataVersion {
  "1.0.0" = "1.0.0",
  "1.1.0" = "1.1.0",
}

export interface MatchStatMeta {
  data_version: MatchStatDataVersion;
  created: string;
  revision: number;
}

export interface MatchStatInfoEvent {
  name: string;
  match_number?: number;
  group?: string;
  stage?: string;
}

export enum Gender {
  male = "male",
  female = "female",
}

export enum MatchType {
  Test = "Test",
  ODI = "ODI",
  T20 = "T20",
  IT20 = "IT20",
  ODM = "ODM",
  MDM = "MDM",
}

export interface MatchOfficials {
  match_referees?: Array<string>;
  reserve_umpires?: Array<string>;
  tv_umpires?: Array<string>;
  umpires?: Array<string>;
}

export enum MatchResult {
  draw = "draw",
  "no result" = "no result",
  tie = "tie",
}

export interface MatchStatInfoOutcome {
  by?: {
    innings?: number;
    runs?: number;
    wickets?: number;
  };
  winner?: string;
  result?: MatchResult;
  eliminator?: string;
  bowl_out?: string;
  method?: string;
}

export interface MatchRegistry {
  people: { [key: string]: string };
}

export enum MatchTeamType {
  international = "international",
  club = "club",
}

export interface MatchToss {
  decision: string;
  winner: string;
  uncontested?: boolean;
}

export enum MatchStatInfoBowlOutOutcome {
  hit = "hit",
  miss = "miss",
}

export interface MatchStatInfoBowlOut {
  bowler: string;
  outcome: MatchStatInfoBowlOutOutcome;
}

export interface MatchStatInfo {
  balls_per_over: number;
  bowl_out?: Array<MatchStatInfoBowlOut>;
  city?: string;
  event?: MatchStatInfoEvent;
  gender: Gender;
  match_type: MatchType;
  match_type_number?: number;
  missing?: Array<string>;
  officials?: MatchOfficials;
  outcome: MatchStatInfoOutcome;
  overs?: number;
  player_of_match?: Array<string>;
  players: { [key: string]: Array<string> };
  registry: MatchRegistry;
  season: string;
  supersubs: { [key: string]: string };
  team_type: MatchTeamType;
  teams: Array<string>;
  toss: MatchToss;
  venue: string;
}

export interface MatchOverDeliveryExtras {
  byes?: number;
  legbyes?: number;
  noballs?: number;
  penalty?: number;
  wides?: number;
}

export enum ReplacementMatchReason {
  concussion_substitute = "concussion_substitute",
  covid_replacement = "covid_replacement",
  national_callup = "national_callup",
  national_release = "national_release",
  supersub = "supersub",
  unknown = "unknown",
}

export interface MatchOverDeliveryReplacementsMatch {
  in: string;
  out: string;
  reason: ReplacementMatchReason;
  team: string;
}

export enum ReplacementRoleReason {
  "excluded - high full pitched balls" = "excluded - high full pitched balls",
  "excluded - running on the pitch" = "excluded - running on the pitch",
  injury = "injury",
  "too many overs" = "too many overs",
  unknown = "unknown",
}

export interface MatchOverDeliveryReplacementsRole {
  in: string;
  out?: string;
  reason: ReplacementRoleReason;
  team: string;
}

export interface MatchOverDeliveryReplacements {
  match: MatchOverDeliveryReplacementsMatch;
  role: MatchOverDeliveryReplacementsRole;
}

export enum MatchOverDeliveryReviewDecision {
  "struck down" = "struck down",
  upheld = "upheld",
}

export interface MatchOverDeliveryReview {
  batter: string;
  by: string;
  decision: MatchOverDeliveryReviewDecision;
  umpire?: string;
  umpires_call?: boolean;
}

export interface MatchOverDeliveryRuns {
  batter: number;
  extras: number;
  non_boundary?: boolean;
  total: number;
}

export interface MatchOverDeliveryWicketFielder {
  name: string;
}

//! probably has more fields
export enum MatchOverDeliveryWicketKind {
  caught = "caught",
  lbw = "lbw",
  bowled = "bowled",
  "caught and bowled" = "caught and bowled",
}

export interface MatchOverDeliveryWicket {
  player_out: string;
  fielders?: Array<MatchOverDeliveryWicketFielder>;
  kind: MatchOverDeliveryWicketKind;
}

export interface MatchOverDelivery {
  batter: string;
  bowler: string;
  extras?: MatchOverDeliveryExtras;
  non_striker: string;
  replacements?: MatchOverDeliveryReplacements;
  review?: MatchOverDeliveryReview;
  runs: MatchOverDeliveryRuns;
  wickets?: Array<MatchOverDeliveryWicket>;
}

export interface MatchInningsOver {
  over: number;
  deliveries: Array<MatchOverDelivery>;
}

export interface MatchInningsPenaltyRuns {
  pre: number;
  post: number;
}

export enum MatchInningsPowerPlayType {
  batting = "batting",
  fielding = "fielding",
  mandatory = "mandatory",
}

export interface MatchInningsPowerplays {
  from: number;
  to: number;
  type: MatchInningsPowerPlayType;
}

export interface MatchInningsMiscountedOver {
  balls: number;
  umpire?: string;
}

export interface MatchInningsTarget {
  overs?: number;
  runs?: number;
}

export interface MatchStatInnings {
  team: string;
  overs?: Array<MatchInningsOver>;
  absent_hurt?: Array<string>;
  penalty_runs?: MatchInningsPenaltyRuns;
  declared?: boolean;
  forfeited?: boolean;
  powerplays?: Array<MatchInningsPowerplays>;
  miscounted_overs?: { [key: string]: MatchInningsMiscountedOver };
  target?: MatchInningsTarget;
  super_over?: boolean;
}

export interface MatchStat {
  meta: MatchStatMeta;
  info: MatchStatInfo;
  innings: Array<MatchStatInnings>;
}
