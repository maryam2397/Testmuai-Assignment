import { test, expect } from '@playwright/test';
import { AlertsPage } from '../pages/alerts.page';

test('JavaScript Alerts - stable working version', async ({ page }) => {

  const alerts = new AlertsPage(page);

  await alerts.open();

  // ======================
  // SIMPLE ALERT
  // ======================
  page.once('dialog', async dialog => {
    expect(dialog.message()).toContain('I am an alert box');
    await dialog.accept();
  });

  await alerts.clickSimpleAlert();

  // ======================
  // CONFIRM ALERT
  // ======================
  page.once('dialog', async dialog => {
    expect(dialog.message()).toContain('Press a button');
    await dialog.accept();
  });

  await alerts.clickConfirm();

  // ======================
  // PROMPT ALERT
  // ======================
  page.once('dialog', async dialog => {
    expect(dialog.message()).toContain('Please enter your name');
    await dialog.accept('Maryam');
  });

  await alerts.clickPrompt();

  // ======================
  // FINAL SAFE ASSERTION
  // ======================

  await expect(page).toHaveURL(/javascript-alert-box-demo/);

});
