import {chromium,FullConfig} from '@playwright/test'
import { ENV } from '../Config/env';

async function globalSetup(config:FullConfig){
    const brow=await chromium.launch();
    const page=await brow.newPage();
    await page.goto(ENV.BASE_URL);
    await page.locator("#user-name").fill(ENV.USER_NAME);
    await page.locator("#password").fill(ENV.PASSWORD);
    await page.locator("#login-button").click();
    await page.waitForURL("https://www.saucedemo.com/inventory.html");
    await page.context().storageState({path:"sessionStore.json"});
    await brow.close();
}
export default globalSetup;