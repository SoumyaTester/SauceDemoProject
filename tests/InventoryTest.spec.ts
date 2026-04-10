import {test,expect} from "../fixtures/dependencyFixtures"
import { InventoryPage } from "../pages/InventoryPage";
import { Sorting_Products_In_Inventory, Website_Urls } from "../Constants/const_data";

test.describe("Inventory Functionality",async()=>{
    test.beforeEach(async({page})=>{
        await page.goto(Website_Urls.INVENTORY_PAGE);
    })
    test("Getting the products list from Inventory page",async({page,inventoryObj})=>
    {
        const products_list=await inventoryObj.Getting_Products_list();
        console.log(products_list);
        const products_count=products_list.length;
        expect(await page.locator(".inventory_list  .inventory_item").count()).toEqual(products_count);
    })
    test("Sorting products in Inventory Page Alphabetical order from A-Z ",async({page,inventoryObj})=>
    {
        await inventoryObj.Sorting_Products_Inventory(Sorting_Products_In_Inventory.SORT_ALPHA_ASCENDING);
        await inventoryObj.Getting_Products_list();
        const sortAZ:string[]=await page.locator(".inventory_item_name ").allInnerTexts();
        const sorted_products=sortAZ.sort();
        expect(sortAZ).toEqual(sorted_products);
    })
    test("Sorting products in Inventory Page Alphabetical order from Z-A ",async({page,inventoryObj})=>
    {
        await inventoryObj.Sorting_Products_Inventory(Sorting_Products_In_Inventory.SORT_ALPHA_DESCENDING);
        await inventoryObj.Getting_Products_list();
        const sortZA:string[] =await page.locator(".inventory_item_name ").allInnerTexts();
        const sorted_products=sortZA.sort().reverse();
        expect(sortZA).toEqual(sorted_products);

    })
    test("Sorting products in Inventory Page from Low to High Price ",async({page,inventoryObj})=>
    {
        await inventoryObj.Sorting_Products_Inventory(Sorting_Products_In_Inventory.SORT_PRICE_ASCENDING);
        await inventoryObj.Getting_Products_Price();
        const sortpriceLH:string[] =await page.locator(".inventory_item_price").allInnerTexts();
        const sorted_products=sortpriceLH.sort();
        expect(sortpriceLH).toEqual(sorted_products);
    })
    test("Sorting products in Inventory Page from High to Low Price ",async({page,inventoryObj})=>
    {
        await inventoryObj.Sorting_Products_Inventory(Sorting_Products_In_Inventory.SORT_PRICE_DESCENDING);
        await inventoryObj.Getting_Products_Price();
        const sortpriceHL:string[] =await page.locator(".inventory_item_price").allInnerTexts();
        const sorted_products=sortpriceHL.sort().reverse();
        expect(sortpriceHL).toEqual(sorted_products);
    })
    test("Navigating to the cart page from inventory page",async({page,inventoryObj})=>
    {
        await inventoryObj.Navigating_to_CartPage();
        await expect(page).toHaveURL(Website_Urls.CARTPAGE);
    })


})