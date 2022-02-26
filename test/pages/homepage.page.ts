export class HomePage {

    // private driver: any;
    // constructor(driver) {
    //     this.driver = driver;
    // }

    private selector = {
        regionSelectionPopUp: 'div.fnbtbz',
        regionSelectionTextBox: 'div.sc-bhlBdH div input',
        signInButton: 'div.sc-chbbiW',

    }

    async isRegionSelectionScreensDisplayed() : Promise<boolean> {
       return await (await $(this.selector.regionSelectionPopUp)).isDisplayed();
    }

    async searchWithRegionName(regionName: string): Promise < void > {
        await (await $(this.selector.regionSelectionTextBox)).setValue(regionName);
    }

    async isSignButtonVisible(): Promise < boolean > {
        return await (await $(this.selector.signInButton)).isDisplayed();
    }

    async clickOnSignInButton(): Promise <void> {
        await (await $(this.selector.signInButton)).click();
    }
}