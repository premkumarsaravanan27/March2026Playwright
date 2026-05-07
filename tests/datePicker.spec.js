const { test, expect } = require('@playwright/test')

test('Date Pickers', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

     //await page.locator('input#datepicker').fill("01/25/2026");

     

    // Date Picker

  const year = "2004";
  const month = "May";
  const date = "17"

   await page.click('input#datepicker'); // open the calender

   while (true) {
     const currentYear = await page.locator('.ui-datepicker-year').textContent();
     const currrentMonth = await page.locator('.ui-datepicker-month').textContent();

      if (currentYear == year && currrentMonth == month) {
          break;
    }
        // await page.locator('[title="Next"]').click(); // Next
        await page.locator('[title="Prev"]').click(); // Past
     }

     await page.waitForTimeout(19000);

    const dates = await page.$$('//a[@class="ui-state-default"]');

   // Date Selection using Loop

    for(const dt of dates) {
        if(await dt.textContent() == date) {
            await dt.click();
            break;
        }
    }


//     // Date Selection - without loop

await page.locator('//a[@class="ui-state-default"][text()="21"]').click();

  await page.locator(`//a[@class="ui-state-default"][text()='${date}']`).click();

     await page.waitForTimeout(2000);
});