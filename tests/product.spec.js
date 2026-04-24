import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 15 Pro Max'],
});

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('link', { name: 'Food & beverages | Starting ₹' }).click();
  await page.getByRole('link', { name: 'Breakfast needs' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('link', { name: 'Saffola Oats | 2kg | Instant' }).click();
});