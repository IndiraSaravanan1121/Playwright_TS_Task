import { test, chromium } from "@playwright/test";

test("Uploading File with popup options", async () => {
  const newFileName = "./files/textfile.txt";

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://demoqa.com/upload-download");
  const fileChooserPromise = page.waitForEvent('filechooser');
  await page.click("input[id='uploadFile']");
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles(newFileName);

});
