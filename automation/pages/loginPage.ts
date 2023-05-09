import { waitForElement } from "../utils/domUtils.ts";

export const LoginPage = {
  setUsernameInput: async () => await waitForElement("[id='auth-username']"),
  setPasswordInput: async () => await waitForElement("[type='password']"),
  getSubmitButton: async () => await waitForElement("[type='submit']"),
};
