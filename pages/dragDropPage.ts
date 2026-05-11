import { Page, expect } from '@playwright/test';

export class DragDropPage {

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  dragDropLink = 'text=Drag and Drop';
  draggable1 = 'text=Draggable 1';
  draggable2 = 'text=Draggable 2';
  resetButton = 'text=Reset';

  // Navigate
  async navigate() {
    await this.page.goto('https://www.testmuai.com/selenium-playground/');
  }

  // Open Drag & Drop page
  async openDragDrop() {
    const link = this.page.locator(this.dragDropLink);

    await link.scrollIntoViewIfNeeded();
    await link.click();
  }

  // Drag function (simple pointer drag)
  async dragElement(source: string, targetX: number, targetY: number) {

    const element = this.page.locator(source);

    const box = await element.boundingBox();
    if (!box) throw new Error('Element not found for drag');

    await this.page.mouse.move(
      box.x + box.width / 2,
      box.y + box.height / 2
    );

    await this.page.mouse.down();
    await this.page.mouse.move(targetX, targetY);
    await this.page.mouse.up();
  }

  // Drag Draggable 1
  async dragDraggable1() {
    await this.dragElement(this.draggable1, 400, 300);
  }

  // Drag Draggable 2
  async dragDraggable2() {
    await this.dragElement(this.draggable2, 450, 350);
  }

  // Click Reset
  async clickReset() {
    const btn = this.page.locator(this.resetButton);

    await btn.scrollIntoViewIfNeeded();
    await btn.click();
  }
}