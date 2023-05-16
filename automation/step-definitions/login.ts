import { Given, When, Then } from "@wdio/cucumber-framework";
import { LoginPage } from "../pages/loginPage.ts";
import { enterValue, click } from "../utils/inputUtils.ts";

Given("The user is on the Storystream Admin Login Page", async () => {
  await browser.url("http://storystream.stystm/admin/");
});

When('The user logs in with their {string} account', async (accountType) => {
  let username = null;
  let password = null;
  if (accountType == "Admin") {
    username = "roger.souke@storystream.it";
    password = "Anthony";
  }

  await enterValue(await LoginPage.setUsernameInput(), username);
  await enterValue(await LoginPage.setPasswordInput(), password);
  await click(await LoginPage.getSubmitButton());

  });
