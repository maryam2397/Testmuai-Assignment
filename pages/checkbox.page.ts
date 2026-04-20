import { Page } from '@playwright/test';

export class CheckboxPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto(
      'https://www.lambdatest.com/selenium-playground/checkbox-demo'
    );
  }

  async selectSingleCheckbox() {
    // ✅ BEST TARGET: actual input inside label
    const checkbox = this.page.locator('input#isAgeSelected');

    await checkbox.waitFor({ state: 'attached' });
    await checkbox.check();
  }

  async selectMultipleCheckboxes() {
    const checkboxes = this.page.locator('.cb1-element');

    const count = await checkboxes.count();

    for (let i = 0; i < count; i++) {
      await checkboxes.nth(i).check();
    }
  }
}
