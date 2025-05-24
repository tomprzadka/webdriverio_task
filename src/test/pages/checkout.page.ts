import { actions } from '../helpers/actions';

export class CheckoutPage {
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
    await actions.enterText(this.checkoutFirstNameInput, firstName);
  }
  async enterLastName(lastName: string): Promise<void> {
    await actions.enterText(this.checkoutLastNameInput, lastName);
  }
  async enterPostalCode(postalCode: string): Promise<void> {
    await actions.enterText(this.checkoutPostalCodeInput, postalCode);
  }
  async submitCheckoutForm(): Promise<void> {
    await actions.click(this.checkoutContinueButton);
  }

  async getErrorMessageText(): Promise<string> {
    return await actions.getElementText(this.checkoutErrorMessage);
  }
}
