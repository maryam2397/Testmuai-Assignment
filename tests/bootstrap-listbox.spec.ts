import { test, expect } from '@playwright/test';

test('Bootstrap listbox select item', async ({ page }) => {

  await page.goto('https://www.testmuai.com/selenium-playground/bootstrap-dual-list-box-demo');

  await page.waitForLoadState('domcontentloaded');

  // select item
  const item = page.locator('ul.list-group li').filter({
    hasText: 'Danville'
  });

  await expect(item).toBeVisible();
  await item.click();

  // ✅ FIXED BUTTON LOCATOR (IMPORTANT)
  const addButton = page.locator('button').filter({
    hasText: '>'
  }).first();

  await addButton.click();

  // assertion (right side list)
  const rightItem = page.locator('.well ul li').filter({
    hasText: 'Danville'
  });

  await expect(rightItem).toBeVisible();
});