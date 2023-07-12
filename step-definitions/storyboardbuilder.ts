import { Given, When, Then } from "@wdio/cucumber-framework";
import { StoryboardbuilderPage } from "../pages/storyboardbuilderPage.js";
import { enterValue, click } from "../utils/inputUtils.js";

Given("The user is on the Experiences Store On Page Gallery area", async () => {
  await browser.url("http://storystream.stystm/admin/");
});

When('The user sign-in with their {string} account', async (accountType) => {
  let username = null;
  let password = null;
  if (accountType == "Admin") {
    username = "roger.souke@storystream.it";
    password = "Anthony";
  }

  await enterValue(await StoryboardbuilderPage.setUsernameInput(), username);
  await enterValue(await StoryboardbuilderPage.setPasswordInput(), password);
  await click(await StoryboardbuilderPage.getSubmitButton());

  });

  Given("The User navigates to the Experiences Store section", async () =>{

    await browser.url("https://storystream.stystm/admin/apps/#/store");
  });

When("The user clicks on the create button", async () =>{
  await click(await StoryboardbuilderPage.getCreateButton());
});