import {Locator,Page} from "@playwright/test"
import { add_to_cart_button,back_to_product_but} from "../objects/ProductsPageObject"
import { list_of_products } from "../objects/InventoryObjects";

export class ProductsPage{
    readonly ATC_but:Locator
    readonly BTP_but:Locator;
    readonly page:Page
    readonly all_products:Locator;
    constructor(page:Page)
    {
        this.page=page;
        this.ATC_but=this.page.locator(add_to_cart_button);
        this.BTP_but=this.page.locator(back_to_product_but);
        this.all_products=page.locator(list_of_products);
    }
    async Clicking_on_Addtocart(product_name:string)
    {
        await this.ATC_but.click();
        return this;
    }
    async Clicking_on_Backtoproduct()
    {
        await this.BTP_but.click()
        return this;
    }

    async adding_Product_toCart(product_arr:string[])
    {
        const arr_product_count=product_arr.length;
        console.log("Given number of products",arr_product_count);
        const products_List_Inventory= await this.all_products.allTextContents();
        const all_products_count=products_List_Inventory.length;
        console.log("all number of products",all_products_count);
        //console.log("All products",products_List_Inventory)

        for(let i=0;i<all_products_count;i++)
        {
            for(let j=0;j<arr_product_count;j++)
            {
                if(products_List_Inventory[i] === product_arr[j])
                {
                    await this.page.getByText(product_arr[j]).click();
                    await this.Clicking_on_Addtocart(product_arr[j]);
                    await this.Clicking_on_Backtoproduct();
                }

            }
        }
    }
}