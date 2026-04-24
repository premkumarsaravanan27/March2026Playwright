/*import { test, expect } from '@playwright/test';

test('Full Page Screenshot', async ({ page }) => {
  await page.goto('https://www.amazon.in/');

  await page.waitForTimeout(5000); // Wait for 5 seconds to ensure the page is fully loaded
  await page.screenshot({
    path: 'screenshots/fullpage.png',
    fullPage: true
  });
});
*/
/*import { test, expect } from '@playwright/test';

test('Visible Page Screenshot', async ({ page }) => {
  await page.goto('https://www.amazon.in/');

  await page.waitForTimeout(5000); // Wait for 5 seconds to ensure the page is fully loaded

  await page.screenshot({
    path: 'screenshots/visible.png'
  });
});*/

import { test, expect } from '@playwright/test';

test('Element Screenshot', async ({ page }) => {
  await page.goto('https://www.amazon.in/');

  const logo = page.locator('#av-logo-sprites');

  await logo.screenshot({
    path: 'screenshots/' + Date.now() + '_logo.png'
  });
});