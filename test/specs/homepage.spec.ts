import { expect as chaiExpect } from 'chai';
import { Regions } from '../../resources/constant';
import {HomePage} from '../pages/homepage.page';
import allureReporter from '@wdio/allure-reporter';
import {SignIn} from '../pages/signIn.page';
import * as testData from '../data/testData.json';
import { MovieDetailsPage } from '../pages/movieDetailsPage.page';

describe('Homepage test cases',() => {

    let homepage: HomePage;
    let signIn: SignIn;
    let movieDetailsPage: MovieDetailsPage;

    before(async () => {
        homepage = new HomePage();
        signIn = new SignIn();
        movieDetailsPage = new MovieDetailsPage();
        browser.maximizeWindow();
    })

    beforeEach(async () => {
        browser.url('https://in.bookmyshow.com/');
        allureReporter
        .addFeature('Bookmyshow homepage Ui Validation');
            
    })

    it('Validate if region selection screens is displayed', async () => {
        let regionSelecttionPopUp = await homepage.isRegionSelectionScreensDisplayed();
        chaiExpect(regionSelecttionPopUp,
            'Expected the presence of region selection pop up. But not found').to.be.true;
    })

    it('Validate on selection of region, Correct region is selected', async () => {
        await homepage.searchWithRegionName(Regions.MUMBAI)
        await browser.keys('Enter');
        const currentUrl =await browser.getUrl();
        console.log(`Current url after choosing region is: ${currentUrl}`);
        chaiExpect(currentUrl).to.include(Regions.MUMBAI.toLowerCase());
    })

    it('validate is signin button is visible on the homepage', async () => {  
      const isSignInButtonVisible = await homepage.isSignButtonVisible();
        chaiExpect(isSignInButtonVisible,
            'Expected the presence of signIn button on homepage').to.be.true;
    })

    it('Validate on click on sign button, Login Modal should be displayed', async () => {
        await homepage.clickOnSignInButton();
        const isLoginModalDisplayed = await signIn.isLoginModalDisplayed();
        chaiExpect(isLoginModalDisplayed,
            'Expected the presence of login Modal but not found').to.be.true;
    })

    it('Validate search functionality on homepage', async () => {
        await browser.pause(3000);
        await homepage.searchAndSelectMovie(testData.data.movieName);
        await browser.pause(2000);
        const isBookNowButtonVisible = await movieDetailsPage.isBookNowButtonVisible();
        chaiExpect(isBookNowButtonVisible,
            'Expected the presence of booknow button. But not fount').to.be.true;
    })

    afterEach(async() => {
        const screenshot = await browser.takeScreenshot();
        allureReporter.addAttachment('Homepage UI Validation', Buffer.from(screenshot, 'base64'), 'image/png');
        
    })


})
