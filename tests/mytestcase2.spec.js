import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('.a-link-normal.s-no-outline').first().click();
  const page1 = await page1Promise;
  await page1.locator('#anonCarousel9 > .a-carousel > li > span > .p13n-sc-uncoverable-faceout > a').first().click();
  const page2Promise = page1.waitForEvent('popup');
  await page1.getByRole('link', { name: 'SOFTSPUN Microfiber Cloth - 4' }).click();
  const page2 = await page2Promise;
  const page3Promise = page2.waitForEvent('popup');
  await page2.getByRole('link', { name: 'DETAILZ Microfiber Car' }).click();
  const page3 = await page3Promise;
  await page3.goto('https://www.amazon.in/dp/B0DG5FM59N/ref=sspa_dk_detail_1?pd_rd_i=B0DG5FM59N&pd_rd_w=oqWIO&content-id=amzn1.sym.67d3dec9-3503-44a1-a945-e969d04cca69&pf_rd_p=67d3dec9-3503-44a1-a945-e969d04cca69&pf_rd_r=9VKWMAY4K0VX0ZPFTV79&pd_rd_wg=vPLeE&pd_rd_r=0db1a495-e6ac-455c-b9f0-84676d5f25c3&aref=URJqUPAUiu&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1');
  await page3.locator('#a-autoid-32-announce').click();
  await page3.goto('https://www.amazon.in/dp/B0DG5FM59N/ref=sspa_dk_detail_1?pd_rd_i=B0DG5FM59N&pd_rd_w=oqWIO&content-id=amzn1.sym.67d3dec9-3503-44a1-a945-e969d04cca69&pf_rd_p=67d3dec9-3503-44a1-a945-e969d04cca69&pf_rd_r=9VKWMAY4K0VX0ZPFTV79&pd_rd_wg=vPLeE&pd_rd_r=0db1a495-e6ac-455c-b9f0-84676d5f25c3&aref=URJqUPAUiu&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1');
  const page4Promise = page3.waitForEvent('popup');
  await page3.getByLabel('Related products with free').getByRole('link', { name: 'MAX Microfiber Cloth for Car' }).click();
  const page4 = await page4Promise;
  await page4.locator('.a-link-normal.aok-block').first().click();
});