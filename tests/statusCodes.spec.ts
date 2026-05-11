import { test } from '@playwright/test';
import { StatusCodesPage } from '../pages/statusCodesPage';

test('Click on Status Codes', async ({ page }) => {

  const statusCodesPage = new StatusCodesPage(page);

  await statusCodesPage.navigate();

  // slow down for visibility
  await page.waitForTimeout(2000);

  await statusCodesPage.clickStatusCodes();

  // pause so you can SEE the click result
  await page.pause();

  await statusCodesPage.verifyStatusCodesPage();
});