import fs from "fs-extra";

export const hooks = {
  onPrepare: () => {
    fs.removeSync("./reports/allure-results");
  },

  afterStep: async (result) => {},

  beforeScenario: async (scenario) => {
    console.log(
      `Scenario starting: [${scenario.gherkinDocument.feature.name}] ${scenario.pickle.name}`
    );
  },

  afterScenario: async (scenario, result) => {
    if (!result.passed) {
      await browser.takeScreenshot();
    }
    console.log(
      `Scenario ending: [${scenario.gherkinDocument.feature.name}] ${scenario.pickle.name}`
    );
  },

  beforeFeature: async (_featureUri, feature) => {
    console.log(`Feature starting: [${feature.name}]`);
  },
};

