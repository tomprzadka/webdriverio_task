import { SwipeOptions } from 'webdriverio';

export const actions = {
  async click(element: WebdriverIO.Element): Promise<void> {
    await element.click();
  },
  async enterText(element: WebdriverIO.Element, text: string): Promise<void> {
    await element.setValue('');
    await element.setValue(text);
  },
  async swipe(options: SwipeOptions): Promise<void> {
    await driver.swipe(options);
  },
  async getElementText(element: WebdriverIO.Element): Promise<string> {
    const elementText = await element.getText();
    return elementText;
  },
  async waitUntilHidden(element: WebdriverIO.Element): Promise<void> {
    await element.waitForDisplayed({ reverse: true });
  },
  async waitUntilDisplayed(element: WebdriverIO.Element): Promise<void> {
    await element.waitForDisplayed();
  },
  async getElementCount(elements: WebdriverIO.ElementArray): Promise<number> {
    return elements.length;
  },
};
