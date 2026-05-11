import { Page, expect } from '@playwright/test';

export class RedirectionPage {

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  redirectionLink = 'text=Redirection';
  hereLink = 'text=here';

  // Navigate
  async navigate() {
    await this.page.goto('https://www.testmuai.com/selenium-playground/');
  }

  // Click Redirection
  async clickRedirection() {
    await this.page.locator(this.redirectionLink).click();
  }

  // Click "here" link
  async clickHere() {
    await this.page.locator(this.hereLink).click();
  }

  // Verify redirect to homepage
  async verifyHomePage() {
    await expect(this.page).toHaveURL('https://www.testmuai.com/selenium-playground/');
  }
}