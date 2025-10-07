Feature:OrangeHRM Recruitment Feature

    Through this feature User should be able to add, view, delete and search candidates in OrangeHRM Application
    Scenario: A001-user should be able to add candidate with valid details
    Given User navigates to Recruitment page
    And User clicks on Add button
    And User enters valid candidate details
    And User clicks on Save button
    Then User should be able to see the newly added candidate in the candidates list

    