import { test } from '@playwright/test';

import { ProgressBarModalPage }
from '../pages/progressBarModalPage';

test('Progress Bar Modal - Auto Close Dialog',
async ({ page }) => {

  const modalPage =
    new ProgressBarModalPage(page);

  // Step 1: Open Website
  await modalPage.navigate();

  // Step 2: Open Progress Bar Modal page
  await modalPage.openProgressBarModal();

  // Step 3: Click dialog button
  await modalPage.clickAutoCloseDialog();

});