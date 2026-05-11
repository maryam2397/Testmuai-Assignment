import { test, expect } from '@playwright/test';
import { WindowPopupPage } from '../pages/windowPopup.page';

test('Window Popup LinkedIn test', async ({ page, context }) => {

  const popup = new WindowPopupPage(page);

  await popup.openWindowPopupPage();

  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    popup.getLinkedInButton().click()
  ]);

  await newPage.waitForLoadState();

  expect(newPage.url()).toContain('linkedin.com');
});