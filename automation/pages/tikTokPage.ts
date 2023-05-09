import { waitForElement } from "../utils/domUtils.ts";

export const TikTokPage = {
getStoryButton: async () => await waitForElement("//*[@id='content-inner']/div[2]/div[4]/a"),
};
