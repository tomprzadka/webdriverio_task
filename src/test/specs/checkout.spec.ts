import { testUser } from '../../test-data/user.data';
import { SortOptions } from '../../views/sort.view';
import { Actions } from '../helpers/actions';
import { CheckoutPage } from '../pages/checkout.page';
import { LoginPage } from '../pages/login.page';
import { ProductsPage } from '../pages/products.page';
import { ShoppingCartPage } from '../pages/shoppingCart.page';

describe('Checkout process:: User should be able to', function () {
  let loginPage: LoginPage;
  let productPage: ProductsPage;
  let shoppingCartPage: ShoppingCartPage;
  let actions: Actions;
  let checkoutPage: CheckoutPage;

  const desiredProduct = 'Sauce Labs Fleece Jacket';

  before('setup', async () => {
    loginPage = new LoginPage();
    productPage = new ProductsPage();
    shoppingCartPage = new ShoppingCartPage();
    actions = new Actions();
    checkoutPage = new CheckoutPage();
    await loginPage.login(testUser);
  });

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
  it('open shopping cart, remove the product and verify the update.', async () => {
    const extraProduct = 'Sauce Labs Bolt T-Shirt';
    await productPage.addProductToCart(extraProduct);
    await productPage.shoppingCartComponent.openShoppingCart();
    const numberOfItemsInCart = await shoppingCartPage.getNumberOfItemsInCart();
    await shoppingCartPage.removeItemFromCart(extraProduct);
    const numberOfItemsAfterRemoval =
      await shoppingCartPage.getNumberOfItemsInCart();
    await expect(numberOfItemsInCart).not.toEqual(numberOfItemsAfterRemoval);
  });
  it('navigate to the payment screen.', async () => {
    await shoppingCartPage.openCheckout();
    await expect(actions.waitForDisplayed(checkoutPage.checkoutForm));
  });
  it('see that first name is required on submitting empty checkout form', async () => {
    const expectedErrorMessage = 'First Name is required';
    await checkoutPage.submitCheckoutForm();
    const receivedErrorMessage = await checkoutPage.getErrorMessageText();
    expect(receivedErrorMessage).toEqual(expectedErrorMessage);
  });
  it('see that last name is required on submitting checkout form with only first name provided', async () => {
    const expectedErrorMessage = 'Last Name is required';
    await checkoutPage.enterFirstName('Test');
    await checkoutPage.submitCheckoutForm();
    const receivedErrorMessage = await checkoutPage.getErrorMessageText();
    expect(receivedErrorMessage).toEqual(expectedErrorMessage);
  });
  it('see that zip/postal code is required on submitting checkout form with no postal code provided', async () => {
    const expectedErrorMessage = 'Postal Code is required';
    await checkoutPage.enterLastName('User');
    await checkoutPage.submitCheckoutForm();
    const receivedErrorMessage = await checkoutPage.getErrorMessageText();
    expect(receivedErrorMessage).toEqual(expectedErrorMessage);
  });
  it('ensure the Checkout screen displays correct order details.', async () => {
    await checkoutPage.enterPostalCode('1234');
    await checkoutPage.submitCheckoutForm();
  });
  it('place the order and complete the purchase .', async () => {});
});
