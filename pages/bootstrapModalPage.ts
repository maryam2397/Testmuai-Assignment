import { Page, expect } from '@playwright/test';

export class BootstrapModalPage {

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  bootstrapModalLink = 'text=Bootstrap Modals';

  launchModalButton =
    'button[data-target="#myModal"]';

  modalContent = '.modal.show';

  // Navigate
  async navigate() {

    await this.page.goto(
      'https://www.testmuai.com/selenium-playground/'
    );
  }

  // Open Bootstrap Modals page
  async openBootstrapModal() {

    const link =
      this.page.locator(this.bootstrapModalLink);

    await link.scrollIntoViewIfNeeded();

    await expect(link).toBeVisible();

    await link.click();
  }

  // Click Launch Modal button
  async clickLaunchModal() {

    const button =
      this.page.locator(this.launchModalButton);

    await button.scrollIntoViewIfNeeded();

    await expect(button).toBeVisible();

    await button.click();
  }

  // Verify modal opened
  async verifyModalOpened() {

    await expect(
      this.page.locator(this.modalContent)
    ).toBeVisible({ timeout: 10000 });
  }
}