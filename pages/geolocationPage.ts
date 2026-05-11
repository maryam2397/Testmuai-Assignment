import { Page, expect } from '@playwright/test';

export class GeolocationPage {

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locator
  geolocationLink = 'text=Geolocation Testing';

  // Navigate to website
  async navigate() {
    await this.page.goto('https://www.testmuai.com/selenium-playground/');
  }

  // Click Geolocation Testing
  async clickGeolocationTesting() {
    const link = this.page.locator(this.geolocationLink);

    await link.scrollIntoViewIfNeeded();
    await link.click();
  }

  // Verify page opened
  async verifyGeolocationPage() {
    await expect(this.page).toHaveURL(/geolocation-testing/);
  }
}