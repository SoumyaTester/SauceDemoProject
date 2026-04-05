import {Page} from "@playwright/test";
export class Loginpom
{
    private page:Page;
    private username='#user-name';
    private password='#password';
    private login_but='#login-button';
    
    constructor(page:Page)
    {
       this.page=page; 
    }
    async navigating_to_loginpage()
    {
         await this.page.goto("https://www.saucedemo.com/",{ waitUntil:'domcontentloaded'});
    }

    async enteringCredentials(user:string,pass:string)
    {
        await this.page.locator(this.username).fill(user);
        await this.page.locator(this.password).fill(pass);
        await this.page.locator(this.login_but).click();
    }


}
