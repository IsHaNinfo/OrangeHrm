Feature:OrangeHRM Login Feature

    Through this feature User should be able to login into OrangeHRM Application
    Scenario: A001-user should be able to login with valid credentials
    Given Visit OrangeHRM Application
    When User enters valid username
    When User enters valid password
    Then User should be able to login successfully into the application


    Scenario: A002-user should not be able to login with invalid credentials
    Given Visit OrangeHRM Application
    When User enters invalid username
    When User enters invalid password
    Then User should not be able to login into the application and error message should be displayed

    Scenario: A003-user should not be able to login with blank credentials
    Given Visit OrangeHRM Application
    When User leaves username field blank
    When User leaves password field blank
    Then User should not be able to login into the application and required error message should be displayed

    Scenario: A004-user should not be able to login with valid username and invalid password
    Given Visit OrangeHRM Application
    When User enters valid username
    When User enters invalid password
    Then User should not be able to login into the application and error message should be displayed

    Scenario: A005-user should not be able to login with invalid username and valid password
    Given Visit OrangeHRM Application
    When User enters invalid username
    When User enters valid password
    Then User should not be able to login into the application and error message should be displayed