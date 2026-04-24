import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('chrome-error://chromewebdata/');
  await page.getByRole('button', { name: 'Reload' }).click();
  
  await page.goto('https://www.amazon.com/');
  await page.getByRole('link', { name: 'Choose a language for shopping in Amazon United States. The current selection' }).click();
  await page.getByRole('button', { name: 'Submit' }).first().click();
  await page.getByRole('link', { name: 'Today\'s Deals' }).click();
  await page.getByRole('link', { name: 'LEVOIT Cordless Vacuum Cleaner, Stick Vac with Tangle-Resistant Design, Up to 50 Minutes, Powerful Suction, Rechargeable, Lightweight, and Versatile for Carpet, Hard Floor, Pet Hair, LVAC-200', exact: true }).click();
  await page.getByRole('button', { name: 'See more' }).click();
});