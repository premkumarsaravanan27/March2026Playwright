import {test, expect} from '@playwright/test';  

test('double click on Fresh', async ({ page }) => {

    await page.goto('https://www.amazon.in/');

    // Best locator (stable)
    const fresh = page.locator('#nav-link-groceries');

    // Double click
    await fresh.click({ button: 'left', clickCount: 2 });

    await expect(fresh).toBeVisible();
    await page.waitForTimeout(5000);

});