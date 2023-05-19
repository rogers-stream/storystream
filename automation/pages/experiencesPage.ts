import { waitForElement } from "../utils/domUtils.ts";

export const ExperiencesPage = {
getExperiencesPage: async () => await waitForElement("[title='Experiences']"),
getAddExperiencesButton: async () => await waitForElement("//*[@id='app']/div/div[1]/div[2]/button[1]"),
getLiveVideo: async () => await waitForElement("//*[@id='AppManager']/div[2]/div/div/ul[1]/li[1]/a"),
getAddLiveVideoButton: async () => waitForElement("[title='Add Live Video']"),
getExpBurgerMenu:async ()=> await waitForElement("//*[@id='nav']/header/div[3]/div/a"),
getExpLogoutButton:async ()=> await waitForElement("//*[@id='nav']/header/div[3]/div/ul/li[13]/a"),
};