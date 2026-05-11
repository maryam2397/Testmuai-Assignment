import { Page, expect } from '@playwright/test';

export class BootstrapProgressPage {

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  bootstrapProgressLink = 'text=Bootstrap Progress bar';
  startDownloadBtn = '#dwnBtn';
  progressBar = '.progress-bar';

  async navigate() {
    await this.page.goto('https://www.testmuai.com/selenium-playground/');
  }

  async clickBootstrapProgress() {
    await this.page.locator(this.bootstrapProgressLink).click();

    // IMPORTANT: wait for page content to load
    await this.page.waitForLoadState('domcontentloaded');
  }

  async clickStartDownload() {
    const btn = this.page.locator(this.startDownloadBtn);

    // wait until clickable
    await expect(btn).toBeVisible();
    await expect(btn).toBeEnabled();

    await btn.click();
  }

  async verifyProgressRunning() {
    const bar = this.page.locator(this.progressBar);

    await expect(bar).toBeVisible();
    await expect(bar).toContainText('%');
  }
}