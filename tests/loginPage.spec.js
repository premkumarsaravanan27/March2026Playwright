const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test.describe('DemoBlaze Login Tests', () => {

  test('Valid Login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Navigate to site
    await loginPage.goto();

    // Perform login
    await loginPage.login('pavanol', 'test@123');

    // Assertion → user name displayed
    const userText = page.locator('#nameofuser');

    await expect(userText).toBeVisible();

    await expect(userText).toContainText('Welcome');
  });


  test('Invalid Login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    // Handle alert before triggering it
    page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('Wrong password');
      await dialog.accept();
    });

    await loginPage.login('wrongUser', 'wrongPass');
  });

});