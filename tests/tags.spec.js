import {test,expect} from '@playwright/test'

test('Test 1 @sesha',async({page}) =>{

    await page.goto('https://www.amazon.in/');
    await expect(page).toHaveURL('https://www.amazon.in/')
})

test('Test 2 @regression',async({page}) =>{

    await page.goto('https://www.flipkart.com/');
    await expect(page).toHaveURL('https://www.flipkart.com/')
})
test('Test 3 @smoke @regression',async({page}) =>{

    await page.goto('https://www.myntra.com/');
    await expect(page).toHaveURL('https://www.myntra.com/')
})
