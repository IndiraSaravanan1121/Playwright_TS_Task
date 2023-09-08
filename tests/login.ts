import { test, chromium } from "@playwright/test";
import Login from "../pages/login";

test("Login into orangeHrm website", async (baseURL) => {

  const browser = await chromium.launch();
  const context = await browser.newContext({
    recordVideo: {
      dir: "./videos",
    },
  });
  const page = await context.newPage();
  const login = new Login(page);

  await page.goto(`${baseURL}`);
  await login.enterUserName("Admin");
  await login.enterPassword("admin@123");
  await login.clickLoginButton();
  // await page.fill("input[name='username']", "Admin");
  // await page.fill("input[name='password']", "admin123");
  // await page.click("button[class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']");

  await page.waitForTimeout(3000);
});
