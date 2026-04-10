import {test,expect} from "../fixtures/dependencyFixtures"
import {LoginPage} from "../pages/Loginpage2"

test.use({storageState:undefined});
test.describe("Login Functionalty",async()=>{
    test.beforeEach(async({page})=>{
        await page.goto("https://www.saucedemo.com/");
    });
test("Verify the login functionalty with valid credentials",async({page,loginObj})=>{
    await loginObj.Entering_Username();
    await loginObj.Entering_Password();
    await loginObj.clicking_on_LoginButton();
    await expect(page).toHaveURL(/inventory/);
})

test("Verify the login functionalty with invalid credentials",async({page})=>{
    const loginObj=new LoginPage(page);
    await loginObj.Entering_Invalid_Username();
    await loginObj.Entering_Invalid_Password();
    await loginObj.clicking_on_LoginButton();
    await expect(page).not.toHaveURL(/inventory/);
})
})