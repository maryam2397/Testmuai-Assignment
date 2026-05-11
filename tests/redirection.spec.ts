import { test } from '@playwright/test';
import { RedirectionPage } from '../pages/redirectionPage';

test('Redirection test', async ({ page }) => {

  const redirectionPage = new RedirectionPage(page);

  // Step 1: open site
  await redirectionPage.navigate();

  // Step 2: click Redirection
  await redirectionPage.clickRedirection();

  // Step 3: click "here"
  await redirectionPage.clickHere();

  // Step 4: verify redirect
  await redirectionPage.verifyHomePage();
});