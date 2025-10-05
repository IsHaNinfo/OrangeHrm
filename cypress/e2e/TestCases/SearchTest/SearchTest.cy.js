import loginPage from "../../UiPages/LoginPage/LoginPage.cy.js";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import user from "../../../fixtures/user.json"
import dashboardPage from "../../UiPages/Dashboard/Dashboard.cy.js";
Given('User is logged into OrangeHRM Application', () => {
    loginPage.visitLoginPage();
    loginPage.uname(user.username);
    loginPage.password(user.password)
    loginPage.LoginButton();
})

When('User enters valid menu name in search box', () => {
    dashboardPage.searchbox("Admin")
})

Then('User should be able to see searched menu item displayed in the search results', () => {
    dashboardPage.menuItem()
})

