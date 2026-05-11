import { test, expect } from '@playwright/test';

test('Virtual DOM - DEBUG', async ({ page }) => {

  await page.goto('https://www.testmuai.com/selenium-playground/');

  const link = page.getByText('Virtual DOM');

  await expect(link).toBeVisible();

  await link.click();

  // 🔥 DEBUG STEP 1: print URL
  console.log('URL after click:', page.url());

  // 🔥 DEBUG STEP 2: wait a bit
  await page.waitForTimeout(3000);

  // 🔥 DEBUG STEP 3: check what is actually visible
  console.log('H1 text:', await page.locator('h1').textContent());

  // FINAL ASSERTION (SAFE)
  await expect(page.locator('h1')).toBeVisible();
});