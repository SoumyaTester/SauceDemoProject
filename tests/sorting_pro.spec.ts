import {test,expect} from "@playwright/test"
import { Inventorypom } from "../pages/Inventory_Page"

test.describe("Products Sorting in Inventory Page",async()=>
{

    test(" sorting the products from A-Z ",async({page})=>{
        await page.goto("https://www.saucedemo.com/inventory.html");
        const sort1=new Inventorypom(page);
        await sort1.product_Sorting("a-z");
        const sortAZ:string[]=await page.locator(".inventory_item_name ").allInnerTexts();
        const sorted_products=sortAZ.sort();
        expect(sortAZ).toEqual(sorted_products);
    });
   test(" sorting the products from Z-A ",async({page})=>{
        await page.goto("https://www.saucedemo.com/inventory.html");
        const sort1=new Inventorypom(page);
        await sort1.product_Sorting("z-a");
        const sortZA:string[] =await page.locator(".inventory_item_name ").allInnerTexts();
        const sorted_products=sortZA.sort().reverse();
        expect(sortZA).toEqual(sorted_products);
    }); 
    test(" sorting the products from Low to High price ",async({page})=>{
        await page.goto("https://www.saucedemo.com/inventory.html");
        const sort1=new Inventorypom(page);
        await sort1.product_Sorting("low to high");
        const sortpriceLH:string[] =await page.locator(".inventory_item_price").allInnerTexts();
        console.log(sortpriceLH);
        const sorted_products=sortpriceLH.sort();
        expect(sortpriceLH).toEqual(sorted_products);
    });
    test(" sorting the products from High to Low price",async({page})=>{
        await page.goto("https://www.saucedemo.com/inventory.html");
        const sort1=new Inventorypom(page);
        await sort1.product_Sorting("high to low");
        const sortpriceHL:string[] =await page.locator(".inventory_item_price").allInnerTexts();
        console.log(sortpriceHL);
        const sorted_products=sortpriceHL.sort().reverse();
        expect(sortpriceHL).toEqual(sorted_products);
    });
})
