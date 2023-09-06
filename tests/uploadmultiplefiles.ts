import { test, chromium } from "@playwright/test";

test("Uploading File with popup options", async () => {
    const newFileName = "./files/textfile.txt";
  
    const browser = await chromium.launch({
      headless: false,
    });
    const context = await browser.newContext();
    const page = await context.newPage();
  
    await page.goto("https://the-internet.herokuapp.com/upload");
    // await page.waitForTimeout(10000);
    page.on("filechooser", async (filechooser) => {
      await filechooser.setFiles([newFileName])
    })
    await page.click("input[id='file-upload']", { force: true });
  
  });