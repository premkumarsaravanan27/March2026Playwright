import { test, expect } from '@playwright/test';

test('right click on Fresh', async ({ page }) => {

    await page.goto('https://www.amazon.in/');

    // Best locator (stable)
    const fresh = page.locator('#nav-link-groceries');

    // Right click
    await fresh.click({ button: 'right' });

    await expect(fresh).toBeVisible();
    await page.waitForTimeout(5000);

});