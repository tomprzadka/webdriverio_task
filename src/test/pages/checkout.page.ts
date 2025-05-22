import { Actions } from '../helpers/actions';

export class CheckoutPage {
  actions: Actions;
  constructor() {
    this.actions = new Actions();
  }

  get checkoutForm(): ChainablePromiseElement {
    return $('~test-Checkout: Your Info');
  }
}
