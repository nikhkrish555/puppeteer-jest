import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import TopBar from '../pages/components/TopBar';
import {username, password, timeout} from '../config.js';

describe('Example 1', () => {
    let homepage, loginpage, topbar;

    beforeAll(async () => {
        jest.setTimeout(timeout);
        homepage = new HomePage();
        loginpage = new LoginPage();
        topbar = new TopBar();
    });

    it('homepage should work', async () => {
        await homepage.visit();
    });

    it('navbar should be displayed', async () => {
        await homepage.isNavbarDisplayed();
        await topbar.isTopBarDisplayed();
    });

    it('try to login', async () => {
        await loginpage.visit();
        await loginpage.isLoginFormDisplayed();
        await loginpage.login(username, password);
    });
});