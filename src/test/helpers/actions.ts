import { SwipeOptions } from 'webdriverio';

export class Actions {
  async click(element: ChainablePromiseElement): Promise<void> {
    await element.click();
  }

  async enterText(
    element: ChainablePromiseElement,
    text: string,
  ): Promise<void> {
    await element.click();
    await element.clearValue();
    await element.setValue(text);
  }

  async swipe(options: SwipeOptions): Promise<void> {
    await driver.swipe(options);
  }

  async getElementText(element: ChainablePromiseElement): Promise<string> {
    const elementText = await element.getText();
    return elementText;
  }

  async waitForElementToBeHidden(
    element: ChainablePromiseElement,
  ): Promise<void> {
    await driver.waitUntil(async () => {
      const isNotDisplayed = await element.isDisplayed({ inverse: true });
      if (!isNotDisplayed) return true;
      else return false;
    });
  }

  async getElementCount(elements: ChainablePromiseArray): Promise<number> {
    return await elements.length;
  }
}
