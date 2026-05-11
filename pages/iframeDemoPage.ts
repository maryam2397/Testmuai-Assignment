import { Page, Locator } from '@playwright/test';

export class IframeDemoPage {

  readonly page: Page;
  readonly iframeDemoLink: Locator;
  readonly editor: Locator;
  readonly boldBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    // Iframe Demo link
    this.iframeDemoLink = page.locator(
      'a[href="https://www.testmuai.com/selenium-playground/iframe-demo/"]'
    );

    // iframe content (rich text editor is NOT real iframe, it's contenteditable)
    this.editor = page.locator('.rsw-ce');

    // Bold button
    this.boldBtn = page.locator('button[title="Bold"]');
  }

  async openIframeDemo() {
    await this.iframeDemoLink.click();
  }

  async typeText(text: string) {
    await this.editor.click();
    await this.editor.fill(text);
  }

  async clickBold() {
    await this.boldBtn.click();
  }
}