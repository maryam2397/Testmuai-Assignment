import { Page, expect } from '@playwright/test';

export class JQueryListBoxPage {

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  jqueryListBoxLink = 'text=JQuery List Box';
  andreaOption = 'option[data-id="10"]';
  addButton = '.pAdd';

  // stable locator after adding
  addedAndrea = 'text=Andrea';

  // Navigate
  async navigate() {
    await this.page.goto('https://www.testmuai.com/selenium-playground/');
  }

  // Click JQuery List Box
  async clickJQueryListBox() {

    const link = this.page.locator(this.jqueryListBoxLink);

    await link.scrollIntoViewIfNeeded();
    await link.click();
  }

  // Select Andrea
  async selectAndrea() {

    const option = this.page.locator(this.andreaOption);

    await option.waitFor({ state: 'visible' });
    await option.click();
  }

  // Click Add button
  async clickAddButton() {

    const button = this.page.locator(this.addButton);

    await button.waitFor({ state: 'visible' });
    await button.click();
  }

  // Verify Andrea added
  async verifyAndreaAdded() {

    await expect(this.page.locator(this.addedAndrea)).toBeVisible();
  }
}