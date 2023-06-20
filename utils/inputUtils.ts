export async function enterValue(element: WebdriverIO.Element, value: any) {
    await clearField(element);
    await element.addValue(value);
  }
  
  export async function click(element: WebdriverIO.Element) {
    await element.scrollIntoView();
    await element.click();
  }
  
  export async function clearField(element: WebdriverIO.Element) {
    await click(element);
    while ((await element.getValue()).length) {
      await element.setValue("");
      //browser.keys("Delete")
    }
  }
  
  