import { Page, expect } from '@playwright/test';

export class DynamicDataPage {

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  dynamicDataLink = 'text=Dynamic Data Loading';
  getRandomUserBtn = '#save';
  loadingText = '#loading';

  // Navigate
  async navigate() {
    await this.page.goto('https://www.testmuai.com/selenium-playground/');
  }

  // Click Dynamic Data Loading
  async clickDynamicDataLoading() {
    await this.page.locator(this.dynamicDataLink).click();
  }

  // Click Get Random User
  async clickGetRandomUser() {
    await this.page.locator(this.getRandomUserBtn).click();
  }

  // Verify user data appears (after loading)
  async verifyUserLoaded() {
    await this.page.waitForSelector('#loading', { state: 'hidden' });
    await expect(this.page.locator('#loading')).toBeHidden();
  }
}