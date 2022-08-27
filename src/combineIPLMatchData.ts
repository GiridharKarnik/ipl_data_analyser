const fs = require("fs-extra");

const iplMatchDataDirPath = "./ipl_male_json";

const checkDataVersion = async () => {
  const files = fs.readdirSync(iplMatchDataDirPath);

  const dataVersions: Array<string> = [];

  files.forEach(async (fileName) => {
    //read each file.
    const iplData = await fs.readJSON(`${iplMatchDataDirPath}/${fileName}`);

    const dataVersion = iplData.meta.data_version;

    if (!dataVersion) {
      console.log(`unabled to read data version for file: ${fileName}`);
    }

    if (!dataVersions.includes(dataVersion)) {
      dataVersions.push(dataVersion);

      console.log(`found version ${dataVersion}`);
    }
  });

  console.log(dataVersions);
};

checkDataVersion();
