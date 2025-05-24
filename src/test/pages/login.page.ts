import { LoginUser } from '../../models/user.model';
import { actions } from '../helpers/actions';

export class LoginPage {
  get usernameInput(): ChainablePromiseElement {
    return $('~test-Username');
  }

  get userPasswordInput(): ChainablePromiseElement {
    return $('~test-Password');
  }

  get loginButton(): ChainablePromiseElement {
    return $('~test-LOGIN');
  }

  async login(user: LoginUser): Promise<void> {
    await actions.enterText(this.usernameInput, user.username);
    await actions.enterText(this.userPasswordInput, user.password);
    await actions.click(this.loginButton);
  }
}
