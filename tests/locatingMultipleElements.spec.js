import{test,expect} from '@playwright/test';


test('locating multiple elements',async({page})=>{  

    await page.goto('https://www.demoblaze.com/'); 


  

// const links = await page.locator("//div[@id='tbodyid']//h4/a").all();
  await page.waitForSelector("//div[@id='tbodyid']//h4/a"); 

     const products =await page.$$("//div[@id='tbodyid']//h4/a");

    for (const product of products)
    {
        const productName = await product.textContent();
        console.log(productName);   
    }
});
