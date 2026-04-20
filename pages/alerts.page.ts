import { Page, Locator } from '@playwright/test';

export class AlertsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.goto(
      'https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo'
    );
  }

  // =========================
  // FIXED LOCATORS (STRICT SAFE)
  // =========================

  get simpleAlertBtn(): Locator {
    // first section
    return this.page.locator('(//button[text()="Click Me"])[1]');
  }

  get confirmBtn(): Locator {
    // second section
    return this.page.locator('(//button[text()="Click Me"])[2]');
  }

  get promptBtn(): Locator {
    // third section
    return this.page.locator('(//button[text()="Click Me"])[3]');
  }

  async highlight(locator: Locator) {
    await locator.evaluate(el => {
      el.style.border = '3px solid red';
    });
  }

  async clickSimpleAlert() {
    await this.highlight(this.simpleAlertBtn);
    await this.simpleAlertBtn.click();
  }

  async clickConfirm() {
    await this.highlight(this.confirmBtn);
    await this.confirmBtn.click();
  }

  async clickPrompt() {
    await this.highlight(this.promptBtn);
    await this.promptBtn.click();
  }
}