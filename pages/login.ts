import { Page } from "@playwright/test";

export default class Login {

    constructor(public page: Page) {
        
    }
    public async enterUserName(username: string){
        await this.page.locator("input[name='username']").type(username)
    }

    public async enterPassword(password: string){
        await this.page.locator("input[name='password']").type(password)
    }

    public async clickLoginButton(){
        await this.page.locator("button[class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']").click();
    }
     
}