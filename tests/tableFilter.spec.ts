import { test, expect } from '@playwright/test';

test('Table Filter Debug', async ({ page }) => {

  console.log("Opening homepage...");

  await page.goto('https://www.testmuai.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  console.log("Page opened");

  const tableFilter = page.getByText('Table Filter');

  await expect(tableFilter).toBeVisible({ timeout: 60000 });

  console.log("Clicking Table Filter...");

  await tableFilter.click();

  console.log("Clicked Table Filter");

});