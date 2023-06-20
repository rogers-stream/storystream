export const waitForElement = async (
    selector: string,
    throwIfNotFound = true
  ) => {
    try {
      await browser.waitUntil(
        async () => await $(selector).isDisplayed(),
        {
          timeout: 10000,
          timeoutMsg: `Element ${selector} was not visible`,
        })
    } catch (err) {
      if (throwIfNotFound) {
        throw new Error(`${(err as Error)?.message}`,
        )
      }
      return null
    }
    return $(selector)
  }
  