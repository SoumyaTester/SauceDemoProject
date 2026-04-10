import {test,expect} from "../fixtures/dependencyFixtures"
import { Checkout_page } from "../pages/CheckoutPage"
import { Cart_Page } from "../pages/CartPage"
import { ProductsPage } from "../pages/ProductPage"
import { InventoryPage } from "../pages/InventoryPage"
import { Website_Urls } from "../Constants/const_data"

test.describe("Checkout Functionality",async()=>{
     test.beforeEach(async({page})=>{
            await page.goto(Website_Urls.INVENTORY_PAGE);
    })
    test("Doing Checkout action to place orders.",async({page,inventoryObj,cartObj,productObj,checkoutObj})=>
    {
        var array_pro:string[]=['Sauce Labs Bike Light','Test.allTheThings() T-Shirt (Red)','Sauce Labs Onesie'];
        await productObj.adding_Product_toCart(array_pro);
        await inventoryObj.Navigating_to_CartPage();
        await cartObj.Clicking_on_Checkout();
        await checkoutObj.EnteringFirstName("dummyname");
        await checkoutObj.EnteringLastName("dummylast");
        await checkoutObj.EnteringZipCode("2345657");
        await checkoutObj.ClickingOnContinue();
        await checkoutObj.ClickingOnFinish();
        await page.waitForTimeout(5000);
        await expect(page.getByText("Thank you for your order!")).toBeVisible();
        await expect(page).toHaveURL(Website_Urls.CHECKOUT_COMPLETION);
    });
})