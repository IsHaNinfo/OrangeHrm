import loginPage from "../../UiPages/LoginPage/LoginPage.cy.js";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import user from "../../../fixtures/user.json"
Given('Visit OrangeHRM Application', () => {
    loginPage.visitLoginPage();
})

When('User enters valid username', () => {
    loginPage.uname(user.username);
})

When('User enters valid password', () => {
    loginPage.password(user.password)
})

When('User enters invalid username', () => {
    loginPage.uname(user.invalidusername);
})

When('User enters invalid password', () => {
    loginPage.password(user.invalidpassword)
})

When('User leaves username field blank', () => {
    loginPage.blankusername()
})

When('User leaves password field blank', () => {
    loginPage.blankpassword()     
})


Then('User should not be able to login into the application and error message should be displayed', () => {
    loginPage.LoginButton();
    loginPage.errorMessage();
})

Then('User should not be able to login into the application and required error message should be displayed', () => {
    loginPage.LoginButton();
    loginPage.RequiredMessage();
})

Then('User should be able to login successfully into the application', () => {
    loginPage.LoginButton();
})