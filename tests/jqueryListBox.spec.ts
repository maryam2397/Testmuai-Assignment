import { test } from '@playwright/test';
import { JQueryListBoxPage } from '../pages/jqueryListBoxPage';

test('JQuery List Box - Add Andrea', async ({ page }) => {

  const jqueryPage = new JQueryListBoxPage(page);

  // Step 1: open website
  await jqueryPage.navigate();

  // Step 2: click JQuery List Box
  await jqueryPage.clickJQueryListBox();

  // Step 3: select Andrea
  await jqueryPage.selectAndrea();

  // Step 4: click Add button
  await jqueryPage.clickAddButton();

  // Step 5: verify Andrea added
  await jqueryPage.verifyAndreaAdded();

});