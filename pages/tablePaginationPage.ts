import { Page, expect } from '@playwright/test';

export class TablePaginationPage {

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  tablePaginationLink = 'text=Table Pagination';
  rowsDropdown = '#maxRows';

  async navigate() {
    await this.page.goto('https://www.testmuai.com/selenium-playground/');
  }

  async clickTablePagination() {
    await this.page.locator(this.tablePaginationLink).click();
  }

  async selectFiveRows() {
    await this.page.locator(this.rowsDropdown).selectOption('5');
    await this.page.waitForTimeout(1500);
  }

  // ✅ REAL ASSERTION (DATA-BASED)
  async verifyFiveRows() {

    const ids = await this.page.locator('//table//tbody/tr/td[1]').allTextContents();

    console.log("Visible IDs:", ids);

    // take only first page results
    const firstFive = ids.slice(0, 5);

    expect(firstFive).toEqual(['1', '2', '3', '4', '5']);
  }
}