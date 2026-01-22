import { Page, Locator } from "@playwright/test";

export { Locator, Page } from "@playwright/test";
import { SetUp } from "../Utils/SetUp";

export class LoginPage {
        readonly page: Page;
        readonly usernameTextbox: Locator;
        readonly passwordTextBox: Locator;
        readonly loginButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.usernameTextbox = page.locator('[name="username"]');
        this.passwordTextBox = page.locator('input[name="password"]');
        this.loginButton = page.locator('button[type="submit"]');
    }

    async openApplication() {
        await this.page.goto(SetUp.getAppUrl());
    }


    async loginToApplication(username: string, password: string) {
        await this.usernameTextbox.fill(username);
        await this.passwordTextBox.fill(password);
        await this.loginButton.click();

        
        SetUp.setuserCredentials(username, password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

}