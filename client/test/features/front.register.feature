# features/front.register.feature

Feature: User register feature

Background: Goto register page
  Given I am on the register page

Scenario: Valid register
    When I a fill "test1@test.com" email
    And I a fill "test1@test.com" confirm email
    Then I should see "Register done!" message
    And A iframe is opened with the user information

Scenario: Invalid username
    When I a fill "test1" email
    And I a fill "test1" confirm email
    Then I should see "Invalid email!" message

Scenario: Invalid email confirmation
    When I a fill "test1@test.com" email
    And I a fill "test2@test.com" confirm email
    Then I should see "Confirm email does not match!" message
