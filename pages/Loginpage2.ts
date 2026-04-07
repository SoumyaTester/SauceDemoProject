import { Page,Locator } from "@playwright/test";
import {Username_Data, Password_Data, LoginButton_Data} from "../objects/LoginObjects"
export class LoginPage 
{
  readonly page:Page;
  readonly username : Locator;
  readonly password : Locator;
  readonly login_but : Locator;
  constructor(page:Page)
  {
    this.page = page;
    this.username = page.locator(Username_Data);
    this.password = page.locator(Password_Data);
    this.login_but = page.locator(LoginButton_Data);
  }
  async Entering_Username()
  {
    await this.username.fill("standard_user");
    return this;
  }
  async Entering_Password()
  {
    await this.password.fill("secret_sauce");
    return this;
  }
  async clicking_on_LoginButton()
  {
    await this.login_but.click();
    return this;
  }
}

