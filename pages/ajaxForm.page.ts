import { Page, Locator } from '@playwright/test';

export class BootstrapPage {

  readonly page: Page;
  readonly searchBox: Locator;
  readonly firstLeftItem: Locator;
  readonly addBtn: Locator;
  readonly rightItems: Locator;

  constructor(page: Page) {
    this.page = page;

    // SIMPLE + STABLE LOCATORS
    this.searchBox = page.locator('.dual-list-search');
    this.firstLeftItem = page.locator('.list-group:first-of-type li');
    this.addBtn = page.locator('button:has-text("Add")');
    this.rightItems = page.locator('.list-group:nth-of-type(2) li');
  }

  async open() {
    await this.page.goto(
      'https://www.lambdatest.com/selenium-playground/bootstrap-dual-list-box-demo'
    );
  }

  async search(value: string) {
    await this.searchBox.fill(value);
    await this.page.waitForTimeout(1500);
  }

  async selectFirst() {
    await this.firstLeftItem.first().click();
  }

  async moveRight() {
    await this.addBtn.click();
  }

  getRightList() {
    return this.rightItems;
  }
}