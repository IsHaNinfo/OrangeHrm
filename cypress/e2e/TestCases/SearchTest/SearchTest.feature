Feature:OrangeHRM Menu Search Feature

    Through this feature User should be able to search menu items in OrangeHRM Application
    Scenario: A004-user should be able to search menu items with valid menu name
    Given User is logged into OrangeHRM Application
    When User enters valid menu name in search box
    Then User should be able to see searched menu item displayed in the search results