import { actions } from '../helpers/actions';

export class ShoppingCartComponent {
  get shoppingCartIcon(): ChainablePromiseElement {
    return $('~test-Cart');
  }
  getItemCountInShoppingCart(count: number): ChainablePromiseElement {
    return $(
      `//android.view.ViewGroup[@content-desc='test-Cart']//android.widget.TextView[@text='${count}']`,
    );
  }

  async openShoppingCart(): Promise<void> {
    await actions.click(this.shoppingCartIcon);
  }
}
