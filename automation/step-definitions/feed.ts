import { Given, When, Then } from "@wdio/cucumber-framework";
import { FeedPage } from "../pages/feedPage.ts";
import { enterValue, click } from "../utils/inputUtils.ts";

When("The user navigates to the Content section", async () => {
    await click(await FeedPage.getContentButton());
});
When("The user selects Feeds from the Content list of items", async () =>{
    await click(await FeedPage.getFeedButton());
});
When("The user clicks on the Add Feed Button", async () =>{
    await click(await FeedPage.getAddFeedButton());
});
When("The User selects the Facebook Feeds link", async () =>{
    await click(await FeedPage.getFacebookFeedLink());
});
When("The User selects the Instagram Hashtag Feeds link", async () =>{
    await click(await FeedPage.getInstagramHastagFeedLink());
});
When("The User selects the Instagram Mention Feeds link", async () =>{
    await click(await FeedPage.getInstagramMentionFeedLink());
});
When("The User selects the Instagram Tagged Feeds link", async () =>{
    await click(await FeedPage.getInstagramTaggedFeedLink());
});
When("The User selects the Instagram User Feeds link", async () =>{
    await click(await FeedPage.getInstagramUserFeedLink());
});