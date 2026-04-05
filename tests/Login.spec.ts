import {test,expect} from "@playwright/test";
import {Loginpom} from "../pages/Login_Page";

test.use({storageState:undefined});

test.describe("Login Feature validation",()=>{
    test("Login with valid credentials",async({page})=>{

        const login1=new Loginpom(page);
        login1.navigating_to_loginpage();
        login1.enteringCredentials("standard_user","secret_sauce");
        await expect(page).toHaveURL(/inventory/);
        await page.waitForTimeout(5000);

    });
    test("Login with invalid credentials",async({page})=>{

        const login2=new Loginpom(page);
        login2.navigating_to_loginpage();
        login2.enteringCredentials("invalid","invalid");
        await expect(page).not.toHaveURL(/inventory/);
        await page.waitForTimeout(5000);

    });  
})
