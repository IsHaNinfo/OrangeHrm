import PageElements from '../../Components/PageElements/PageElements.json'
import urls from '../../../support/urls.js'

class LoginPage {
    uname(username) {
        cy.get(PageElements.LoginPageLocators.username_text).type(username)
            .clear()
            .type(username)
        return;
    }
    password(password) {
        cy.get(PageElements.LoginPageLocators.password_text).type(password)
            .clear()
            .type(password)
        return;
    }
    blankusername() {
        cy.get(PageElements.LoginPageLocators.username_text).clear(); // Focus and blur to trigger validation
        return;
    }
    blankpassword() {
        cy.get(PageElements.LoginPageLocators.password_text).clear(); 
        return// Focus and blur to trigger validation
    }

    RequiredMessage() {
        cy.get(PageElements.LoginPageLocators.required_message).should('contain.text', 'Required')
        return;
    }
    LoginButton() {
        cy.get(PageElements.LoginPageLocators.login_button).click();
        return;
    }
    errorMessage() {
        cy.get(PageElements.LoginPageLocators.error).should('be.visible');
        return;
    }
    visitLoginPage() {
        cy.visit(urls.baseUrl);
        return this
    }

}

const loginPage = new LoginPage()
export default loginPage