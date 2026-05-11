import { Page, expect } from '@playwright/test';

export class DataListFilterPage {

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  dataListFilterLink = 'text=Data List Filter';
  searchInput = '#input-search';
  testerTitle = 'text=Title: Tester';

  // Navigate
  async navigate() {
    await this.page.goto('https://www.testmuai.com/selenium-playground/');
  }

  // Click Data List Filter
  async clickDataListFilter() {
    await this.page.locator(this.dataListFilterLink).click();
  }

  // Search Attendees
  async searchAttendee(text: string) {
    await this.page.locator(this.searchInput).fill(text);
  }

  // Verify Tester appears
  async verifyTesterResult() {
    await expect(this.page.locator(this.testerTitle)).toBeVisible();
  }
}