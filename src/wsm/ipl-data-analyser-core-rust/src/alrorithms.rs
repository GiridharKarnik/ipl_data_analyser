use wasm_bindgen::{prelude::wasm_bindgen, JsValue};
use web_sys::console;

use crate::random_generators::generate_array_of_random_unique_numbers;

pub fn bubble_sort(mut unsorted: Vec<u32>) -> Vec<u32> {
    for i in 0..unsorted.len() {
        for j in 0..(unsorted.len() - 1 - i) {
            if unsorted[j] > unsorted[j + 1] {
                unsorted.swap(j, j + 1);
            }
        }
    }

    return unsorted;
}

#[wasm_bindgen]
pub fn generate_and_bubble_sort_random_numbers(count: u32) {
    //generate random numbers
    let random_numbers_array = generate_array_of_random_unique_numbers(count);
    // let unsorted_message = format!("Rust: unsorted value {:?}", random_numbers_array);
    // console::log_1(&JsValue::from_str(&unsorted_message));

    let sorted: Vec<u32> = bubble_sort(random_numbers_array);
    // let sroted_message = format!("Rust: sorted value {:?}", sorted);
    // console::log_1(&JsValue::from_str(&sroted_message));
}

pub fn quick_sort(arr: &mut Vec<u32>) {
    let len = arr.len();
    return _quick_sort(arr, 0, (len - 1) as isize);
}

fn _quick_sort(arr: &mut Vec<u32>, low: isize, high: isize) {
    if low < high {
        let p = partition(arr, low, high);
        _quick_sort(arr, low, p - 1);
        _quick_sort(arr, p + 1, high);
    }
}

fn partition(arr: &mut Vec<u32>, low: isize, high: isize) -> isize {
    let pivot = high as usize;
    let mut store_index = low - 1;
    let mut last_index = high;

    loop {
        store_index += 1;
        while arr[store_index as usize] < arr[pivot] {
            store_index += 1;
        }
        last_index -= 1;
        while last_index >= 0 && arr[last_index as usize] > arr[pivot] {
            last_index -= 1;
        }
        if store_index >= last_index {
            break;
        } else {
            arr.swap(store_index as usize, last_index as usize);
        }
    }
    arr.swap(store_index as usize, pivot as usize);
    store_index
}

#[wasm_bindgen]
pub fn generate_and_quick_sort_random_numbers(count: u32) {
    //generate random numbers
    let mut random_numbers_array = generate_array_of_random_unique_numbers(count);
    // let unsorted_message = format!("Rust: unsorted value {:?}", random_numbers_array);
    // console::log_1(&JsValue::from_str(&unsorted_message));

    quick_sort(&mut random_numbers_array);
    // let sroted_message = format!("Rust: sorted value {:?}", random_numbers_array);
    // console::log_1(&JsValue::from_str(&sroted_message));
}

#[wasm_bindgen]
pub fn quick_sort_given_random_numbers(mut random_numbers_array: Vec<u32>) {
    quick_sort(&mut random_numbers_array);
}

#[wasm_bindgen]
pub fn bubble_sort_given_random_numbers(random_numbers_array: Vec<u32>) {
    // let sorted_message = format!("Rust: unsorted received value {:?}", random_numbers_array);
    // console::log_1(&JsValue::from_str(&sorted_message));

    let sorted_numbers = bubble_sort(random_numbers_array);

    // let sorted_message_1 = format!("Rust: sorted received value {:?}", sorted_numbers);
    // console::log_1(&JsValue::from_str(&sorted_message_1));
}

#[wasm_bindgen]
pub fn fibonacci(n: i32) -> i32 {
    return match n {
        n if n < 1 => 0,
        n if n <= 2 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2)
    };
}