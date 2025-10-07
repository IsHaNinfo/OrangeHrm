import loginPage from "../../UiPages/LoginPage/LoginPage.cy";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import user from "../../../fixtures/user.json"
import dashboardPage from "../../UiPages/Dashboard/Dashboard.cy";

Given('User navigates to Recruitment page',()=>{
    loginPage.visitLoginPage();
    loginPage.uname(user.username);
    loginPage.password(user.password)
    loginPage.LoginButton();
    dashboardPage.recruitmentMenu();
})
When('User clicks on Add button',()=>{
    dashboardPage.recruitmentAddButton();
})
