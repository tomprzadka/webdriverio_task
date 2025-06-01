import { actions } from '../helpers/actions';
import { SwipeOptions } from 'webdriverio';

export class CheckoutSummaryPage {
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
      // `//android.widget.TextView[@text="${productName}"]/../../..//*[@content-desc="test-Price"]/android.widget.TextView`,
      `//android.widget.TextView[@text="${productName}"]/ancestor::*//*[@content-desc="test-Price"]/android.widget.TextView`,
    );
  }

  async getProductName(productName: string): Promise<string> {
    return actions.getElementText(this.getProductTitleName(productName));
  }

  async getProductPrice(productName: string): Promise<string> {
    return actions.getElementText(this.getProductPriceTag(productName));
  }
  async swipeCheckoutList(options: SwipeOptions): Promise<void> {
    const { direction, duration, percent } = options;
    await actions.swipe({
      direction,
      duration,
      percent,
      scrollableElement: this.checkoutSummaryProductsList,
    });
  }

  async completeCheckout(): Promise<void> {
    await actions.click(this.finishCheckoutButton);
  }
}
