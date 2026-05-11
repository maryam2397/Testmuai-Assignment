import { test } from '@playwright/test';
import { ShadowDomPage } from '../pages/ShadowDomPage';

test('Shadow DOM form test', async ({ page }) => {
  const shadow = new ShadowDomPage(page);

  await shadow.goto();

  await shadow.fillFirstName('Maryam');
  await shadow.fillLastName('Shams');

  await shadow.verifyInputs('Maryam', 'Shams');
});