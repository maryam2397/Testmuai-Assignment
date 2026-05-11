import { Page, Locator } from '@playwright/test';

export class ContextMenuPage {

  readonly page: Page;
  readonly contextMenuLink: Locator;
  readonly rightClickBox: Locator;

  constructor(page: Page) {

    this.page = page;

    this.contextMenuLink = page.locator(
      'a[href="https://www.testmuai.com/selenium-playground/context-menu/"]'
    );

    this.rightClickBox = page.locator('#hot-spot');
  }

  async clickContextMenu() {
    await this.contextMenuLink.click();
  }

  async rightClickOnBox() {
    await this.rightClickBox.click({
      button: 'right'
    });
  }
}