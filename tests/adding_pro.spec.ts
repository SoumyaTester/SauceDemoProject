import {test,expect} from '@playwright/test'
import { Inventorypom } from '../pages/Inventory_Page'

test("Adding product to the cart",async({page})=>{
        var array_pro:string[]=['Sauce Labs Bike Light','Test.allTheThings() T-Shirt (Red)','Sauce Labs Onesie'];
        await page.goto("https://www.saucedemo.com/inventory.html");
        const inv_obj=new Inventorypom(page);
        await inv_obj.clicking_and_adding_Product(array_pro);
        await inv_obj.clicking_on_cart();
        expect(await page.locator(".shopping_cart_badge").innerText()).toEqual(array_pro.length.toString());
        const cart_products:string[] =await page.locator('.inventory_item_name').allInnerTexts();
        console.log(cart_products);
        for(const product of cart_products)
        {
                expect(array_pro).toContain(product);
        }
});