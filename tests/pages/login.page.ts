import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) { }

  async navigation() {
    await this.page.goto(
      'https://testapp.touchworldtechnology.com/scalesius/ui/#/login',
    );
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