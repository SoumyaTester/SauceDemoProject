import {test,expect} from "@playwright/test"
import {LoginPage} from "../pages/Loginpage2"

test.use({storageState:undefined});

test("Verify the login functionalty with valid credentials",async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    const object=new LoginPage(page);
    await object.Entering_Username();
    await object.Entering_Password();
    await object.clicking_on_LoginButton();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
})