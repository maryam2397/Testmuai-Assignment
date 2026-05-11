import { Page, expect } from '@playwright/test';

export class KeyPressPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto('https://www.testmuai.com/selenium-playground/');

    await this.page
      .getByRole('link', { name: 'Key Press' })
      .first()
      .click();

    await this.page.waitForLoadState('domcontentloaded');
  }

  async pressKey() {
    // 🔥 IMPORTANT: click body/input first so page is focused
    await this.page.locator('body').click();

    // press any key
    await this.page.keyboard.press('A');
  }

  async verifyResult() {
    // 🔥 FIX: this is the correct result locator on page
    const result = this.page.locator('#result');

    await expect(result).toBeVisible();

    await expect(result).toContainText('You entered');
  }
}

