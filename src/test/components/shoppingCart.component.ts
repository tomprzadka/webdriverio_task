import { Actions } from '../helpers/actions';

export class ShoppingCartComponent {
  actions: Actions;

  constructor() {
    this.actions = new Actions();
  }
  get shoppingCartIcon(): ChainablePromiseElement {
    return $('~test-Cart');
  }
  getItemCountInShoppingCart(count: number): ChainablePromiseElement {
    return $(
      `//android.view.ViewGroup[@content-desc='test-Cart']//android.widget.TextView[@text='${count}']`,
    );
  }

  async openShoppingCart(): Promise<void> {
    await this.actions.click(this.shoppingCartIcon);
  }
}
