Feature: User register feature

Background: Goto register page
  Given I am on the register page

Scenario: Valid register
  When I a fill the "username" field with the "test1@test.com" value
  And I a fill the "email" field with the "test1@test.com" value
  And I click the "register" button
#    Then I should see "Register done!" message
#    And A iframe is opened with the user information
