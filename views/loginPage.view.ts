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
    async goto(){
        await this.page.goto('/');
    }
    async login(username: string, password: string){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}