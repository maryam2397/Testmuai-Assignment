import { Page } from '@playwright/test';

export class JQueryDropdownPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto(
      'https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo'
    );
  }

  async selectCountry() {

    await this.page.locator('#country').click();

    const search = this.page.locator('input.select2-search__field');
    await search.waitFor({ state: 'visible' });

    await search.fill('India');

    await this.page.locator('.select2-results__option', {
      hasText: 'India'
    }).click();

    // return controlled value
    return 'India';
  }
}