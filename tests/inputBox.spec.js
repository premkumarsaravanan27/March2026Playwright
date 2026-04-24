import {test,expect} from '@playwright/test';

test('handle input box',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Inputbox -first name 

    await expect(page.locator('//input[@id="name"]')).toBeVisible();
    await expect(page.locator('//input[@id="name"]')).toBeEmpty();
    await expect(page.locator('//input[@id="name"]')).toBeEditable();
    await expect(page.locator('//input[@id="name"]')).toBeEnabled();

    await page.fill('//input[@id="name"]','Ashwin');
    // await page.locator('//input[@id="name"]').fill('Ashwin');

    await page.locator('//input[@id="email"]').fill('hari@gmail.com');

    await page.waitForTimeout(5000); //pause for 5 seconds to see the result

});


