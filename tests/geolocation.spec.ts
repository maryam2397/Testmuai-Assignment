import { test } from '@playwright/test';
import { GeolocationPage } from '../pages/geolocationPage';

test('Geolocation Testing', async ({ page }) => {

  const geoPage = new GeolocationPage(page);

  // Step 1: open website
  await geoPage.navigate();

  // Step 2: click Geolocation Testing
  await geoPage.clickGeolocationTesting();

  // Step 3: verify page opened
  await geoPage.verifyGeolocationPage();

});