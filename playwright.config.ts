import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  // testMatch: ["tests/uploadfiles.ts"],
  testMatch: ["login.ts"],
  use: {
    baseURL: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    headless: false,
    screenshot: "on",
    video: "on"
  },
  reporter: 'html',

}

export default config;
