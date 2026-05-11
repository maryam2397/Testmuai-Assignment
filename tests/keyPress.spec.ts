import { test, expect } from '@playwright/test';

test('Key Press Test', async ({ page }) => {

  await page.goto('https://www.lambdatest.com/selenium-playground/key-press');

  // Wait for page load
  await page.waitForLoadState('networkidle');

  // Locate input field
  const inputField = page.locator('#my_field');

  // Click field
  await inputField.click();

  // Type Enter key
  await inputField.press('Enter');

  // Verify text
  await expect(page.locator('#result'))
    .toHaveText('You entered: ENTER');

});