import { test, expect } from '@playwright/test';

test('Iframe Demo navigation and edit text', async ({ page }) => {

  // 1. Open page
  await page.goto('https://www.testmuai.com/selenium-playground/iframe-demo/');

  // 2. Wait for iframe to load
  await page.waitForLoadState('networkidle');

  // 3. Correct iframe locator from your screenshot
  const frame = page.frameLocator('#iFrame1');

  // 4. Locate editor inside iframe (body is safest for this site)
  const editor = frame.locator('body');

  // 5. Click inside iframe editor
  await editor.click();

  // 6. Type text
  await editor.type('Hello Iframe Automation');

  // 7. Assertion
  await expect(editor).toContainText('Hello Iframe Automation');
});