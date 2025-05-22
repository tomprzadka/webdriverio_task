import { ShoppingCartComponent } from '../components/shoppingCart.component';
import { Actions } from '../helpers/actions';

export class ShoppingCartPage {
  actions: Actions;
  shoppingCartComponent: ShoppingCartComponent;
  constructor() {
    this.actions = new Actions();
    this.shoppingCartComponent = new ShoppingCartComponent();
  }
  get itemsList(): ChainablePromiseElement {
    return $('~test-Cart Content');
  }

  get itemsInCart(): ChainablePromiseArray {
    return $$('//android.view.ViewGroup[@content-desc="test-Item"]');
  }

  getRemoveButtonForItem(productName: string): ChainablePromiseElement {
    return $(`//android.widget.TextView[@text="${productName}"]/parent::android.view.ViewGroup/parent::android.view.ViewGroup//android.view.ViewGroup[@content-desc="test-REMOVE"]
`);
  }

  async getNumberOfItemsInCart(): Promise<number> {
    return this.actions.getElementCount(this.itemsInCart);
  }

  async removeItemFromCart(productName: string): Promise<void> {
    await this.actions.click(this.getRemoveButtonForItem(productName));
  }
}
