import { Page, Locator, expect } from '@playwright/test';

export class AutoHealingPage {
  readonly page: Page;

  readonly username: Locator;
  readonly password: Locator;
  readonly submitBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.username = page.locator('#username');
    this.password = page.locator('#password');

    // ✅ FIXED LOCATOR (unique)
    this.submitBtn = page.locator('button.selenium_btn', { hasText: 'Submit' });
  }

  async fillForm(user: string, pass: string) {
    await this.username.scrollIntoViewIfNeeded();
    await this.username.fill(user);

    await this.password.scrollIntoViewIfNeeded();
    await this.password.fill(pass);
  }

  async submit() {
    await this.submitBtn.scrollIntoViewIfNeeded();
    await this.submitBtn.click();
  }
}