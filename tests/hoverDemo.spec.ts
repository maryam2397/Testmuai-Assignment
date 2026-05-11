import { test } from '@playwright/test';
import { HoverDemoPage } from '../pages/HoverDemoPage';

test('Hover Demo - hover on button', async ({ page }) => {
  const hover = new HoverDemoPage(page);

  await hover.open();

  await hover.hoverOnButton();

  await hover.verifyHover();
});