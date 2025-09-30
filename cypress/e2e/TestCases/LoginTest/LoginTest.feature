Feature:OrangeHRM Login Feature

    Through this feature User should be able to login into OrangeHRM Application
    Scenario: A001-user should be able to login with valid credentials
    Given Visit OrangeHRM Application
    When User enters valid username and password
    Then User should be able to login successfully into the application
