import{test,expect} from '@playwright/test';

test('handle checkboxes',async({page})=>{    

   await page.goto('https://testautomationpractice.blogspot.com/');

    //single checkbox
    //await page.locator("//input[@id='monday' and @type='checkbox']").check();
    // await page.check("//input[@id='monday' and @type='checkbox']");

    // expect(await page.locator("//input[@id='monday' and @type='checkbox']")).toBeChecked();
    // expect(await page.locator("//input[@id='monday' and @type='checkbox']").isChecked()).toBeTruthy();
    // expect(await page.locator("//input[@id='wednesday' and @type='checkbox']").isChecked()).toBeFalsy();






   // multiple checkboxes
    const checkboxLocators=[
        "//input[@id='sunday' and @type='checkbox']",
        "//input[@id='monday' and @type='checkbox']",
        "//input[@id='wednesday' and @type='checkbox']"
    ];

    for(const locator of checkboxLocators) //select multiple checkboxes
    {
        await page.locator(locator).check();
    }
       await page.waitForTimeout(5000);

        for (const locator of checkboxLocators) //unselect multiple which are already selected
    {   
        if(await page.locator(locator).isChecked())
        {
            await page.locator(locator).uncheck();
        }
    

    await page.waitForTimeout(5000);

}});