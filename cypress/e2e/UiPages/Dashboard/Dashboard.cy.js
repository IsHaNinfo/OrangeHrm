import PageElements from "../../Components/PageElements/PageElements.json"
import urls from "../../../support/urls"

const DashboardPage = {
    searchbox(menuName) {
        cy.get(PageElements.DashboardLocators.search_box).type(menuName)
            .clear()
            .type(menuName)
        return;
    },
    menuItem(){
        cy.get(PageElements.DashboardLocators.menu_item).should('be.visible');
        return;
    },
    
    recruitmentMenu(){
        cy.get(PageElements.DashboardLocators.recruitment_menu).click();
        return;
    },
    recruitmentAddButton(){
        cy.get(PageElements.DashboardLocators.recruitment_add_button).should('be.visible').click();
        return;
    }
}

const dashboardPage = DashboardPage
export default dashboardPage