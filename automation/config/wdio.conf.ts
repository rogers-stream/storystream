import type { Options } from "@wdio/types";
import { hooks } from "./hooks.ts";

export const config: Options.Testrunner = {
  runner: "local",
  autoCompileOpts: {
    tsNodeOpts: {
      project: "../tsconfig.json",
    },
  },

  specs: ["../features/*.feature"],
  exclude: [],
  maxInstances: 5,
  capabilities: [
    {
      maxInstances: 5,
      browserName: "chrome",
      acceptInsecureCerts: true,
      "goog:chromeOptions": {
        args: [
          //"--headless",
          "--disable-gpu",
          "--window-size=1920,1080",
        ],
      },
    },
  ],

  logLevel: "error",
  waitforTimeout: 30000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["selenium-standalone"],

  framework: "cucumber",
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "reports/allure-results/",
        disableWebdriverStepsReporting: true,
        useCucumberStepReporter: true,
      },
    ],
  ],

  cucumberOpts: {
    require: ["./step-definitions/*.*"],
    backtrace: true,
    failAmbiguousDefinitions: true,
    requireModule: [],
    dryRun: false,
    failFast: false,
    format: ["pretty"],
    snippets: true,
    colors: true,
    source: true,
    strict: true,
    tagExpression: "",
    timeout: 80000,
    ignoreUndefinedDefinitions: false,
  },

  ...hooks,

};
