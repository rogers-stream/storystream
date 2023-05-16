import { waitForElement } from "../utils/domUtils.ts";

export const FeedPage = {
    getStoryButton: async () => await waitForElement("//*[@id='content-inner']/div[2]/div/a"),
    getContentButton: async () => await waitForElement("[title='Manage']"),
    getFeedButton: async () => await waitForElement("[title='Feeds']"),
    getAddFeedButton: async () => await waitForElement("[title='Add']"),
    getFacebookFeedLink: async () => await waitForElement("[title='Facebook']"),
    getInstagramHastagFeedLink: async () => await waitForElement("//*[@id='SettingsManager']/div[2]/div/div/div[2]/div/div/div[2]/div/div/div[3]/div[2]/div[3]/a"),
    getInstagramMentionFeedLink: async () => await waitForElement("[title='Instagram Mention']"),
    getInstagramTaggedFeedLink: async () => await waitForElement("[title='Instagram Tagged']"),
    getInstagramUserFeedLink: async () => await waitForElement("[title='Instagram User']"),
    getBurgerMenu:async ()=> await waitForElement("//*[@id='SettingsManager']/header/div[3]/div/div[2]/a"),
    getLogoutButton:async ()=> await waitForElement("//*[@id='SettingsManager']/header/div[3]/div/div[2]/ul/li[13]/a"),
    //getStory:async () => await waitForElement("[title='View StoryStream BBQ']")
    

};
