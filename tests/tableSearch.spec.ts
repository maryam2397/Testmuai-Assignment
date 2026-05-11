import { test } from '@playwright/test';
import { TableSearchPage } from '../pages/TableSearchPage';

test('Table Search - Search Development', async ({ page }) => {

  const table = new TableSearchPage(page);

  // Step 1: open homepage
  await table.openHome();

  // Step 2: click Table Search
  await table.openTableSearch();

  // Step 3: search Development
  await table.search('Development');

  // Step 4: verify results
  await table.verifyResults('Development');

});