import { test, expect } from '@playwright/test';
import { SliderPage } from '../pages/slider.page';

test('Slider Test - stable validation', async ({ page }) => {

  const slider = new SliderPage(page);

  await slider.open();

  // ASSERTION 1: slider is visible
  await expect(slider.slider).toBeVisible();

  // ASSERTION 2: slider is enabled
  await expect(slider.slider).toBeEnabled();

  // perform action (move slider)
  await slider.slider.focus();

  for (let i = 0; i < 20; i++) {
    await page.keyboard.press('ArrowRight');
  }

  // ASSERTION 3: page still responsive
  await expect(page).toHaveURL(/drag-drop-range-sliders-demo/);

});