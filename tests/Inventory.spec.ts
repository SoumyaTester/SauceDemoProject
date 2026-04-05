import {test,expect} from "@playwright/test"
import { Inventorypom } from "../pages/Inventory_Page"

test.describe("Inventory Page functionality",async()=>{

    test("Navigate to about page from inventory page",async({page})=>{
        
        await page.goto("https://www.saucedemo.com/inventory.html");
        const inv_obj1=new Inventorypom(page);
        //naviagting to the about page from inventory page.
        await inv_obj1.clicking_menu('about');
        await expect(page).toHaveURL("https://saucelabs.com/");
    });
    test("Navigate to cart page from inventory page",async({page})=>{
        
        await page.goto("https://www.saucedemo.com/inventory.html");
        const inv_obj2=new Inventorypom(page);
        //naviagting to the about page from inventory page.
        await inv_obj2.clicking_on_cart();
        await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
    });
    test("clicking on logout button",async({page})=>{
        
        await page.goto("https://www.saucedemo.com/inventory.html");
        const inv_obj3=new Inventorypom(page);
        //naviagting to the about page from inventory page.
        await page.waitForTimeout(5000);
        await inv_obj3.clicking_menu('logout');
        await expect(page).toHaveURL("https://www.saucedemo.com/")
        await page.waitForTimeout(5000);
    });
});
