import { ShoppingCartComponent } from '../components/shoppingCart.component';
import { actions } from '../helpers/actions';
import { SortView } from '../views/sort.view';
import { SwipeOptions } from 'webdriverio';

export class ProductsPage {
  sortView: SortView;
  shoppingCartComponent: ShoppingCartComponent;

  constructor() {
    this.sortView = new SortView();
    this.shoppingCartComponent = new ShoppingCartComponent();
  }

  get productList(): ChainablePromiseElement {
    return $('~test-PRODUCTS');
  }
  get visibleProductsList(): ChainablePromiseArray {
    return $$('//android.widget.TextView[@content-desc="test-Item title"]');
  }

  get sortModalButton(): ChainablePromiseElement {
    return $('~test-Modal Selector Button');
  }

  getAddToCartButtonForProduct(productName: string): ChainablePromiseElement {
    return $(
      `//android.widget.TextView[@content-desc="test-Item title" and @text="${productName}"]/following-sibling::android.view.ViewGroup[@content-desc='test-ADD TO CART']`,
    );
  }
  getPriceForProduct(productName: string): ChainablePromiseElement {
    return $(
      `//android.widget.TextView[@content-desc="test-Item title" and @text="${productName}"]/following-sibling::android.widget.TextView[@content-desc='test-Price']`,
    );
  }

  findProductByText(productName: string): ChainablePromiseElement {
    return $(`//android.widget.TextView[@text="${productName}"]`);
  }

  getRemoveFromCartButtonForProduct(
    productName: string,
  ): ChainablePromiseElement {
    return $(
      `//android.widget.TextView[@content-desc="test-Item title" and @text="${productName}"]//following-sibling::android.view.ViewGroup[@content-desc='test-REMOVE']`,
    );
  }

  getItemByName(productName: string): ChainablePromiseElement {
    return $(`//android.widget.TextView[@text="${productName}"]`);
  }

  async addProductToCart(productName: string): Promise<void> {
    await actions.click(this.getAddToCartButtonForProduct(productName));
  }

  async getProductPrice(productName: string): Promise<string> {
    return await actions.getElementText(this.getPriceForProduct(productName));
  }

  async swipeProductsList(options: SwipeOptions): Promise<void> {
    const { direction, duration, percent } = options;
    await actions.swipe({
      direction,
      duration,
      percent,
      scrollableElement: this.productList,
    });
  }
  async openSortModal(): Promise<void> {
    await actions.click(this.sortModalButton);
  }

  async getFirstProductsName(): Promise<string> {
    const element: ChainablePromiseElement = this.visibleProductsList[0];
    return actions.getElementText(element);
  }
}
