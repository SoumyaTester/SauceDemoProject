import { Locator,Page } from "@playwright/test";
import { Cart_Products_list,continueShopping_but,checkout_but,Cart_removeBut } from "../objects/CartPageObjects";
export class Cart_Page{
    readonly page:Page;
    readonly products_in_Cart:Locator;
    readonly removeBut_in_Cart:Locator;
    readonly continueShopping_but_Cart:Locator;
    readonly checkout_but_Cart:Locator;
    constructor(page:Page)
    {
        this.page=page;
        this.products_in_Cart=page.locator(Cart_Products_list);
        this.removeBut_in_Cart=page.locator(Cart_removeBut);
        this.continueShopping_but_Cart=page.locator(continueShopping_but);
        this.checkout_but_Cart=page.locator(checkout_but);
    }
    async Getting_ProductsList_from_CartPage()
    {
        const products_cart=await this.products_in_Cart.allInnerTexts();
        const products_cart_count:number=products_cart.length;
        console.log("No of products in Cart Page",products_cart_count);
        return products_cart_count;
    }
    async Clicking_on_Checkout()
    {
        await this.checkout_but_Cart.click();
        return this;
    }
    async Clicking_on_BackToPro()
    {
        await this.continueShopping_but_Cart.click();
        return this;
    }
    async Clicking_On_Remove()
    {
        await this.removeBut_in_Cart.click();
    }
}