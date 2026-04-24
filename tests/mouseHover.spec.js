import { test, expect } from '@playwright/test';

test('mouse hover on Fresh', async ({ page }) => {

    await page.goto('https://www.amazon.in/');

   const fresh = page.locator('#nav-link-groceries');
    await fresh.hover();
    // Example validation (optional)
    await expect(fresh).toBeVisible();
    await page.waitForTimeout(5000);
});