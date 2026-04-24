import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
  await page.getByRole('link', { name: 'Flipkart Flipkart https://www' }).click();
  await page.getByRole('button', { name: '✕' }).click();
});