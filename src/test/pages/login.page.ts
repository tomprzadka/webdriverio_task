import { LoginUser } from '../../models/user.model';
import { Actions } from '../helpers/actions';

export class LoginPage {
  actions: Actions;

  constructor() {
    this.actions = new Actions();
  }

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
    await this.actions.enterText(this.usernameInput, user.username);
    await this.actions.enterText(this.userPasswordInput, user.password);
    await this.actions.click(this.loginButton);
  }
}
