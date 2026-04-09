import {test,expect} from "@playwright/test"
import { Checkout_page } from "../pages/CheckoutPage"
import { Cart_Page } from "../pages/CartPage"
import { ProductsPage } from "../pages/ProductPage"
import { InventoryPage } from "../pages/InventoryPage"
import { Website_Urls } from "../Constants/const_data"

test.describe("Checkout Functionality",async()=>{
     test.beforeEach(async({page})=>{
            await page.goto(Website_Urls.INVENTORY_PAGE);
    })
    test("Doing Checkout action to place an orders.",async({page})=>
    {
        var array_pro:string[]=['Sauce Labs Bike Light','Test.allTheThings() T-Shirt (Red)','Sauce Labs Onesie'];
        const products_obj=new ProductsPage(page);
        const inventory_Obj = new InventoryPage(page);
        const cart_obj=new Cart_Page(page);
        const checkout_obj=new Checkout_page(page);
        await products_obj.adding_Product_toCart(array_pro);
        await inventory_Obj.Navigating_to_CartPage();
        await cart_obj.Clicking_on_Checkout();
        await checkout_obj.EnteringFirstName("dummyname");
        await checkout_obj.EnteringLastName("dummylast");
        await checkout_obj.EnteringZipCode("2345657");
        await checkout_obj.ClickingOnContinue();
        await checkout_obj.ClickingOnFinish();
        await page.waitForTimeout(5000);
        await expect(page.getByText("Thank you for your order!")).toBeVisible();
        await expect(page).toHaveURL(Website_Urls.CHECKOUT_COMPLETION);
    });
})