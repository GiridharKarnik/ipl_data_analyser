use serde_derive::{Deserialize, Serialize};
use std::collections::HashMap;

#[derive(Serialize, Deserialize)]
pub struct MatchStatMeta {
    data_version: String,
    created: String,
    revision: u32,
}

#[derive(Serialize, Deserialize)]
pub struct MatchStatInfoBowlOut {
    bowler: String,
    outcome: String,
}

#[derive(Serialize, Deserialize)]
pub struct MatchStatInfoEvent {
    name: String,
    match_number: Option<u32>,
    group: Option<String>,
    stage: Option<String>,
}

#[derive(Serialize, Deserialize)]
pub struct MatchOfficials {
    match_referees: Option<Vec<String>>,
    reserve_umpires: Option<Vec<String>>,
    tv_umpires: Option<Vec<String>>,
    umpires: Option<Vec<String>>,
}

#[derive(Serialize, Deserialize)]
pub struct MatchStatInfoOutcomeBy {
    innings: Option<u8>,
    runs: Option<u16>,
    wickets: Option<u8>,
}

#[derive(Serialize, Deserialize)]
pub struct MatchStatInfoOutcome {
    by: Option<MatchStatInfoOutcomeBy>,
    winner: Option<String>,
    result: Option<String>,
    eliminator: Option<String>,
    bowl_out: Option<String>,
    method: Option<String>,
}

#[derive(Serialize, Deserialize)]
pub struct MatchRegistry {
    people: HashMap<String, String>,
}

#[derive(Serialize, Deserialize)]
pub struct MatchToss {
    decision: String,
    winner: String,
    uncontested: Option<bool>,
}

#[derive(Serialize, Deserialize)]
pub struct MatchStatInfo {
    pub balls_per_over: u8,
    pub bowl_out: Option<MatchStatInfoBowlOut>,
    pub city: Option<String>,
    pub event: Option<MatchStatInfoEvent>,
    pub gender: String,
    pub match_type: String,
    pub match_type_number: Option<u32>,
    pub missing: Option<Vec<String>>,
    pub officials: Option<MatchOfficials>,
    pub outcome: MatchStatInfoOutcome,
    pub overs: u16,
    pub player_of_match: Option<Vec<String>>,
    pub players: HashMap<String, Vec<String>>,
    pub registry: MatchRegistry,
    pub season: Option<String>,
    pub team_type: String,
    pub teams: Vec<String>,
    pub toss: MatchToss,
    pub venue: String,
}

#[derive(Serialize, Deserialize)]
pub struct MatchOverDeliveryExtras {
    byes: Option<u16>,
    legbyes: Option<u16>,
    noballs: Option<u16>,
    penalty: Option<u16>,
    wides: Option<u16>,
}

#[derive(Serialize, Deserialize)]
pub struct MatchOverDeliveryReview {
    batter: String,
    by: String,
    decision: String,
    umpire: Option<String>,
    umpires_call: Option<bool>,
}

#[derive(Serialize, Deserialize)]
pub struct MatchOverDeliveryRuns {
    batter: u8,
    extras: u8,
    non_boundary: Option<bool>,
    total: u8,
}

#[derive(Serialize, Deserialize)]
pub struct MatchOverDeliveryWicketFielder {
    name: String,
}

#[derive(Serialize, Deserialize)]
pub struct MatchOverDeliveryWicket {
    player_out: String,
    fielders: Option<Vec<MatchOverDeliveryWicketFielder>>,
    kind: String,
}

#[derive(Serialize, Deserialize)]
pub struct MatchOverDelivery {
    batter: String,
    bowler: String,
    extras: Option<MatchOverDeliveryExtras>,
    non_striker: String,
    review: Option<MatchOverDeliveryReview>,
    runs: MatchOverDeliveryRuns,
    wickets: Option<Vec<MatchOverDeliveryWicket>>,
}

#[derive(Serialize, Deserialize)]
pub struct MatchInningsOver {
    over: u16,
    deliveries: Vec<MatchOverDelivery>,
}

#[derive(Serialize, Deserialize)]
pub struct MatchInningsTarget {
    over: Option<u16>,
    runs: Option<u16>,
}

#[derive(Serialize, Deserialize)]
pub struct MatchStatInnings {
    team: String,
    overs: Option<Vec<MatchInningsOver>>,
    target: Option<MatchInningsTarget>,
    super_over: Option<bool>,
}

#[derive(Serialize, Deserialize)]
pub struct MatchStat {
    pub meta: MatchStatMeta,
    pub info: MatchStatInfo,
    pub innings: Vec<MatchStatInnings>,
}
