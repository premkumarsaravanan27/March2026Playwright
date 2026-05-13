import {test,expect} from '@playwright/test';

test('Assertions in Playwright',async({page})=>{    

     //open app url

    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2Felectronics');

    //Ensures the page is navigated to the given URL.
    await expect.soft (page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2Felectronics');
 
    //Ensures the page has the given title. change the title to fail the test and see the result
    await expect.soft (page).toHaveTitle('nopCommerce demo store. Register');

});
