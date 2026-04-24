import { test, expect } from '@playwright/test';

test('Keyboard actions: Ctrl+A, Ctrl+C, Tab, Ctrl+V', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enter text in first field
    await page.click("#name");
    await page.keyboard.type('Premkumar')
    // Focus on first input
    await page.click('#name');

    // Step 1: Select all text
    await page.keyboard.press('Control+A');

    // Step 2: Copy text
    await page.keyboard.press('Control+C');

    // Step 3: Move to next field using TAB
    await page.keyboard.press('Tab');

    // Step 4: Paste text
    await page.keyboard.press('Control+V');

    await page.waitForTimeout(5000);

});