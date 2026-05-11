import { Page, expect, Locator } from '@playwright/test';

export class ShadowDomPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;

  constructor(page: Page) {
    this.page = page;

    // 🎯 Shadow host (adjust if needed based on DOM)
    const shadowHost = page.locator('shadow-dom-example, [class*="shadow"]');

    // 👇 Playwright automatically pierces open shadow DOM
    this.firstName = shadowHost.locator('input[placeholder="First Name"]');
    this.lastName = shadowHost.locator('input[placeholder="Last Name"]');
  }

  async goto() {
    await this.page.goto('https://www.testmuai.com/selenium-playground/');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async fillFirstName(name: string) {
    await this.firstName.waitFor({ state: 'visible', timeout: 15000 });
    await this.firstName.fill(name);
  }

  async fillLastName(name: string) {
    await this.lastName.waitFor({ state: 'visible', timeout: 15000 });
    await this.lastName.fill(name);
  }

  async verifyInputs(first: string, last: string) {
    await expect(this.firstName).toHaveValue(first);
    await expect(this.lastName).toHaveValue(last);
  }
}