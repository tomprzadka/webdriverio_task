import { ShoppingCartComponent } from '../components/shoppingCart.component';
import { actions } from '../helpers/actions';

export class ShoppingCartPage {
  shoppingCartComponent: ShoppingCartComponent;
  constructor() {
    this.shoppingCartComponent = new ShoppingCartComponent();
  }
  get itemsList(): ChainablePromiseElement {
    return $('~test-Cart Content');
  }

  get checkoutButton(): ChainablePromiseElement {
    return $('~test-CHECKOUT');
  }

  get itemsInCart(): ChainablePromiseArray {
    return $$('//android.view.ViewGroup[@content-desc="test-Item"]');
  }

  getRemoveButtonForItem(productName: string): ChainablePromiseElement {
    return $(`//android.widget.TextView[@text="${productName}"]/parent::android.view.ViewGroup/parent::android.view.ViewGroup//android.view.ViewGroup[@content-desc="test-REMOVE"]
`);
  }

  async getNumberOfItemsInCart(): Promise<number> {
    return actions.getElementCount(this.itemsInCart);
  }

  async removeItemFromCart(productName: string): Promise<void> {
    await actions.click(this.getRemoveButtonForItem(productName));
  }

  async openCheckout(): Promise<void> {
    await actions.click(this.checkoutButton);
  }
}
