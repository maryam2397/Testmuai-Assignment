import { test } from '@playwright/test';
import { DynamicDataPage } from '../pages/dynamicDataPage';

test('Dynamic Data Loading - Get Random User', async ({ page }) => {

  const dynamicPage = new DynamicDataPage(page);

  // Step 1: Open site
  await dynamicPage.navigate();

  // Step 2: Click Dynamic Data Loading
  await dynamicPage.clickDynamicDataLoading();

  // Step 3: Click Get Random User
  await dynamicPage.clickGetRandomUser();

  // Step 4: Wait & verify loading complete
  await dynamicPage.verifyUserLoaded();

});