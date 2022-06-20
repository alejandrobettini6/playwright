import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://www.promiedos.com.ar/
  await page.goto('https://www.promiedos.com.ar/');

  // Click #accordian >> text=Primera >> nth=1
  await page.locator('#accordian >> text=Primera').nth(1).click();
  await expect(page).toHaveURL('https://www.promiedos.com.ar/primera');

  // Click .cfecha >> nth=0
  await page.locator('.cfecha').first().click();

});