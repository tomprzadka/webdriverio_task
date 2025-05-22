import { Actions } from '../helpers/actions';

export class CheckoutCompletePage {
  actions: Actions;

  constructor() {
    this.actions = new Actions();
  }

  get checkoutCompletedScrollView(): ChainablePromiseElement {
    return $('~test-CHECKOUT: COMPLETE!');
  }

  get backHomeButton(): ChainablePromiseElement {
    return $('~test-BACK HOME');
  }

  async goBackHome(): Promise<void> {
    await this.actions.click(this.backHomeButton);
  }
}
