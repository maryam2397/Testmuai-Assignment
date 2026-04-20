import { Page, Locator } from '@playwright/test';

export class SliderPage {
  readonly page: Page;
  readonly slider: Locator;

  constructor(page: Page) {
    this.page = page;

    this.slider = page.locator('#slider1 input[type="range"]');
  }

  async open() {
    await this.page.goto(
      'https://www.lambdatest.com/selenium-playground/drag-drop-range-sliders-demo'
    );
  }

  async getSliderPosition() {
    return await this.slider.boundingBox();
  }

  async moveRight() {
    await this.slider.focus();

    for (let i = 0; i < 20; i++) {
      await this.page.keyboard.press('ArrowRight');
    }
  }
}
