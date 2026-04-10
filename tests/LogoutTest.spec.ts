import {test,expect} from "../fixtures/dependencyFixtures"
import { Logout_Page } from "../pages/LogoutPage"
import { Website_Urls } from "../Constants/const_data"

test.beforeEach("Logout Functionalty",async({page})=>{
    page.goto(Website_Urls.INVENTORY_PAGE);
})
test("Verify the logout functionality",async({page,logoutObj})=>{
    await logoutObj.Clicking_On_MenuButton();
    await logoutObj.Clicking_On_Logout_Button();
    await expect(page).toHaveURL(Website_Urls.LOGIN_PAGE);
});