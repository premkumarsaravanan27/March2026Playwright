import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.locator('li:nth-child(3) > .nav-div').click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('iphone');
  await page.getByRole('button', { name: 'iphone 17 pro', exact: true }).click();
  await page.getByRole('link', { name: 'Apply the filter AMOLED to' }).click();
  await page.getByRole('link', { name: 'Apply the filter Get It by' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('.a-link-normal').first().click();
  const page1 = await page1Promise;
  await page1.goto('https://www.amazon.in/iPhone-Pro-256-Promotion-Breakthrough/dp/B0FQG1LPVF/ref=sr_1_1_sspa?crid=YJXQ6NTS9F6M&dd=DzlDac95h8zWBpO00GOlsQ%2C%2C&dib=eyJ2IjoiMSJ9.Cy9ibTifqiB4ItsDzg43v3-0ydgWKdoBBKhlld_SLIPGjHj071QN20LucGBJIEps.c_Ob2x26GK1Gd2xL6Ojlepj3WwjuSeF57V5bZRWWp-0&dib_tag=se&keywords=iphone%2B17%2Bpro&qid=1776769094&refinements=p_n_g-101013595158111%3A66009619031%2Cp_90%3A6741118031&rnid=6741116031&sprefix=iphone%2Caps%2C377&sr=8-1-spons&aref=0coWTPkatb&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1');
  await page1.locator('#above-dp-container').click();
});