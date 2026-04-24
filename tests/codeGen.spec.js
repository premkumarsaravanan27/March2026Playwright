import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('link', { name: 'Refrigerators' }).click();
  expect(page.locator('.a-section.a-spacing-small.a-spacing-top-small')).toHaveText('1-16 of over 10,000 results for "Refrigerators"');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('.s-widget-container.s-spacing-small.s-widget-container-height-small.celwidget.slot\\=MAIN.template\\=SEARCH_RESULTS.widgetId\\=search-results_2 > span > .puis-card-container > .a-section.a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal').click();
  const page1 = await page1Promise;
  await page1.goto('https://www.amazon.in/Haier-Direct-Single-Refrigerator-HED-205MFB-P/dp/B0BTHLGZ1Q/ref=sr_1_2?_encoding=UTF8&content-id=amzn1.sym.58c90a12-100b-4a2f-8e15-7c06f1abe2be&dib=eyJ2IjoiMSJ9.pfzhpD3MXKd9Su74FuVG0Vx-xTADoHdc_KWlN91CHq9hICxXheC_ZS_eEGbeGGjc89RkX0pbzJnsflGdSrX63FkLI14dWdBDde5q6JW3gsEpLNFvtspzBWpX_zFnBTUqo7W2V8PqksCa08wh8xdzjyA3IsU3KuvA-orJXRksONCbvX_ZBzHKE0iNhSkQCVPG-zmNfLf1_w39DRyzsc9FOzD3Os1un1zf9GAAPcPZMjg4O0I6Yh61KcAEYrjL1ZIeGR9N6IreHG1qV4tABmbub4pgjGrrOOWNzEP-p-l7fEA.rQy5WYL3fdUyq7BcKuKrbLa-iig380mdjq6RVXyFYKY&dib_tag=se&pd_rd_r=7f109e9d-9022-4538-a533-63cc97546cd6&pd_rd_w=m2pBM&pd_rd_wg=3x6Sz&qid=1776502680&refinements=p_85%3A10440599031&rps=1&s=kitchen&sr=1-2&th=1');
  await page1.getByRole('button', { name: 'Add to cart' }).click();
});