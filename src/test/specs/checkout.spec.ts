import { testUser } from '../../test-data/user.data';
import { SortOptions } from '../../views/sort.view';
import { LoginPage } from '../pages/login.page';
import { ProductsPage } from '../pages/products.page';

describe('Checkout process:: User should be able to', function () {
  let loginPage: LoginPage;
  let productPage: ProductsPage;

  before('setup', async () => {
    loginPage = new LoginPage();
    productPage = new ProductsPage();
    await loginPage.login(testUser);
  });

  const desiredProduct = 'Sauce Labs Fleece Jacket';
  it('should sort items by name from Z to A', async () => {
    const firstItemBeforeSorting = await productPage.getFirstProductsName();
    await productPage.openSortModal();
    await productPage.sortView.selectSortOption(SortOptions.NAME_ZA);
    const firstItemAfterSorting = await productPage.getFirstProductsName();
    await expect(firstItemBeforeSorting).not.toEqual(firstItemAfterSorting);
  });
  it('should sort items by price from low to high ', async () => {
    const firstItemBeforeSorting = await productPage.getFirstProductsName();
    await productPage.openSortModal();
    await productPage.sortView.selectSortOption(SortOptions.PRICE_LOW_HIGH);
    const firstItemAfterSorting = await productPage.getFirstProductsName();
    await expect(firstItemBeforeSorting).not.toEqual(firstItemAfterSorting);
  });
  it(`add the product to the shopping cart. - add '${desiredProduct}'`, async () => {
    await productPage.openSortModal();
    await productPage.sortView.selectSortOption(SortOptions.NAME_AZ);
    await productPage.swipeProductsList({
      duration: 300,
      direction: 'up',
      percent: 0.2,
    });
    await productPage.addProductToCart(desiredProduct);
    await expect(
      productPage.getRemoveFromCartButtonForProduct(desiredProduct),
    ).toBeDisplayed();
  });
  it('open shopping cart, remove the product and verify the update.', async () => {});
  it('navigate to the payment screen.', async () => {});
  it('see that first name is required on submitting empty checkout form', async () => {});
  it('see that last name is required on submitting empty checkout form', async () => {});
  it('see that zip/postal code is required on submitting empty checkout form', async () => {});
  it('ensure the Checkout screen displays correct order details.', async () => {});
  it('place the order and complete the purchase .', async () => {});
});
