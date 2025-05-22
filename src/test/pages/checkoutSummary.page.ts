import { Actions } from '../helpers/actions';
import { SwipeOptions } from 'webdriverio';

export class CheckoutSummaryPage {
  actions: Actions;
  constructor() {
    this.actions = new Actions();
  }
  get checkoutSummaryProductsList(): ChainablePromiseElement {
    return $('~test-CHECKOUT: OVERVIEW');
  }

  get finishCheckoutButton(): ChainablePromiseElement {
    return $('~test-FINISH');
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
  async swipeCheckoutList(options: SwipeOptions): Promise<void> {
    const { direction, duration, percent } = options;
    await this.actions.swipe({
      direction,
      duration,
      percent,
      scrollableElement: this.checkoutSummaryProductsList,
    });
  }

  async completeCheckout(): Promise<void> {
    await this.actions.click(this.finishCheckoutButton);
  }
}
