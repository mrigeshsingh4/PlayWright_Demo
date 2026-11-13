import { Locator, Page } from '@playwright/test';

export class LoginPage {
    //readonly(NOT mandatory)is used so that the variables are not reassigned/Cannot be changed
    readonly page: Page;
    readonly usernameTxtbx: Locator;
    readonly passwordTxtbx: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameTxtbx = page.locator("input[name='username']");
        this.passwordTxtbx = page.locator("input[name='password']");
        this.loginButton = page.locator("button[type='submit']");
    }

    async enterUserName(username: string) {
        await this.usernameTxtbx.fill(username);
    }

    async enterPassword(password: string) {
        await this.passwordTxtbx.fill(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }
}