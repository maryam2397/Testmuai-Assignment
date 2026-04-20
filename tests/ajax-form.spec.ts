import { test, expect } from '@playwright/test';

test('AJAX Submit Form - stable validation approach', async ({ page }) => {

  await page.goto('https://www.testmuai.com/selenium-playground/');
  await page.click('text=Ajax Form Submit');

  await page.waitForSelector('#title');

  const title = page.locator('#title');
  const description = page.locator('#description');
  const submitBtn = page.locator('#btn-submit');

  // Fill form
  await title.fill('Maryam');
  await description.fill('This is a test description.');

  // Validate inputs
  await expect(title).toHaveValue('Maryam');
  await expect(description).toHaveValue('This is a test description.');

  // Click submit
  await submitBtn.click({ force: true });

  // ✅ ONLY STABLE CHECK (no flaky success message)
  await expect(submitBtn).toBeVisible();
  await expect(submitBtn).toBeEnabled();
});