import {test,expect} from '@playwright/test';


// test('Alert With Ok',async({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/') 
    
// //dialog window handler -----enabling alert handling
//  await page.click("#alertBtn"); //click on the button to trigger the alert

// page.on('dialog',async dialog=>{ 
//     expect(dialog.type()).toBe('alert');
    
//     expect(dialog.message()).toBe('I am an alert box!');
//     await page.waitForEvent('dialog'); //wait for the dialog to appear
//     await dialog.accept(); //click on ok button
    

// })


//  /*await page.click("//button[@id='alertBtn']"); //click on the button to trigger the alert
//  await page.waitForTimeout(5000); //pause for 5 seconds to see the result */

//  test('Alert With Ok and cancel',async({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/') 

// //dialog window handler -----enabling alert handling
// page.on('dialog',async(dialog)=>{
//     expect(dialog.type()).toBe('confirm');
//     expect(dialog.message()).toBe('Press a button!');
//     //await dialog.accept(); //click on ok button
//     await dialog.dismiss(); //click on cancel button

// })

// await page.click("//button[@id='confirmBtn']"); //click on the button to trigger the alert

// await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed Cancel!'); //assertion to verify the result after clicking on cancel button

// await page.waitForTimeout(5000); //pause for 5 seconds to see the result 

// await page.click("//button[@id='confirmBtn']"); //click on the button to trigger the alert



 test('Alert With prompt',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/') 

// //dialog window handler -----enabling alert handling
 page.on('dialog',async(dialog)=>{
    expect(dialog.type()).toContain('prompt');
    expect(dialog.message()).toContain('Please enter your name:');
    expect(dialog.defaultValue()).toBe('Harry Potter');
     await dialog.accept('Harry Potter'); //click on ok button
    

 })



 await page.click("//button[@id='promptBtn']"); //click on the button to trigger the alert

 //await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed Cancel!'); //assertion to verify the result after clicking on cancel button

 await expect(page.locator("//p[@id='demo']")).toHaveText('Hello Harry Potter! How are you today?'); //assertion to verify the result after clicking on ok button and entering the name

 await page.waitForTimeout(5000); //pause for 5 seconds to see the result

// })
 // })
 })