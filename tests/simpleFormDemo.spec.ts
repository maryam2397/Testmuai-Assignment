import { test, expect } from '@playwright/test';

test('Simple Form Demo', async ({ page }) => {

  console.log("Opening page...");

  await page.goto('https://www.lambdatest.com/selenium-playground/simple-form-demo', {
    timeout: 120000,
    waitUntil: 'domcontentloaded'
  });

  console.log("Page opened");

  const input = page.locator('#user-message');
  await input.waitFor({ timeout: 60000 });

  await input.fill('Hello');

  await page.locator('#showInput').click();

  await expect(page.locator('#message')).toBeVisible();

});