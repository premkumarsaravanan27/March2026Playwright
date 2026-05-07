import { test, expect } from '@playwright/test';

test('mouse hover on Fresh', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

   const fresh = page.locator('button.dropbtn');
    await fresh.hover();
    // Example validation (optional)
    await expect(fresh).toBeVisible();
    await page.waitForTimeout(5000);
});