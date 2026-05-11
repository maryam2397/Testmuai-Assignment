import { test } from '@playwright/test';
import { TablePaginationPage } from '../pages/tablePaginationPage';

test('Table Pagination - show 5 rows', async ({ page }) => {

  const tablePage = new TablePaginationPage(page);

  await tablePage.navigate();

  await tablePage.clickTablePagination();

  await tablePage.selectFiveRows();

  await tablePage.verifyFiveRows();
});