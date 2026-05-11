import { test, expect } from '@playwright/test';
import { NestedFramesPage } from '../pages/nestedFrames.page';

test('Nested Frames automation test', async ({ page }) => {

  // Create object of Page class
  const nestedFrames = new NestedFramesPage(page);

  // Step 1: Open site + click Nested Frames
  await nestedFrames.openNestedFrames();

  // Step 2: Validate TOP frame
  const topFrame = nestedFrames.getTopFrame();
  await expect(topFrame.locator('body')).toContainText('Top');

  // Step 3: Validate Bottom frames
  const bottomFrame = nestedFrames.getBottomFrame();

  await expect(bottomFrame.locator('body')).toContainText('Left');
  await expect(bottomFrame.locator('body')).toContainText('Right');
});