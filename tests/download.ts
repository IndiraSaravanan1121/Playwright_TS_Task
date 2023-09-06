import { test, chromium } from "@playwright/test";

test("Download Files", async () => {
    const browser = await chromium.launch();
      const context = await browser.newContext();
      const page = await context.newPage();
    
      await page.goto("https://demoqa.com/upload-download");

      const downloadPromise = page.waitForEvent('download');
      await page.click("a[id='downloadButton']");
      const download = await downloadPromise;

      console.log(await download.path());
      await page.waitForTimeout(10000);
      await download.saveAs('./files/sampleFile.jpeg');
});
