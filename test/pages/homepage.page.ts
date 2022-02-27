export class HomePage {

    private selector = {
        regionSelectionPopUp: 'div.fnbtbz',
        regionSelectionTextBox: 'div.sc-bhlBdH div input',
        signInButton: 'div.sc-chbbiW',
        searchMovie: "//div[@id='2']",
        searchMovieArea: "div.sc-iwsKbI input",
        searchResult:"ul.sc-jvEmr li"
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

    async searchAndSelectMovie(name: string): Promise <void> {
        await (await $(this.selector.searchMovie)).click();
        await (await $(this.selector.searchMovieArea)).setValue(name);
        await browser.pause(2000); 
       await browser.keys('Enter');
    }

}