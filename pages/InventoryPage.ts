import {Locator, Page} from "@playwright/test"
import { list_of_products,cart_button,sorting_products,menu_button,products_price,shopping_cart_badge } from "../objects/InventoryObjects";
export class  InventoryPage
{
    private readonly page: Page;
    private readonly Product_List : Locator;
    private readonly Cart_but : Locator;
    private readonly Sort_Products : Locator;
    private readonly Menubox : Locator;
    private readonly Price_Products : Locator;
    private readonly Cart_Badge:Locator; 
    constructor(page:Page)
    {
       this.page =page; 
       this.Product_List = page.locator(list_of_products);
       this.Cart_but =page.locator(cart_button);
       this.Sort_Products=page.locator(sorting_products);
       this.Menubox=page.locator(menu_button);
       this.Price_Products=page.locator(products_price);
       this.Cart_Badge=page.locator(shopping_cart_badge);
    }
    async Getting_Products_list()
    {
        const all_products=await this.Product_List.allInnerTexts();
        return all_products 
    }
    async Navigating_to_CartPage()
    {
        await this.Cart_but.click();
        return this
    }
    async Sorting_Products_Inventory(option:string)
    {
        await this.Sort_Products.click();
        switch(option)
        {
            case "Name A-Z":
                await this.Sort_Products.selectOption("Name (A to Z)");
                break
            case "Name Z-A":
                await this.Sort_Products.selectOption("Name (Z to A)");
                break
            case "Price low to high":
                await this.Sort_Products.selectOption("Price (low to high)");
                break
            case "Price high to low":
                await this.Sort_Products.selectOption("Price (high to low)");
                break
            default:
                throw new Error("Invalid option");
        }
    }
    async Getting_Products_Price()
    {
        const prices:string[]=await this.Price_Products.allInnerTexts();
        console.log(prices);
        return this
    }
     async Adding_Product_toCart(Productname:string)
     {
        const lowerProductName=Productname.toLowerCase();
        const updated_productName1=lowerProductName.replace(/\s+/g,'-'); //'/\s+/g' allspaces
        const updated_productName2=updated_productName1+"']";
        await this.page.locator("[data-test$='add-to-cart-"+updated_productName2).click();
        const shopping_badge_count=await this.Cart_Badge.innerText();
        return shopping_badge_count
     }
}