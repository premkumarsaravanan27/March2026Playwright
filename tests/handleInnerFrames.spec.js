import { test, expect } from '@playwright/test';

test('frames', async ({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    
    const frame3 = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})
    frame3.locator("input[name='mytext3']").fill("welcome")

    //nested frame

    const childFrames=await frame3.childFrames()
    childFrames[0].locator("//div[@id='i6']/div[3]/div").click()

    await page.waitForTimeout(5000);
})