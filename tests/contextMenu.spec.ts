import { test, expect } from '@playwright/test';

test('Context Menu - Right Click', async ({ page }) => {

  // Open website
  await page.goto('https://www.testmuai.com/selenium-playground/context-menu/');

  // Right click on box
  const rightClickBox = page.locator('#hot-spot');

  await rightClickBox.click({
    button: 'right'
  });

});
