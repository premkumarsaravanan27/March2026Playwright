// pages/LoginPage.js

class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginLink = page.locator('#login2');
    this.username = page.locator('#loginusername');
    this.password = page.locator('#loginpassword');
    this.loginBtn = page.locator('//button[text()="Log in"]');
  }

  async goto() {
    await this.page.goto('https://www.demoblaze.com');
  }

  async login(user, pass) {
    // Handle alert popup (for invalid login / add to cart alerts)
    this.page.on('dialog', async dialog => {
      await dialog.accept();
    });

    await this.loginLink.click();
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }
}

module.exports = LoginPage;