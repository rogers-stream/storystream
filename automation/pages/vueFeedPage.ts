import { waitForElement } from "../utils/domUtils.js";

export const VuePage = {
    getVueAddFeedButton: async () => await waitForElement("//*[@id='app']/div[1]/div[2]/div[1]/div/ul[1]/li[2]/ul/li[1]/button"),
    setInstagramHastagFeed: async () => await waitForElement("/html/body/div[3]/div/div[2]/div[2]/div/div[2]/div/div[1]/div/input"),
    getVueBurgerMenu: async () => await waitForElement("//*[@id='nav']/header/div[3]/div/a"),
    getVueLogoutButton: async () => await waitForElement("//*[@id='nav']/header/div[3]/div/ul/li[13]/a")
};