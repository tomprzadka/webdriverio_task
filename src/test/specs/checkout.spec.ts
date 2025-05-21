import { testUser } from '../../test-data/user.data';
import { LoginPage } from '../pages/login.page';

describe('Checkout process:: User should be able to', function () {
  let loginPage: LoginPage;

  before('setup', async () => {
    loginPage = new LoginPage();
  });
  it('add the product to the shopping cart.', async () => {
    await loginPage.login(testUser);
  });
  it('should sort items by name from Z to A', async () => {});
  it('should sort items by price from low to high ', async () => {});
  it('open shopping cart, remove the product and verify the update.', async () => {});
  it('navigate to the payment screen.', async () => {});
  it('see that first name is required on submitting empty checkout form', async () => {});
  it('see that last name is required on submitting empty checkout form', async () => {});
  it('see that zip/postal code is required on submitting empty checkout form', async () => {});
  it('ensure the Checkout screen displays correct order details.', async () => {});
  it('place the order and complete the purchase .', async () => {});
  it('Add the product to the shopping cart.', async () => {});
});
