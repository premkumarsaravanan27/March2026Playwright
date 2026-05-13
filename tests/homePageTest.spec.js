const { test } = require('@playwright/test');
const { HomePage } = require('../pages/homePage');

test.describe('DemoBlaze home page tests', () => {
  test('should load the homepage and display products using POM', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();
    await homePage.verifyHomePage();
    await homePage.addProducts('Samsung galaxy s6');
  });
});