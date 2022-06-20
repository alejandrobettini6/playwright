import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://tiendaclic-uat.aper.cloud/inicio-sesion
  await page.goto('https://tiendaclic-uat.aper.cloud/inicio-sesion');

});