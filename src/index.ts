import {avgScore} from "./statUtils/matchStats/avgScore";
import {readAllMatchFiles} from "./statUtils/fileReadUtils/readAllMatchFiles";
import {MatchStat} from "./types";

//pull wasm functions written in rust
import {avg_score} from './wsm/ipl-data-analyser-core-rust/pkg';

const team: string = 'Royal Challengers Bangalore';

const calculateAvgScoreOfATeam = () => {
    const matchStats: Array<MatchStat> = readAllMatchFiles();

    console.log(`total matches played by ${team}: ${matchStats.length}`);

    const avg = avgScore(matchStats, team);

    console.log(`avg ${avg}`);
};

const calculateAvgScoreUsingWasm = () => {
    // const matchStats: Array<MatchStat> = readAllMatchFiles();

    let arrayOfObjects = [
        {name: "hello world", id: "99", parent_id: "88"},
        {name: "hello world2", id: "88", parent_id: "12"},
        {name: "hello world3", id: "77", parent_id: "88"}
    ]

    avg_score(arrayOfObjects);
}

let t = process.hrtime();

// calculateAvgScoreOfATeam();

// greet();
calculateAvgScoreUsingWasm();

t = process.hrtime(t);

console.log(`${t[0]} s, ${t[1] / 1000000} ms`)


