import { test } from '@playwright/test';
import { DatePickerPage } from '../pages/datePickerPage';

test('Date Picker Demo', async ({ page }) => {

  const dp = new DatePickerPage(page);

  await dp.navigate();

  await dp.openDatePicker();

  await dp.selectDate('10/12/2025');

  await dp.verifyDate('10/12/2025');

});
