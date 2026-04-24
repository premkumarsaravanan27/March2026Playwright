import { test, expect } from '@playwright/test';

test('OrangeHRM - Built-in Locators Demo', async ({ page }) => {

  // 1. Navigate
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // 2. getByAltText() → Logo validation
  await expect(page.getByAltText('company-branding')).toBeVisible();

  // 3. getByPlaceholder() → Username & Password
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');

  // 4. getByLabel() → Alternative way (commented)
  // await page.getByLabel('Username').fill('Admin');
  // await page.getByLabel('Password').fill('admin123');

  // 5. getByText() → Login (not preferred but shown)
  // await page.getByText('Login').click();

  // 6. getByRole() → Best way to click Login
  await page.getByRole('button', { name: 'Login' }).click();

  // 7. Validate Dashboard using getByRole
  await expect(page.getByRole('heading', { name: /dashboard/i })).toBeVisible();

  // 8. getByTitle() → Example (may or may not exist)
  // await page.getByTitle('OrangeHRM').click();

  // 9. getByTestId() → Example (not available in this app)
  // await page.getByTestId('username').fill('Admin');

});