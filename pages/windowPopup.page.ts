import { Page, Locator } from '@playwright/test';

export class WindowPopupPage {
  constructor(private page: Page) {}

  async openWindowPopupPage() {
    await this.page.goto('https://www.testmuai.com/selenium-playground/');
    await this.page.locator('a[href*="window-popup-modal-demo"]').click();
  }

  getLinkedInButton(): Locator {
    return this.page.locator('a[title="Follow @testmuai on Linkedin"]');
  }
}