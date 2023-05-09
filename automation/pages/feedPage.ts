import { waitForElement } from "../utils/domUtils.ts";

export const FeedPage = {
getContentButton: async () => await waitForElement("[title='Manage']"),
getFeedButton: async () => await waitForElement("[title='Feeds']"),
getAddFeedButton: async () => await waitForElement("[title='Add']"),
getFacebookFeedLink: async () => await waitForElement("[title='Facebook']"),
getInstagramHastagFeedLink: async () => await waitForElement("[title='Instagram Hastag']"),
getInstagramMentionFeedLink: async () => await waitForElement("[title='Instagram Mention']"),
getInstagramTaggedFeedLink: async () => await waitForElement("[title='Instagram Tagged']"),
getInstagramUserFeedLink: async () => await waitForElement("[title='Instagram User']"),


};
