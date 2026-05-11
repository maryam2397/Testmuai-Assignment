import { Page, Locator } from '@playwright/test';

export class TableFilterPage {

  readonly page: Page;
  readonly tableFilterLink: Locator;
  readonly cypressTestingBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.tableFilterLink = page.getByText('Table Filter');

    this.cypressTestingBtn = page.locator(
      'button.btn-filter:has-text("Cypress Testing")'
    );
  }

  async openTableFilter() {
    await this.tableFilterLink.click();
  }

  async clickCypressTesting() {
    await this.cypressTestingBtn.click();
  }
}