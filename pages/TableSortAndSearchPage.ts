import { Page, expect, Locator } from '@playwright/test';

export class TableSortAndSearchPage {
  readonly page: Page;

  readonly link: Locator;
  readonly searchInput: Locator;

  constructor(page: Page) {
    this.page = page;

    // Table Sort & Search link
    this.link = page.locator(
      'a[href*="table-sort-search-demo"]'
    );

    // Search box on table page
    this.searchInput = page.locator(
      'input[type="search"][aria-controls="example"]'
    );
  }

  // Open main page
  async openHome() {
    await this.page.goto(
      'https://www.testmuai.com/selenium-playground/',
      { waitUntil: 'domcontentloaded' }
    );
  }

  // Click Table Sort & Search
  async openTable() {
    await expect(this.link).toBeVisible();
    await this.link.scrollIntoViewIfNeeded();
    await this.link.click();
  }

  // Search value
  async search(value: string) {
    await expect(this.searchInput).toBeVisible();
    await this.searchInput.fill(value);

    await this.page.waitForTimeout(1000);
  }

  // Verify result
  async verify(value: string) {
    const result = this.page.locator(
      'table#example tbody tr td',
      { hasText: value }
    );

    await expect(result).toBeVisible();
  }
}
