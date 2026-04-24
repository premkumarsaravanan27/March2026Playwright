//1) expect(page).toHaveURL()                  page has url
//2) expect(page).toHaveTitle()                page has title
//3) expect(locator).toBeVisible               element is visible
//4) expect(locator).toBeEnabled               control is enabled
//5) expect(locator).toBeChecked               Radio/checkbox is checked
//6) expect(locator).toHaveText()              element has text
//7) expect(locator).toContainText()           element contain text
//8) expect(locator).toHaveValue(value)        input has a value..
//9)expect(locator).toHaveCount()            list of elements has given length

const { test, expect } = require('@playwright/test');

test('Assertions', async ({ page }) => {

    await page.goto('https://demo.nopcommerce.com/register');

    //1) expect(page).toHaveURL()                  page has url

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    //2) expect(page).toHaveTitle()                page has title

    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    //3) expect(locator).toBeVisible               element is visible

    const logo = await page.locator('.header-logo');
    await expect(logo).toBeVisible();

    //4) expect(locator).toBeEnabled               control is enabled

    const textBox = await page.locator('//input[@id="small-searchterms"]');
    await expect(textBox).toBeEnabled();

    //5) expect(locator).toBeChecked               Radio/checkbox is checked
    // Radio Button

    const radioBtn = await page.locator('//input[@id="gender-female"]');
    await radioBtn.check();
    await page.waitForTimeout(1000);
    await expect(radioBtn).toBeChecked();

    // Check Box
    await page.waitForTimeout(3000);
    const checkBox = await page.locator('#NewsLetterSubscriptions_0__IsActive');
    await checkBox.uncheck();
    await expect(checkBox).not.toBeChecked();

    //6) expect(locator).toHaveText()              element has text

    await expect(await page.locator('.page-title h1')).toHaveText('Register');

    //7) expect(locator).toContainText()           element contain text

    await expect(await page.locator('.page-title h1')).toContainText('Regi');

    //8) expect(locator).toHaveValue(value)        input has a value..

    const nameInput = await page.locator('//input[@id="FirstName"]');
    await nameInput.fill("Riyaz");
    await page.waitForTimeout(1000);
    await expect(nameInput).toHaveValue('Riyaz');

    //9)expect(locator).toHaveCount()            list of elements has given length

    const options = await page.locator('//select[@id="customerCurrency"]//option');
    await expect(options).toHaveCount(2);


    await page.waitForTimeout(2000);

});