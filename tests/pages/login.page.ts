import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) { }

//  testUrl: string = process.env.TESTURL as string;


  async navigation() {
    // console.log(this.testUrl);
    //await this.page.goto(this.testUrl+ '#/login');
    await this.page.goto('#/login');
  }

  async enterusername(username: string) {
    await this.page.getByPlaceholder('Username').fill(username);
  }

  async enterpassword(password: string) {
    await this.page.getByPlaceholder('@#*%').fill(password);
  }

  async submitbutton() {
    await this.page.getByRole('button', { name: 'Sign in' }).click();
  }

  async passwordvisibility() { 
    await this.page.locator('i.fa-eye-slash').click();
  }


  async defaultlogin(username: string, password: string) {
    await this.navigation()
    await this.enterusername(username)
    await this.enterpassword(password)
    await this.submitbutton()
    await this.page.waitForURL('**/admin/dashboard');
  }
}