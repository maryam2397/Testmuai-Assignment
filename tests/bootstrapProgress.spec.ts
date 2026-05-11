import { test, expect } from '@playwright/test';

test('Bootstrap Progress Bar - Start Download', async ({ page }) => {

  // Step 1: Open main page
  await page.goto('https://www.testmuai.com/selenium-playground/');

  // Step 2: Click Bootstrap Progress Bar link (stable)
  const link = page.getByText('Bootstrap Progress bar');

  await expect(link).toBeVisible();

  await link.scrollIntoViewIfNeeded();

  await link.click();

  // Step 3: Wait for button
  const btn = page.locator('#dwnBtn');

  await expect(btn).toBeVisible();

  // Step 4: Click Start Download
  await btn.click();

  // Step 5: Wait for completion text
  await expect(page.locator('text=Complete')).toBeVisible({ timeout: 20000 });

});