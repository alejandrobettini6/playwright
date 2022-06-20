const { chromium } = require('playwright');
import { Given, When } from '@cucumber/cucumber'

Given('Abro google', async function(){
  const browser = await chromium.launch();
  const context = await browser.newContext();
  this.page = await context.newPage();
  await this.page.goto('https://google.com');
  //await page.screenshot({path: 'screenshot.png'});
  //await browser.close();
});

Given('Busco algo', async function(){
  let e = await this.page.locator('//input[@aria-label="Buscar"]'); 
  await e.type('Alejandro');
  await e.press('Enter')
});