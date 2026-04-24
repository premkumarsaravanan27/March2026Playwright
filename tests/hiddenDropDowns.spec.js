import {test,expect} from "@playwright/test";

test("Hidden Options dropdown ", async ({page}) =>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');


    await page.locator("[name='username']").fill("Admin");
    await page.locator("[name='password']").fill('admin123');
    await page.locator("[type='submit']").click();
    await page.locator("//span[text()='PIM']").click();

    //click on the drop down

    await page.locator("//div[contains(@class,'oxd-select-text')]").nth(6).click();
    setTimeout(() => { debugger; }, 3000);

    await page.locator(".oxd-select-text").nth(1).click();
    await page.getByRole('optio', { name: 'Automation Tester' }).click();


})