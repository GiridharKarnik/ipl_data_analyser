extern crate serde_json;
extern crate wasm_bindgen;
use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;
use web_sys::console::{self, log_1};

use crate::match_stats_data_type::{
    MatchInningsOver, MatchOverDelivery, MatchStat, MatchStatInnings,
};
extern crate console_error_panic_hook;

#[derive(Serialize, Deserialize)]
pub struct Element {
    name: String,
    id: String,
    parent_id: String,
}

pub fn total_score_of_innings(match_stat_innings: MatchStatInnings) -> u16 {
    let mut total_runs: u16 = 0;

    if match_stat_innings.overs.is_none() {
        return total_runs;
    }

    match_stat_innings
        .overs
        .unwrap()
        .into_iter()
        .for_each(|over: MatchInningsOver| {
            over.deliveries
                .into_iter()
                .for_each(|delivery: MatchOverDelivery| {
                    total_runs = total_runs + delivery.runs.total as u16;
                })
        });

    return total_runs;
}

#[wasm_bindgen]
pub fn avg_score(
    js_objects: &JsValue,
    team: String,
    innings: Option<u8>,
    venue: Option<String>,
) -> f32 {
    console_error_panic_hook::set_once();

    let match_stats: Vec<MatchStat> = js_objects.into_serde().unwrap();

    let intro1 = format!("received data for {} matches", &match_stats.len());
    console::log_1(&JsValue::from_str(&intro1));

    let intro2 = format!("calcualing avg score of {}", team);
    console::log_1(&JsValue::from_str(&intro2));

    //? filter the match stats based on the passed params
    let filtered_match_stats: Vec<MatchStat> = match_stats
        .into_iter()
        .filter(|match_stat: &MatchStat| {
            if match_stat.info.teams.contains(&team) {
                return true;
            }

            return false;
        })
        .collect();

    // ! this might panic if the convered size does not fit inside u16
    let total_matches: u32 = filtered_match_stats.len() as u32;
    
    let intro2 = format!("rust: {} matches meet the filter criteria", &total_matches);
    console::log_1(&JsValue::from_str(&intro2));
    
    let mut total_runs_across_matches: f32 = 0.0;

    filtered_match_stats
        .into_iter()
        .for_each(|match_stat: MatchStat| {
            let innings_of_intereset = match_stat
                .innings
                .into_iter()
                .find(|innings| innings.team == team);

            if innings_of_intereset.is_none() {
                return;
            }

            total_runs_across_matches = total_runs_across_matches
                + total_score_of_innings(innings_of_intereset.unwrap()) as f32;
        });

    return (total_runs_across_matches / total_matches as f32) as f32;
}
