import {generateArrayOfRandomUniqueNumbers} from "./alrorithms/generateArrayOfRandomNumbers";
import {bubbleSort} from "./alrorithms/bubbleSort";
import {
    fibonacci,
    generate_and_bubble_sort_random_numbers,
    generate_and_quick_sort_random_numbers,
    bubble_sort_given_random_numbers,
    quick_sort_given_random_numbers
} from "./wsm/ipl-data-analyser-core-rust/pkg";
import {quickSort} from "./alrorithms/quickSort";
import {fibSum} from "./alrorithms/fibSum";
import Table from "cli-table";

const random_number_array_size = 100;
const fibonacciLength = 40;

const bubbleSortRandomNumbersJS = (randomNumbersArray: Array<number>) => {
     // console.log(randomNumbersArray.toString());
    const sorted: Array<number> = bubbleSort(randomNumbersArray);
    // console.log(sorted.toString());
}

const quickSortRandomNumbersJS = (randomNumbersArray: Array<number>) => {
      // console.log(randomNumbersArray.toString());
    const sorted: Array<number> = quickSort(randomNumbersArray);
    // console.log(sorted.toString());
}

const bubble_sort: Array<string> = ['bubble_sort'];
const quick_sort: Array<string> = ['quick_sort'];
const fibonacci_sum: Array<string> = ['fibonacci_sum'];

const random_shuffled_numbers: Array<number> = generateArrayOfRandomUniqueNumbers(random_number_array_size);

// console.log(random_shuffled_numbers);
//
// bubble_sort_given_random_numbers(random_shuffled_numbers);

let t1 = process.hrtime();
bubbleSortRandomNumbersJS(random_shuffled_numbers);
t1 = process.hrtime(t1);
bubble_sort.push(`${t1[0]} s, ${t1[1] / 1000000} ms`);

let t2 = process.hrtime();
bubble_sort_given_random_numbers(random_shuffled_numbers as unknown as Uint32Array);
t2 = process.hrtime(t2);
bubble_sort.push(`${t2[0]} s, ${t2[1] / 1000000} ms`);

let quickSortTimeJS = process.hrtime();
quickSortRandomNumbersJS(random_shuffled_numbers);
quickSortTimeJS = process.hrtime(quickSortTimeJS);
quick_sort.push(`${quickSortTimeJS[0]} s, ${quickSortTimeJS[1] / 1000000} ms`);

let quickSortTimeRust = process.hrtime();
quick_sort_given_random_numbers(random_shuffled_numbers as unknown as Uint32Array);
quickSortTimeRust = process.hrtime(quickSortTimeRust);
quick_sort.push(`${quickSortTimeRust[0]} s, ${quickSortTimeRust[1] / 1000000} ms`);

let fibSumTimeJS = process.hrtime();
let jsSum = fibSum(fibonacciLength);
fibSumTimeJS = process.hrtime(fibSumTimeJS);
fibonacci_sum.push(`${fibSumTimeJS[0]} s, ${fibSumTimeJS[1] / 1000000} ms`);

let fibSumTimeRust = process.hrtime();
const rustSum = fibonacci(fibonacciLength);
fibSumTimeRust = process.hrtime(fibSumTimeRust);
fibonacci_sum.push(`${fibSumTimeRust[0]} s, ${fibSumTimeRust[1] / 1000000} ms`);

console.log(`js  : bubble sort time: ${t1[0]} s, ${t1[1] / 1000000} ms`);
console.log(`rust: bubble sort time: ${t2[0]} s, ${t2[1] / 1000000} ms`);
console.log(`js  : quick sort time: ${quickSortTimeJS[0]} s, ${quickSortTimeJS[1] / 1000000} ms`);
console.log(`rust: quick sort time: ${quickSortTimeRust[0]} s, ${quickSortTimeRust[1] / 1000000} ms`);
console.log(`js  : fibonacci sum ${jsSum} time: ${fibSumTimeJS[0]} s, ${fibSumTimeJS[1] / 1000000} ms`);
console.log(`rust: fibonacci sum ${rustSum} time: ${fibSumTimeRust[0]} s, ${fibSumTimeRust[1] / 1000000} ms`);

const table = new Table({
    head: ['Algorithm', 'JS', 'WebAssembly (Rust)'],
});

table.push(bubble_sort, quick_sort, fibonacci_sum);

console.log(table.toString());
