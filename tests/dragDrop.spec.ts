import { test } from '@playwright/test';
import { DragDropPage } from '../pages/dragDropPage';

test('Drag and Drop + Reset', async ({ page }) => {

  const dragPage = new DragDropPage(page);

  // Step 1: Open site
  await dragPage.navigate();

  // Step 2: Open Drag & Drop page
  await dragPage.openDragDrop();

  // Step 3: Drag elements
  await dragPage.dragDraggable1();
  await dragPage.dragDraggable2();

  // Step 4: Click Reset
  await dragPage.clickReset();

});