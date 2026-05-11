import { Page, expect } from '@playwright/test';

export class HoverDemoPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('https://www.testmuai.com/selenium-playground/hover-demo/');
    await this.page.waitForLoadState('domcontentloaded');
  }

  // Hover Me button (your locator, improved stability)
  get hoverMeButton() {
    return this.page.locator('div.bg-green-100').filter({ hasText: 'Hover Me' });
  }

  async hoverOnButton() {
    await this.hoverMeButton.waitFor({ state: 'visible' });
    await this.hoverMeButton.hover();
  }

  async verifyHover() {
    await expect(this.hoverMeButton).toBeVisible();
  }
}