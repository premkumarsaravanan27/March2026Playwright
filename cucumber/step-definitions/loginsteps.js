const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

let browser;
let context;
let page;

Given('user is on login page', async function () {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://example.com/login');
});

When('user enters username {string} and password {string}', async function (username, password) {
  await page.fill('#username', username);
  await page.fill('#password', password);
  await page.click('#login');
});

Then('user should see dashboard', async function () {
  await page.waitForSelector('#dashboard');
  await browser.close();
});