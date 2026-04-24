import {test,expect} from '@playwright/test';

test('handle dropdowns',async({page})=>{  

    await page.goto('https://testautomationpractice.blogspot.com/');
 
    //mutiple ways to select option from the dropdown
    await page.locator("#country").selectOption({label:'India'}); //tag /visible text **
    await page.locator("#country").selectOption("india"); //visble text **
    await page.locator("#country").selectOption({value:'uk'}); //value
    await page.locator("#country").selectOption({index:1}); //index
    await page.selectOption("#country","usa");//by test by mentioning the value and locator **
    
    await page.waitForTimeout(5000);
    //Assertions
    //1) check number of options in the dropdown - approach 1
    //const options=await page.locator("#country option");
    //await expect(options).toHaveCount(10);

    //2) check number of options in the dropdown - approach 2
    //const optionsCount=await page.$$("#country option")
   // console.log('number of options in the dropdown are :',optionsCount.length);
   // await expect(optionsCount.length).toBe(10);

    //3) check if a specific option is available in the dropdown
    //const content=await page.locator('#country').textContent();
    //await expect(content.includes('India')).toBeTruthy();

    //4) check presence of value in the dropdown options -using looping
    const options=await page.$$("#country option");
   let status=false;
    for (const option of options)
    {
       //const optiontext=await option.textContent();
        let value=await option.textContent();
        if (value.includes('France'))
        {
            status=true;
            break;
        }
        
    }
await expect(status).toBeTruthy();



    await page.waitForTimeout(5000);

    

})