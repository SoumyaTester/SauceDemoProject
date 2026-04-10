import { test as base } from "@playwright/test";
import { InventoryPage } from "../pages/InventoryPage";
import { LoginPage } from "../pages/Loginpage2";
import { Logout_Page } from "../pages/LogoutPage";
import { ProductsPage } from "../pages/ProductPage";
import { Cart_Page } from "../pages/CartPage";
import { Checkout_page } from "../pages/CheckoutPage";

type myCustomFixtures = {
  inventoryObj: InventoryPage;
  cartObj: Cart_Page;
  loginObj: LoginPage;
  logoutObj: Logout_Page;
  productObj: ProductsPage;
  checkoutObj: Checkout_page;
};

export const test = base.extend<myCustomFixtures>({
    inventoryObj:async({page},use)=>{
        await use(new InventoryPage(page));
    },
    cartObj:async({page},use)=>{
        await use(new Cart_Page(page));
    },
    loginObj:async({page},use)=>{
        await use(new LoginPage(page));
    },
    logoutObj:async({page},use)=>{
        await use(new Logout_Page(page));
    },
    productObj:async({page},use)=>{
        await use(new ProductsPage(page));
    },
    checkoutObj:async({page},use)=>{
        await use(new Checkout_page(page));
    }
});

export {expect} from "@playwright/test";

