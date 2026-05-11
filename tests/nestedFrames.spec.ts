import { test, expect } from '@playwright/test';

test('Nested Frames debug test', async ({ page }) => {

  await page.goto('https://www.testmuai.com/selenium-playground/nested-frames/');

  // wait so we can see if page loads
  await page.waitForTimeout(3000);

  // check if ANY frame exists
  const frames = page.frames();
  console.log('Total frames:', frames.length);

  // try simple text check (outside frame)
  console.log(await page.title());

});