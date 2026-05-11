import { Page, expect } from '@playwright/test';

export class SelectDropdownPage {

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  selectDropdownLink = 'text=Select Dropdown List';
  dayDropdown = '#select-demo';

  // Navigate
  async navigate() {
    await this.page.goto('https://www.testmuai.com/selenium-playground/');
  }

  // Click Select Dropdown List
  async clickSelectDropdownList() {
    const link = this.page.locator(this.selectDropdownLink);

    await link.scrollIntoViewIfNeeded();
    await link.click();
  }

  // Select Thursday
  async selectThursday() {
    await this.page.locator(this.dayDropdown).selectOption('Thursday');
  }

  // Verify selected value
  async verifySelectedDay() {
    await expect(this.page.locator(this.dayDropdown)).toHaveValue('Thursday');
  }
}