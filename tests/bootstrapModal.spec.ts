import { test } from '@playwright/test';

test('Bootstrap Modal - Launch Single Modal', async ({ page }) => {

  await page.goto('https://www.testmuai.com/selenium-playground/bootstrap-modal-demo/');

  await page.waitForTimeout(3000);

  await page.locator('button[data-target="#myModal"]').click();

  await page.waitForTimeout(3000);

});