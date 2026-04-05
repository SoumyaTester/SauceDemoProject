import { Locator, Page } from "@playwright/test"
export class Inventorypom
{
    page:Page;
    menu_button="#react-burger-menu-btn";
    menu_allitems_option='#inventory_sidebar_link';
    menu_about_option='#about_sidebar_link';
    menu_logout_option='#logout_sidebar_link';
    menu_reset_option='#reset_sidebar_link';
    close_menu='#react-burger-cross-btn';
    cart_button=".shopping_cart_link";
    filter_dropdown='.product_sort_container';
    all_product=".inventory_item_name ";
    addtocart_button="#add-to-cart";
    continueshoping_but="#continue-shopping";
    back_toproduct_but='#back-to-products';

    constructor(page:Page)
    {
        this.page=page;
    }

    async clicking_menu(option:any)
    {
        await this.page.locator(this.menu_button).click();
        if (option === "allitems")
        {
            await this.page.locator(this.menu_allitems_option).click();
        }
        else if(option === "about")
        {
            await this.page.locator(this.menu_about_option).click();
            await this.page.waitForTimeout(5000);
        }
        else if(option === "logout")
        {
            await this.page.locator(this.menu_logout_option).click();
        }
        else if(option === "reset")
        {
            await this.page.locator(this.menu_reset_option).click();
        }
        else
            console.log("invalid option");
    }

    async clicking_on_cart()
    {
        await this.page.locator(this.cart_button).click();
        await this.page.waitForTimeout(5000);
    }

    async product_Sorting(option:any)
    {
        await this.page.locator(this.filter_dropdown).click();
        if (option === "a-z")
        {
            await this.page.locator(this.filter_dropdown).selectOption('Name (A to Z)');
            await this.page.waitForTimeout(5000);
        }
        else if (option === "z-a")
        {
            await this.page.locator(this.filter_dropdown).selectOption('Name (Z to A)');
            await this.page.waitForTimeout(5000);
        }
        else if (option === "low to high")
        {
            await this.page.locator(this.filter_dropdown).selectOption('Price (low to high)');
            await this.page.waitForTimeout(5000);
        }
        else if (option === "high to low")
        {
            await this.page.locator(this.filter_dropdown).selectOption('Price (high to low)');
            await this.page.waitForTimeout(5000);
        }
        else
            console.log("Invalid option");
    }

    async clicking_and_adding_Product(product_arr:string[])
    {
        const arr_product_count=product_arr.length;
        console.log("Given number of products",arr_product_count);
        const all_products_list= await this.page.locator(this.all_product).allTextContents();
        const all_products_count=all_products_list.length;
        console.log("all number of products",all_products_count);
        //console.log("All products",all_products_list)

        for(let i=0;i<all_products_count;i++)
        {
            for(let j=0;j<arr_product_count;j++)
            {
                if(all_products_list[i] === product_arr[j])
                {
                    await this.page.getByText(product_arr[j]).click();
                    await this.page.locator(this.addtocart_button).click();
                    await this.page.locator(this.back_toproduct_but).click();
                }

            }
        }
    }

}