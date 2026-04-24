import {test,expect} from '@playwright/test';

test('handle input box',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

//radio button
await page.locator("//input[@value='male']").click();
//await page.check("//input[@value='female']");
await expect(await page.locator("//input[@value='male']")).toBeChecked();
await expect(await page.locator("//input[@value='male']").isChecked()).toBeTruthy();
await expect(await page.locator("//input[@value='female']").isChecked()).toBeFalsy();
   
   
    await page.waitForTimeout(5000); //pause for 5 seconds to see the result

});


