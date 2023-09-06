import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  // testMatch: ["tests/uploadfiles.ts"],
  testMatch: ["uploadmultiplefiles.ts"],
  use: {
    headless: false,
    screenshot: "on",
    video: "on"
  },
  reporter: 'html',

}

export default config;
