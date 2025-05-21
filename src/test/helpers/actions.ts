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
}
