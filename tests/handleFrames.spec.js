import { test, expect } from '@playwright/test';

test('frames', async ({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    
    //total frames
    const allframes=await page.frames()
    console.log("Number of frames",allframes.length);

    

    //approach 1 using name of url
    //const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    //await frame1.fill('[type="text"]','Subash');

    //await page.waitForTimeout(2000);
     
    //approach 2-using frame locator
    const inputbox = page.frameLocator("frame[src='frame_1.html']")
    .locator("[name='mytext1']");
    await inputbox.fill("Hello")

    await page.waitForTimeout(5000);
})