import { test } from '@playwright/test';
import { SelectDropdownPage } from '../pages/selectDropdownPage';

test('Select Dropdown List - Select Thursday', async ({ page }) => {

  const dropdownPage = new SelectDropdownPage(page);

  // Step 1: open website
  await dropdownPage.navigate();

  // Step 2: click Select Dropdown List
  await dropdownPage.clickSelectDropdownList();

  // Step 3: select Thursday
  await dropdownPage.selectThursday();

  // Step 4: verify selected day
  await dropdownPage.verifySelectedDay();

});