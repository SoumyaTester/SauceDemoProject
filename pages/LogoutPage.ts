import {Page, Locator} from "@playwright/test"
import { logout_link,menu_button } from "../objects/LogoutObjects";
export class Logout_Page
{
    readonly page:Page;
    readonly menu:Locator;
    readonly logout:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.menu=this.page.locator(menu_button);
        this.logout=this.page.locator(logout_link);
    }
    async Clicking_On_MenuButton()
    {
        await this.menu.click();
        return this;
    }
    async Clicking_On_Logout_Button()
    {
        await this.logout.click();
        return this;
    }

}