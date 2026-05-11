import { test, expect } from '@playwright/test';

test('Simple Form Demo', async ({ page }) => {

  test.setTimeout(120000);

  console.log("Trying to open page...");

  await page.goto('https://example.com');

  console.log("Basic internet check passed");

});