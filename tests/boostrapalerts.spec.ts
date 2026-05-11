import { test, expect } from '@playwright/test';

test('Bootstrap Alerts test', async ({ page }) => {

  await page.goto('https://www.testmuai.com/selenium-playground/');

  await page.locator('text=Bootstrap Alerts').click();

  await page.locator('button:has-text("Autoclosable Success Message")').click();

  await expect(page.locator('.alert-success')).toBeVisible();

});