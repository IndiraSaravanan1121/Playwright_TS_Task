import { test, chromium } from '@playwright/test';

test("Login into demo site", async () => {
    const browser = await chromium.launch({
      headless: false
    });
    const context = await browser.newContext({
      recordVideo :{
        dir: "./videos"
      }
    });
    const page = await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.fill("input[name='username']", "Admin");
    await page.fill("input[name='password']", "admin123");
    await page.click("button[class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']");

    await page.waitForTimeout(3000);
  });

