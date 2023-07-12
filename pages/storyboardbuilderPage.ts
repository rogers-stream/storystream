import { waitForElement } from "../utils/domUtils.js";

export const StoryboardbuilderPage = {
  setUsernameInput: async () => await waitForElement("[id='auth-username']"),
  setPasswordInput: async () => await waitForElement("[type='password']"),
  getSubmitButton: async () => await waitForElement("[type='submit']"),
  getCreateButton: async () => await waitForElement("//*[@id='app']/div/div[3]/div/div/div/button[2]")
};