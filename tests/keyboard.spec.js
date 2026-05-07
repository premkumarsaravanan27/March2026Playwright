import {test,expect} from '@playwright/test';

test('handle keyboard actions',async({page})=>{

  await page.goto('https://testautomationpractice.blogspot.com/');

  await page.locator('//input[@id="name"]').click();

  await page.keyboard.type('Naveen');

  await page.keyboard.press('Control+A');

  await page.keyboard.press('Control+C');

  await page.keyboard.press('Tab');

  await page.keyboard.press('Control+V');

  await page.keyboard.press('Control+A');

  await page.keyboard.press('Control+C');

  const wiki = page.locator('//input[@id="Wikipedia1_wikipedia-search-input"]').click();

  await page.keyboard.press('Control+V');

  await page.waitForTimeout(5000);

});