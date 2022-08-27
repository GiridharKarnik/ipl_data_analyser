const fs = require('fs-extra');

import {MatchStat} from "../../types";

const iplMatchDataDirPath = "./ipl_male_json";

export const readAllMatchFiles = (): Array<MatchStat> => {
    const files = fs.readdirSync(iplMatchDataDirPath);

    return files.map((fileName: string) => {
        return fs.readJSONSync(`${iplMatchDataDirPath}/${fileName}`);
    });
}
