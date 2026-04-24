import { test, expect, chromium } from '@playwright/test';

let browser;
let page;

test.describe('Demoblaze Hooks Example', () => {

  // 🔹 Runs once before all tests
  test.beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();

    console.log('Before All → Browser Launched');
  });

  // 🔹 Runs before each test
  test.beforeEach(async () => {
    await page.goto('https://www.demoblaze.com/');
    console.log('Before Each → Navigated to Homepage');
  });

  // ✅ Test 1: Login
  test('Login Test', async () => {
    await page.click('#login2');
    await page.fill('#loginusername', 'your_username');
    await page.fill('#loginpassword', 'your_password');
    await page.click('button[onclick="logIn()"]');

    await page.waitForSelector('#nameofuser');
    await expect(page.locator('#nameofuser')).toContainText('Welcome');
  });

  // ✅ Test 2: Add Product to Cart
  test('Add Product to Cart', async () => {
    await page.click('text=Samsung galaxy s6');
    await page.click('text=Add to cart');

    // Handle alert
    page.on('dialog', async dialog => {
      await dialog.accept();
    });
  });

  // 🔹 Runs after each test
  test.afterEach(async () => {
    console.log('After Each → Test Completed');
  });

  // 🔹 Runs once after all tests
  test.afterAll(async () => {
    await browser.close();
    console.log('After All → Browser Closed');
  });

});