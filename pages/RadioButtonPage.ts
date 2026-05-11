import { Page, expect } from '@playwright/test';

export class RadioButtonPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.goto(
      'https://www.testmuai.com/selenium-playground/radiobutton-demo/'
    );
  }

  // ✅ BEST & STABLE LOCATOR (BASED ON YOUR HTML)
  get maleRadio() {
    return this.page.locator('label:has(input[value="Male"])');
  }

  get getValueBtn() {
    return this.page.locator('#buttoncheck');
  }

  get result() {
    return this.page.locator('.radiobutton');
  }

  async selectMale() {
    await this.maleRadio.click();
  }

  async clickGetValue() {
    await this.getValueBtn.click();
  }

  async verifyMaleSelected() {
    await expect(this.result).toContainText("Radio button 'Male' is checked");
  }
}