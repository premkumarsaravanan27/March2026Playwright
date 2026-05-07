import { test, expect } from '@playwright/test';

test('file upload test', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator("#multipleFilesInput")
        .setInputFiles([
            "files\\premkumar_Resume Epik.pdf",
           "files\\premkumar_Resume INFOSYS.pdf",
        
          "files\\gallery2.jpg"
]);
      await page.waitForTimeout(5000);
});