import { Page } from '@playwright/test';

export class CompanyPage {
    constructor(private page: Page) { }

    //Company Name
    async companyname(companyname: string) {
        await this.page.getByLabel('Company name').fill(companyname);
    }

    //Company Code
    async companycode(companycode: string) {
        await this.page.getByLabel('Company Code').fill(companycode);
    }

    //Email
    async email(Email: string) {
        await this.page.getByLabel('Email *').fill(Email);
    }

    //Logo
    async uploadlogo(uploadlogo: string) {
        await this.page.setInputFiles('#logoUpload', uploadlogo);
    }

    //Address
    async enteraddress(address: string) {
        await this.page.getByLabel('Address').fill(address);
    }

    //Phone no
    async enterphoneno(phoneno: string) {
        await this.page.locator('#phone').first().fill(phoneno);
    }

    //Document name
    async documentname(docname: string) {
        await this.page.getByLabel('Document name').fill(docname)
    }

    //Upload document
    async uploaddocument(uploaddocument: string) {
        await this.page.setInputFiles('#fileUpload0', uploaddocument);
    }

    //Representative Name
    async representativename(representativename: string) {
        await this.page.getByLabel('Representative name').fill(representativename);

    }

    //Designation
    async Designation(designation: string) {
        await this.page.getByLabel('Designation').fill(designation);
    }

    //Phone no - rep
    async enterphone(repphoneno: string) {
        await this.page.locator('#phone').nth(1).fill(repphoneno);
    }

    //Email - rep
    async repemail(repemail: string) {
        await this.page.getByLabel('Email ID').fill(repemail);
    }


}