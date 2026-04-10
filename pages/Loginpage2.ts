import { Page,Locator } from "@playwright/test";
import {Username_Data, Password_Data, LoginButton_Data} from "../objects/LoginObjects"
import { LoginData } from "../Constants/const_data";
export class LoginPage 
{
  private readonly page:Page;
  private readonly username : Locator;
  private readonly password : Locator;
  private readonly login_but : Locator;
  constructor(page:Page)
  {
    this.page = page;
    this.username = page.locator(Username_Data);
    this.password = page.locator(Password_Data);
    this.login_but = page.locator(LoginButton_Data);
  }
  async Entering_Username()
  {
    await this.username.fill(LoginData.lOGIN_USERNAME);
    return this;
  }
  async Entering_Password()
  {
    await this.password.fill(LoginData.lOGIN_PASSWORD);
    return this;
  }
  async Entering_Invalid_Username()
  {
    await this.username.fill(LoginData.LOGIN_INVALID_USERNAME);
    return this;
  }
  async Entering_Invalid_Password()
  {
    await this.password.fill(LoginData.lOGIN_INVALID_PASSWORD);
    return this;
  }

  async clicking_on_LoginButton()
  {
    await this.login_but.click();
    return this;
  }
}

