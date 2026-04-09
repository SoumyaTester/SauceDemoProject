import { test, expect } from "@playwright/test";
import { ProductsPage } from "../pages/ProductPage";
import { InventoryPage } from "../pages/InventoryPage";
import { Website_Urls } from "../Constants/const_data";
import { Cart_Page } from "../pages/CartPage";

test.describe("Add_to_Product Functionality", async () => {
    test.beforeEach("Opening the Inventory Page",async ({ page }) => {
        await page.goto(Website_Urls.INVENTORY_PAGE);
    });
    test("Adding product to the cart from inventory page",async({page})=>{
        var cart_badge_number:string="0";
        const inventory_Obj = new InventoryPage(page);
        const cart_obj=new Cart_Page(page);
        const products_list = await inventory_Obj.Getting_Products_list();
        console.log(products_list);
        for (let product of products_list) 
        {
            cart_badge_number=await inventory_Obj.Adding_Product_toCart(product);
        }
        console.log("Cart Badge number",cart_badge_number);
        await inventory_Obj.Navigating_to_CartPage();
        const cart_Products_count=await cart_obj.Getting_ProductsList_from_CartPage();
        expect((await page.locator(".inventory_item_name").allInnerTexts()).length).toEqual(cart_Products_count);
        expect(await page.locator(".shopping_cart_badge").innerText()).toEqual(cart_badge_number);
    });
    
    test("Adding product to the cart from Product page",async({page})=>{
        var array_pro:string[]=['Sauce Labs Bike Light','Test.allTheThings() T-Shirt (Red)','Sauce Labs Onesie'];
        const products_obj=new ProductsPage(page);
        const inventory_Obj = new InventoryPage(page);
        await products_obj.adding_Product_toCart(array_pro);
        await inventory_Obj.Navigating_to_CartPage(); 
        expect(await page.locator(".shopping_cart_badge").innerText()).toEqual(array_pro.length.toString());
        const cart_products:string[] =await page.locator('.inventory_item_name').allInnerTexts();
        console.log(cart_products);
        for(const product of cart_products)
        {
                expect(array_pro).toContain(product);
        }
    })
})
