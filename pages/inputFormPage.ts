import { Page, expect } from '@playwright/test';

export class InputFormPage {

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  inputFormLink = 'text=Input Form Submit';

  companyField = '#company';
  websiteField = '#websitename';
  countryDropdown = 'select[name="country"]';
  cityField = '#inputCity';
  stateField = '#inputState';
  zipCodeField = '#inputZip';

  submitButton = 'button[type="submit"]';

  // Navigate
  async navigate() {
    await this.page.goto('https://www.testmuai.com/selenium-playground/');
  }

  // Click Input Form Submit
  async clickInputFormSubmit() {
    const link = this.page.locator(this.inputFormLink);
    await link.scrollIntoViewIfNeeded();
    await link.click();
  }

  // Fill Company
  async fillCompany(company: string) {
    await this.page.locator(this.companyField).fill(company);
  }

  // Fill Website
  async fillWebsite(website: string) {
    await this.page.locator(this.websiteField).fill(website);
  }

  // Select Country
  async selectCountry() {
    await this.page
      .locator(this.countryDropdown)
      .selectOption({ label: 'Pakistan' });
  }

  // Fill City
  async fillCity(city: string) {
    await this.page.locator(this.cityField).fill(city);
  }

  // Fill State
  async fillState(state: string) {
    await this.page.locator(this.stateField).fill(state);
  }

  // Fill Zip Code
  async fillZipCode(zip: string) {
    await this.page.locator(this.zipCodeField).fill(zip);
  }

  // Click Submit Button
  async clickSubmit() {
    const btn = this.page.locator(this.submitButton);

    await btn.scrollIntoViewIfNeeded();
    await btn.waitFor({ state: 'visible' });
    await btn.click();
  }

  // Verify Company field
  async verifyCompany(company: string) {
    await expect(this.page.locator(this.companyField)).toHaveValue(company);
  }
}