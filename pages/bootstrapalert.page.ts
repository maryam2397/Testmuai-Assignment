import { Page, expect } from '@playwright/test';

export class BootstrapAlertPage {
  constructor(private page: Page) {}

  // Locators
  bootstrapAlertLink =
    'text=Bootstrap Alerts';

  successBtn =
    'button:has-text("Autoclosable Success Message")';

  successAlert =
    '.alert-success';

  // Open main page
  async open() {
    await this.page.goto(
      'https://www.testmuai.com/selenium-playground/',
      { waitUntil: 'domcontentloaded' }
    );
  }

  // Navigate to Alerts page
  async openAlertsPage() {
    const link = this.page.locator(this.bootstrapAlertLink);

    await expect(link).toBeVisible();

    await link.scrollIntoViewIfNeeded();

    await link.click();
  }

  // Click success message
  async clickSuccessMessage() {
    const btn = this.page.locator(this.successBtn);

    await expect(btn).toBeVisible();

    await btn.click();
  }

  // Verify alert appears
  async verifyAlert() {
    const alert = this.page.locator(this.successAlert);

    await expect(alert).toBeVisible({ timeout: 10000 });

    await expect(alert).toContainText('success');
  }
}