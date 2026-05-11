import { test } from '@playwright/test';
import { TableSortAndSearchPage } from '../pages/TableSortAndSearchPage';

test('Table Sort & Search - Search Tokyo', async ({ page }) => {

  const table = new TableSortAndSearchPage(page);

  // Step 1: Open homepage
  await table.openHome();

  // Step 2: Click Table Sort & Search page
  await table.openTable();

  // Step 3: Search "Tokyo"
  await table.search('Tokyo');

  // Step 4: Verify result
  await table.verify('Tokyo');

});