import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test('loginsuccess', async ({ page }) => {

   const login = new LoginPage(page);
   await login.navigation();
   await login.enterusername('admin');
   await page.waitForTimeout(500);

   await login.enterpassword('admin@1200');
   await page.waitForTimeout(500);
   await login.passwordvisibility();

   await login.submitbutton();
   const toastLocator = await page.locator('#toast-container');
   if (toastLocator) {
      await page.waitForTimeout(1000);
   }
   console.log('loginsuccess');

})

test('loginfail', async ({ page }) => {

   const login = new LoginPage(page);
   await login.navigation();
   await login.enterusername('admin');
   await page.waitForTimeout(500);

   await login.enterpassword('admin@12000');
   await page.waitForTimeout(500);

   await login.submitbutton();
   const toastLocator = await page.locator('#toast-container');
   if (toastLocator) {
      await page.waitForTimeout(1000);
   }
   console.log('loginfail');

})