import { Given, When, Then } from "@wdio/cucumber-framework";
import { VuePage } from "../pages/vueFeedPage.ts";
import { enterValue, click } from "../utils/inputUtils.ts";

Given("The User navigates to the New Vue Content section", async () =>{

  await browser.url("http://storystream.stystm/admin/content/vue/#/manage/all-content/all");
});
When("The user clicks on the Vue Add Feed Button", async () =>{
    await click(await VuePage.getVueAddFeedButton());
});
When("The User selects and enters an Instagram Hashtag Feed", async () =>{
  let instagramHastag = null;
  instagramHastag = "mundo";
  
    await enterValue(await VuePage.setInstagramHastagFeed(), instagramHastag);
});
When("The User navigates to the Vue Burger menu", async () =>{
  await click(await VuePage.getVueBurgerMenu());
});
When("Clicks on the Vue Logout button to end their session", async () =>{
  await click(await VuePage.getVueLogoutButton());
});
