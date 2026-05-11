import { test, expect } from '@playwright/test';

test('Input Form Submit - Full Flow', async ({ page }) => {

  await page.goto('https://www.testmuai.com/selenium-playground/');

  await Promise.all([
    page.waitForURL('**/input-form-demo/'),
    page.locator('text=Input Form Submit').click()
  ]);

  await expect(page.locator('#company')).toBeVisible();

  await page.fill('#company', 'LambdaTest');
  await page.fill('#websitename', 'https://www.lambdatest.com');

  await page.selectOption('select[name="country"]', { label: 'Pakistan' });

  await page.fill('#inputCity', 'Islamabad');
  await page.fill('#inputState', 'Punjab');
  await page.fill('#inputZip', '44000');

  // ✅ FIXED SUBMIT BUTTON
  const submitBtn = page.locator('text=Submit');

  await submitBtn.scrollIntoViewIfNeeded();
  await expect(submitBtn).toBeVisible();
  await submitBtn.click();
});
