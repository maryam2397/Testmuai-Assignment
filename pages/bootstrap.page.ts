import { Page, Locator } from '@playwright/test';

export class BootstrapPage {

  readonly page: Page;
  readonly searchBox: Locator;
  readonly leftItems: Locator;
  readonly addBtn: Locator;
  readonly rightItems: Locator;

  constructor(page: Page) {
    this.page = page;

    // IMPORTANT FIXED LOCATORS
    this.searchBox = page.locator('.dual-list-search');
    this.leftItems = page.locator('.list-group:first-of-type li');
    this.addBtn = page.locator('button:has-text("Add")');
    this.rightItems = page.locator('.list-group:nth-of-type(2) li');
  }

  async open() {
    await this.page.goto(
      'https://www.lambdatest.com/selenium-playground/bootstrap-dual-list-box-demo',
      { waitUntil: 'domcontentloaded' }
    );
  }

  async search(text: string) {
    await this.searchBox.fill(text);
    await this.page.waitForTimeout(1000);
  }

  async selectFirstVisibleItem() {
    await this.leftItems.first().click();
  }

  async moveRight() {
    await this.addBtn.click();
  }

  getRightItems() {
    return this.rightItems;
  }
}