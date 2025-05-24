import { actions } from '../helpers/actions';

export class CheckoutCompletePage {
  get checkoutCompletedScrollView(): ChainablePromiseElement {
    return $('~test-CHECKOUT: COMPLETE!');
  }

  get backHomeButton(): ChainablePromiseElement {
    return $('~test-BACK HOME');
  }

  async goBackHome(): Promise<void> {
    await actions.click(this.backHomeButton);
  }
}
