import { test } from '@playwright/test';
import { DataListFilterPage } from '../pages/dataListFilterPage';

test('Data List Filter - search Tester', async ({ page }) => {

  const dataPage = new DataListFilterPage(page);

  // Step 1: open site
  await dataPage.navigate();

  // Step 2: click Data List Filter
  await dataPage.clickDataListFilter();

  // Step 3: search "Tester"
  await dataPage.searchAttendee('Tester');

  // Step 4: verify result
  await dataPage.verifyTesterResult();

});