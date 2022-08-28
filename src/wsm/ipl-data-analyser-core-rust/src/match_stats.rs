extern crate wasm_bindgen;
extern crate serde_json;
use serde::{Serialize, Deserialize};
use wasm_bindgen::prelude::*;
use web_sys::console;

use crate::match_stats_data_type::MatchStat;
extern crate console_error_panic_hook;


#[derive(Serialize, Deserialize)]
pub struct Element {
    name: String,
    id: String,
    parent_id: String,
}

#[wasm_bindgen]
pub fn avg_score( js_objects: &JsValue )  {
    console_error_panic_hook::set_once();
    let elements: Vec<MatchStat> = js_objects.into_serde().unwrap();

    let feedback = format!("received {} objects", elements.len());
    
    console::log_1(&JsValue::from_str(&feedback));
}