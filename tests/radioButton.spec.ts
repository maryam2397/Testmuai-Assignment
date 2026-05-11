import { test, expect } from '@playwright/test';

test('Radio Button - Stable Fix', async ({ page }) => {

  // Step 1: Open main page
  await page.goto('https://www.testmuai.com/selenium-playground/');

  // Step 2: Click correct link (VERY IMPORTANT)
  const radioLink = page.locator('text=Radio Buttons Demo');

  await expect(radioLink).toBeVisible();
  await radioLink.click();

  // Step 3: Wait for page
  await page.waitForTimeout(2000);

  // Step 4: Select Male
  const male = page.locator('input[value="Male"][name="optradio"]');
  await male.check();

  await expect(male).toBeChecked();

});