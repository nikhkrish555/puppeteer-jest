import FeedbackPage from '../pages/FeedbackPage';

describe('Example 2', () => {
    let homepage, feedbackPage, topBar;

    beforeAll(async () => {
        jest.setTimeout(15000);
        feedbackPage = new FeedbackPage();
    });

    it('feedback submission should work', async () => {
        await feedbackPage.visit();
        await feedbackPage.isFeedbackFormDisplayed();
        await feedbackPage.submitFeedback('Nikhil', 'Krishna', 'Test', 'This is a test comment');
    });
});