import { Actions } from '../helpers/actions';

export class CheckoutSummaryPage {
  actions: Actions;
  constructor() {
    this.actions = new Actions();
  }

  getProductTitleName(productName: string): ChainablePromiseElement {
    return $(
      `//android.view.ViewGroup[@content-desc="test-Description"]/android.widget.TextView[@text="${productName}"]`,
    );
  }
  getProductPriceTag(productName: string): ChainablePromiseElement {
    return $(
      `//android.widget.TextView[@text="${productName}"]/../../..//*[@content-desc="test-Price"]/android.widget.TextView`,
    );
  }

  async getProductName(productName: string): Promise<string> {
    return this.actions.getElementText(this.getProductTitleName(productName));
  }

  async getProductPrice(productName: string): Promise<string> {
    return this.actions.getElementText(this.getProductPriceTag(productName));
  }
}
