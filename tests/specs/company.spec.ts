import test from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { CompanyPage } from "../pages/company.page";

test('companypage', async ({ page }) => {

    const login = new LoginPage(page);
    const company = new CompanyPage(page);

    await login.defaultlogin('admin', 'admin@1200');



    await page.getByRole('button', { name: 'MASTERS' }).click();
    await page.getByRole('link', { name: 'Company' }).click();


    await page.locator('.p-element').first().click();


    await company.companyname('Automation Company')

    await company.companycode('AUTO')

    await company.email('automation@gmail.com')
    await company.uploadlogo('C:/Users/annni/Downloads/logo black profile.jpg')

    await company.enteraddress('kochi')

    await company.enterphone('46467655')

    await company.documentname('Company document')


    await company.uploaddocument('C:/Users/annni/Downloads/blank doc.pdf')

    await company.representativename('kiran')
    await company.Designation('QA')
    await company.enterphoneno('566777777')
    await company.repemail('kiran@gmail.com')
    await page.getByRole('button', { name: 'Submit tick' }).click();
    await page.waitForTimeout(5000);


    

})


