import { Page, expect } from '@playwright/test';

export class StatusCodesPage {

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locator
  statusCodesLink = '//a[normalize-space()="Status Codes"]';

  // Navigate to website
  async navigate() {
    await this.page.goto('https://www.testmuai.com/selenium-playground/');
  }

  // Click on Status Codes
  async clickStatusCodes() {
    await this.page.locator(this.statusCodesLink).click();
  }

  // Verify URL
  async verifyStatusCodesPage() {
    await expect(this.page).toHaveURL(/status-code/);
  }
}