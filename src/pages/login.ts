import {Locator,Page} from '@playwright/test';

export class LoginPage{
    readonly page: Page;
    readonly emailLabel: Locator;
    readonly eamilInput: Locator;
    readonly eamilInputPlcaeHolder : Locator;
    readonly emailIsRequired : Locator;
    readonly passwordlabel: Locator;
    readonly passwordInput: Locator;
    readonly passwordInputPlcaeHolder: Locator;
    readonly passwordRequired: Locator;
    readonly passwordToggleIcon: Locator;
    readonly loginErrorNotification: Locator;
    readonly loginSuccessfullNotification: Locator;
    readonly rememberMeCheckbox: Locator;
    readonly contactAdminLink: Locator;
    

    constructor(page:Page){
        this.page = page;
        this.emailLabel = page.locator('label').filter({ hasText: 'Email' });
        this.eamilInput = page.locator('input[name="email"]');
        this.eamilInputPlcaeHolder = page.getByPlaceholder("Enter your email" );
        this.emailIsRequired = page.locator('[role="alert"]').filter({hasText: 'This field is required'});
        this.passwordlabel = page.locator('label').filter({hasText:'Password'});
        this.passwordInput = page.locator('input[name = "password"]');
        this.passwordInputPlcaeHolder = page.getByPlaceholder("············");
        this.passwordRequired = page.locator('[role="alert"]').filter({ hasText: 'Password is required!' });
        this.passwordToggleIcon = page.locator('.tabler-eye, .tabler-eye-off');
        this.loginErrorNotification = page.locator('.ant-notification-notice-error .ant-notification-notice-message');
        this.loginSuccessfullNotification = page.locator('.ant-notification-notice-success .ant-notification-notice-message');
        this.rememberMeCheckbox = page.locator('input[type="checkbox"]');
        this.contactAdminLink = page.getByRole('link', { name: 'Contact Admin' });


    }



}