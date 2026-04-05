import {chromium,FullConfig} from '@playwright/test'

async function globalSetup(config:FullConfig){
    const brow=await chromium.launch();
    const page=await brow.newPage();
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();
    await page.waitForURL("https://www.saucedemo.com/inventory.html");
    await page.context().storageState({path:"sessionStore.json"});
    await brow.close();
}
export default globalSetup;