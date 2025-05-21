describe('Checkout process:: User should be able to', function () {
  it('add the product to the shopping cart.', async () => {
    const usernameInput = driver.$('~test-Username');
    await usernameInput.addValue('standard_user');
    const usernamePassword = driver.$('~test-Password');
    await usernamePassword.addValue('secret_sauce');
    const loginButton = driver.$('~test-LOGIN');
    await loginButton.click();
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
