export class MovieDetailsPage {
    private selector = {
        bookNowButton : "(//div[@id='page-cta-container']/button)[1]",
    }

    async isBookNowButtonVisible(): Promise<boolean> {
        return await (await $(this.selector.bookNowButton)).isDisplayed();
    }
}