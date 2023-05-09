import { Given, When, Then } from "@wdio/cucumber-framework";
import { TikTokPage } from "../pages/tikTokPage.ts";
import { enterValue, click } from "../utils/inputUtils.ts";

When("The user clicks on a story", async () => {
    await click(await TikTokPage.getStoryButton());
});