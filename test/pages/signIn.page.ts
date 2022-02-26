export class SignIn {

    private selector = {
        signInModal: 'div.sc-kpOJdX'
    }

    async isLoginModalDisplayed() : Promise <boolean> {
        return await (await $(this.selector.signInModal)).isDisplayed();
    }
}