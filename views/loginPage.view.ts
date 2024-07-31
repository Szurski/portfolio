import { Locator, Page } from "@playwright/test";

export class LoginPage{
    usernameInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;

    constructor(public readonly page: Page) {
       this.usernameInput = page.locator('[data-test="username"]')
       this.passwordInput = page.locator('[data-test="password"]')
       this.loginButton = page.locator('[data-test="login-button"]')
    }
}