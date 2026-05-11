import { test } from '@playwright/test';
import { AutoHealingPage } from '../pages/AutoHealingPage';

test('Auto Healing form automation', async ({ page }) => {
  const auto = new AutoHealingPage(page);

  await page.goto('https://www.testmuai.com/selenium-playground/auto-healing/');

  await auto.fillForm('maryam123', 'pass@123');

  await auto.submit();
});