import {avgScore} from "./statUtils/matchStats/avgScore";
import {readAllMatchFiles} from "./statUtils/fileReadUtils/readAllMatchFiles";
import {MatchStat} from "./types";
import {avg_score} from "./wsm/ipl-data-analyser-core-rust/pkg";

const team: string = 'Royal Challengers Bangalore';

const calculateAvgScoreUsingJS = (): number => {
    const matchStats: Array<MatchStat> = readAllMatchFiles();

    return avgScore(matchStats, team);
};

const calculateAvgScoreUsingWasm = (): number => {
    const matchStats: Array<MatchStat> = readAllMatchFiles();

    return avg_score(matchStats, team);
}

let t1 = process.hrtime();
calculateAvgScoreUsingJS();
t1 = process.hrtime(t1);

console.log(`js time: ${t1[0]} s, ${t1[1] / 1000000} ms`);

let t2 = process.hrtime();
calculateAvgScoreUsingWasm();
t2 = process.hrtime(t2);

console.log(`rust time: ${t2[0]} s, ${t2[1] / 1000000} ms`);


