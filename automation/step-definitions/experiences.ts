import { Given, When, Then } from "@wdio/cucumber-framework";
import { ExperiencesPage } from "../pages/experiencesPage.ts";
import { enterValue, click } from "../utils/inputUtils.ts";

When("The user selects Experiences from the sidebar", async () => {
    await click(await ExperiencesPage.getExperiencesPage());
});
When("The user clicks on the Add Experiences Button", async () =>{
    await click(await ExperiencesPage.getAddExperiencesButton());
});
When("The use selects Live Video from the Story Board list", async () =>{
    await click(await ExperiencesPage.getLiveVideo());
});
When("The user clicks on Add Video to be redirected to the Add Live Video Page", async () =>{
    await click(await ExperiencesPage.getAddLiveVideoButton());
});