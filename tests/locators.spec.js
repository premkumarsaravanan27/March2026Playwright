import {test,expect} from '@playwright/test' // import test and expect from playwright test
 // test case for locators
test('locators',async({page})=>{

    await page.goto('https://www.demoblaze.com/');

    //click on login button using property id
    await page.locator('a#login2').click();
    //await page.click('a#login2'); // click on login button using css selector

    // fill the username and password fields using css selector
   // await page.locator('input#loginusername').fill('pavonol');
    await page.fill('input#loginusername','pavonol');

    //fill the password field using css selector
    await page.fill('input[id="loginpassword"]','test@123');

    //verify login button is visible using xpath
    await page.click('//button[text()="Log in"]');

    
 

})