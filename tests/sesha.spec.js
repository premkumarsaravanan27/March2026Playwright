import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('link', { name: 'Cleaning accessories' }).click();
  await page.getByTitle('Sponges, Cloths & Brushes').click();
  await page.getByRole('link', { name: 'Robustt Car Interior Cleaning Brush Combo | 10 Pcs Pack | AC Vent Brush |' }).click();
  await page.getByRole('radio', { name: '1 Small 1 Big Brush ₹199.00' }).click();
  await page.getByRole('radio', { name: '5 Small 5 Big Brush ₹899.00' }).click();
  await page.getByRole('radio', { name: '1 Small 1 Big Brush ₹199.00' }).click();
  await page.getByRole('radio', { name: '2 Small 2 Big Brush ₹379.00' }).click();
});