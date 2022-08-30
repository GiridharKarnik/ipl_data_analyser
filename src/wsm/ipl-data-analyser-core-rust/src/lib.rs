mod utils;
mod match_stats_data_type;
mod match_stats;
mod alrorithms;
mod random_generators;

use wasm_bindgen::prelude::*;
use web_sys::console;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

// #[wasm_bindgen]
// extern {
//     fn alert(s: &str);
// }

#[wasm_bindgen]
pub fn greet() {
    console::log_1(&JsValue::from_str("Hello from rust"));
}

#[wasm_bindgen]
pub fn main_js() -> Result<(), JsValue> {
    #[cfg(debug_assertions)]
    console_error_panic_hook::set_once();

    Ok(())
}