import { test, expect } from '@playwright/test';

test('User Registration and Login Flow', async ({ page }) => {

  await page.goto('https://demowebshop.tricentis.com/');

  await page.getByRole('link', { name: 'Register' }).click();

  await page.getByLabel('First name:', { exact: true }).fill('Test');
  await page.getByLabel('Last name:', { exact: true }).fill('User');

  const email = `testuser${Date.now()}@gmail.com`;
  await page.getByLabel('Email:', { exact: true }).fill(email);

  // ✅ FIXED HERE
  await page.getByLabel('Password:', { exact: true }).fill('Test@123');
  await page.getByLabel('Confirm password:', { exact: true }).fill('Test@123');

  await page.getByRole('button', { name: 'Register' }).click();

  await expect(page.locator('.result')).toHaveText('Your registration completed');

  await page.getByRole('link', { name: 'Log out' }).click();

  await page.getByRole('link', { name: 'Log in' }).click();

  await page.getByLabel('Email:', { exact: true }).fill(email);
  await page.getByLabel('Password:', { exact: true }).fill('Test@123');

  await page.getByRole('button', { name: 'Log in' }).click();

  await expect(page.getByRole('link', { name: email })).toBeVisible();

});