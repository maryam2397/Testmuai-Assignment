import { Page, expect, Locator } from '@playwright/test';

export class TableSearchPage {
  readonly page: Page;

  readonly tableSearchLink: Locator;
  readonly searchInput: Locator;
  readonly rows: Locator;

  constructor(page: Page) {
    this.page = page;

    // 🔥 MORE STABLE LOCATOR (IMPORTANT FIX)
    this.tableSearchLink = page.locator(
      'a[href*="table-search-filter-demo"]'
    );

    this.searchInput = page.locator('#task-table-filter');
    this.rows = page.locator('#task-table tbody tr');
  }

  async openHome() {
    await this.page.goto(
      'https://www.testmuai.com/selenium-playground/',
      { waitUntil: 'domcontentloaded' }
    );
  }

  async openTableSearch() {
    await expect(this.tableSearchLink).toBeVisible();

    await this.tableSearchLink.scrollIntoViewIfNeeded();

    await this.tableSearchLink.click();
  }

  async search(value: string) {
    await expect(this.searchInput).toBeVisible();

    await this.searchInput.fill(value);

    await this.page.waitForTimeout(1000);
  }

  async verifyResults(value: string) {
    const count = await this.rows.count();

    let matched = 0;

    for (let i = 0; i < count; i++) {
      const row = this.rows.nth(i);

      const visible = await row.isVisible();

      const text = await row.innerText();

      if (visible && text.includes(value)) {
        matched++;
      }
    }

    expect(matched).toBeGreaterThan(0);
  }
}