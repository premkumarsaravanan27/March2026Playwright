//const { expect } = require('@playwright/test');
import { expect } from '@playwright/test';

exports.HomePage = class HomePage {

    constructor(page) {
        this.page = page;
        this.homeUrl = 'https://www.demoblaze.com/';
        this.productList = '//div[@id="tbodyid"]//div//h4//a';
        this.productContainer = page.locator('#tbodyid');
        this.productCards = page.locator('#tbodyid .card');
        this.addToCartBtn = '//a[text()="Add to cart"]';
        this.cart = '#cartur';
        this.homeLink = page.locator('a.nav-link', { hasText: 'Home' });
        this.contactLink = page.locator('a.nav-link', { hasText: 'Contact' });
    };

    async goto() {
        await this.page.goto(this.homeUrl);
    };

    async verifyHomePage() {
        await expect(this.page).toHaveURL(this.homeUrl);
        await expect(this.page).toHaveTitle('STORE');
        await expect(this.productContainer).toBeVisible();

        const cardCount = await this.productCards.count();
        await expect(cardCount).toBeGreaterThan(0);

        await expect(this.homeLink).toBeVisible();
        await expect(this.contactLink).toBeVisible();
    };

    async addProducts(productName) {
        const productLists = await this.page.$$(this.productList);
        for(const product of productLists) {
            if(productName === await product.textContent()) {
                await product.click();
                break;
            }
        }
        await this.page.on('dialog' , async dialog => {
            if(dialog.message().includes('Product added.')) {
                await dialog.accept();
            }
        });

        await this.page.locator(this.addToCartBtn).click();
    };

    async goToCart() {
        await this.page.locator(this.cart).click();
    }
}