# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\reporter.spec.js >> Test 3
- Location: tests\reporter.spec.js:14:5

# Error details

```
Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.myntra.com/
Call log:
  - navigating to "https://www.myntra.com/", waiting until "load"

```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | 
  3  | test('Test 1',async({page}) =>{
  4  | 
  5  |     await page.goto('https://www.amazon.in/');
  6  |     await expect(page).toHaveURL('https://www.amazon.in/')
  7  | })
  8  | 
  9  | test('Test 2',async({page}) =>{
  10 | 
  11 |     await page.goto('https://www.flipkart.com/');
  12 |     await expect(page).toHaveURL('https://www.flipkart.com/')
  13 | })
  14 | test('Test 3',async({page}) =>{
  15 | 
> 16 |     await page.goto('https://www.myntra.com/');
     |                ^ Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.myntra.com/
  17 |     await expect(page).toHaveURL('https://www.myntra.com/')
  18 | })
  19 | 
```