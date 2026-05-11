import { Page, expect } from '@playwright/test';

export class DatePickerPage {

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  datePickerLink = 'text=Date Picker';

  async navigate() {
    await this.page.goto('https://www.testmuai.com/selenium-playground/');
  }

  async openDatePicker() {

    const link = this.page.locator(this.datePickerLink);

    await expect(link).toBeVisible();

    await link.click();

    // 🔥 WAIT FOR ANY INPUT ON PAGE (SAFE FIX)
    await this.page.waitForSelector('input', { timeout: 10000 });
  }

  async selectDate(date: string) {

    const input = this.page.locator('input').first();

    await input.click();
    await input.fill(date);
  }

  async verifyDate(date: string) {

    await expect(this.page.locator('input').first())
      .toHaveValue(date);
  }
}
