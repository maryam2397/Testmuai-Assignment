import { Page } from '@playwright/test';

export class NestedFramesPage {
  constructor(private page: Page) {}

  async openNestedFrames() {
    // DIRECT URL ONLY (no clicking = no failure)
    await this.page.goto('https://www.testmuai.com/selenium-playground/nested-frames/');
  }

  getTopFrame() {
    return this.page.frameLocator('frame').first();
  }

  getBottomFrame() {
    return this.page.frameLocator('frame').nth(1);
  }
}
   