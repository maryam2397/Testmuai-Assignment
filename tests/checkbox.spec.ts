import { test, expect } from '@playwright/test';

test('Checkbox working final', async ({ page }) => {

  // Open checkbox page
  await page.goto('https://www.testmuai.com/selenium-playground/checkbox-demo');

  // Select first checkbox
  const checkbox = page.locator('input[type="checkbox"]').first();

  // Click checkbox
  await checkbox.check();

  // Verify it is checked
  await expect(checkbox).toBeChecked();
});
