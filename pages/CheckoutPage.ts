import {Locator,Page} from "@playwright/test"
import { FirstNameField,LastNameField,Continue_button,Cancle_button,Finish_button,ZipCodeField,Backtohome_but } from "../objects/CheckoutPageObjects"
import { back_to_product_but } from "../objects/ProductsPageObject";
 
export class Checkout_page{
    readonly page:Page;
    readonly First_Name:Locator;
    readonly Last_Name:Locator;
    readonly Zip_Field;
    readonly But_Cancle:Locator;
    readonly But_Continue:Locator;
    readonly But_Finish:Locator;
    readonly BackHome_But:Locator;
    constructor(page:Page)
    {
        this.page=page;
        this.First_Name=page.locator(FirstNameField);
        this.Last_Name=page.locator(LastNameField);
        this.Zip_Field=page.getByPlaceholder(ZipCodeField);
        this.But_Cancle=page.locator(Cancle_button);
        this.But_Continue=page.locator(Continue_button);
        this.But_Finish=page.locator(Finish_button);
        this.BackHome_But=page.locator(Backtohome_but);
    }
    async EnteringFirstName(name:string)
    {
        await this.page.waitForTimeout(3000);
        this.First_Name.fill(name);
        return this;
    }
    async EnteringLastName(lastname:string)
    {
        await this.page.waitForTimeout(3000);
        this.Last_Name.fill(lastname);
        return this;
    }
    async EnteringZipCode(zipvalue:string)
    {
        await this.page.waitForTimeout(3000);
        this.Zip_Field.fill(zipvalue);
        return this;
    }
    async ClickingOnContinue()
    {
        this.But_Continue.click();
        return this;
    }
    async ClickingOnFinish()
    {
        this.But_Finish.click();
        return this;
    }
    async ClickingOnCancle()
    {
        this.But_Cancle.click();
        return this;
    }
    async ClickingOnBacktoHome()
    {
        this.BackHome_But.click();
        return this;
    }
}