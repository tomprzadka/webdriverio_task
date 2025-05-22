import { Actions } from '../helpers/actions';

export class CheckoutPage {
  actions: Actions;
  constructor() {
    this.actions = new Actions();
  }

  get checkoutForm(): ChainablePromiseElement {
    return $('~test-Checkout: Your Info');
  }

  get checkoutFirstNameInput(): ChainablePromiseElement {
    return $('~test-First Name');
  }

  get checkoutLastNameInput(): ChainablePromiseElement {
    return $('~test-Last Name');
  }

  get checkoutPostalCodeInput(): ChainablePromiseElement {
    return $('~test-Zip/Postal Code');
  }

  get checkoutContinueButton(): ChainablePromiseElement {
    return $('~test-CONTINUE');
  }

  get checkoutErrorMessage(): ChainablePromiseElement {
    return $(
      '//android.view.ViewGroup[@content-desc="test-Error message"]/android.widget.TextView',
    );
  }

  async enterFirstName(firstName: string): Promise<void> {
    await this.actions.enterText(this.checkoutFirstNameInput, firstName);
  }
  async enterLastName(lastName: string): Promise<void> {
    await this.actions.enterText(this.checkoutLastNameInput, lastName);
  }
  async enterPostalCode(postalCode: string): Promise<void> {
    await this.actions.enterText(this.checkoutPostalCodeInput, postalCode);
  }
  async submitCheckoutForm(): Promise<void> {
    await this.actions.click(this.checkoutContinueButton);
  }

  async getErrorMessageText(): Promise<string> {
    return this.actions.getElementText(this.checkoutErrorMessage);
  }
}
