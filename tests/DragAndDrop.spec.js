import { test, expect } from '@playwright/test';

test('Drag and Drop - testautomationpractice', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const source = page.locator('#draggable');
    const target = page.locator('#droppable');

    //apporach 1
    await source.hover();
    await page.mouse.down();
    await target.hover();
    await page.mouse.up();

    //approach 2
    const source1=await page.locator('#draggable');
    const target1=await page.locator('#droppable');

    await source1.dragTo(target1);

    
  await page.waitForTimeout(5000);
});