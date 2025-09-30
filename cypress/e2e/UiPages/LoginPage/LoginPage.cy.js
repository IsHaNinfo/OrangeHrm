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
    LoginButton() {
        cy.get(PageElements.LoginPageLocators.login_button).click();
        return;
    }
    visitLoginPage() {
        cy.visit(urls.baseUrl);
        return this
    }

}

const loginPage = new LoginPage()
export default loginPage