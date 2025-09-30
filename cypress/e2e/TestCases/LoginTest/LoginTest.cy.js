import loginPage from "../../UiPages/LoginPage/LoginPage.cy.js";
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import user from "../../../fixtures/user.json"
Given('Visit OrangeHRM Application',()=>{
    loginPage.visitLoginPage();
})

When('User enters valid username and password',()=>{
    loginPage.uname(user.username);
    loginPage.password(user.password)
})

Then('User should be able to login successfully into the application',()=>{
    loginPage.LoginButton();
})