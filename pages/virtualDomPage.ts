import { Page, expect } from '@playwright/test';

export class VirtualDomPage {

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://www.testmuai.com/selenium-playground/');
  }

  async openVirtualDom() {

    const link = this.page.getByText('Virtual DOM');

    await expect(link).toBeVisible();

    await link.click();

    // 🔥 HARD RELIABLE CHECK
    await expect(this.page).toHaveURL(/virtual-dom/);
  }

  async verifyPage() {

    // wait for page content
    await this.page.waitForSelector('h1');

    await expect(this.page.locator('h1'))
      .toHaveText('Virtual DOM');

    await expect(this.page.locator('text=Current Time'))
      .toBeVisible();
  }
}