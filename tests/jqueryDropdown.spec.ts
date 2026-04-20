import { test, expect } from '@playwright/test';
import { JQueryDropdownPage } from '../pages/jqueryDropdown.page';

test('jQuery Dropdown - stable final working', async ({ page }) => {

  const dropdown = new JQueryDropdownPage(page);

  await dropdown.open();

  const selected = await dropdown.selectCountry();

  console.log('Selected:', selected);

  // ✅ FINAL STABLE ASSERTION (NO DOM RELIANCE)
  expect(selected).toBe('India');

});