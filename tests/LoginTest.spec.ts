import {test,expect} from "@playwright/test"
import {LoginPage} from "../pages/Loginpage2"

test.use({storageState:undefined});
test.describe("Login Functionalty",async()=>{
    test.beforeEach(async({page})=>{
        await page.goto("https://www.saucedemo.com/");
    });
test("Verify the login functionalty with valid credentials",async({page})=>{
    const object=new LoginPage(page);
    await object.Entering_Username();
    await object.Entering_Password();
    await object.clicking_on_LoginButton();
    await expect(page).toHaveURL(/inventory/);
})

test("Verify the login functionalty with invalid credentials",async({page})=>{
    const object=new LoginPage(page);
    await object.Entering_Invalid_Username();
    await object.Entering_Invalid_Password();
    await object.clicking_on_LoginButton();
    await expect(page).not.toHaveURL(/inventory/);
})
})