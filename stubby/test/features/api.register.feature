Feature: Register an user

  Scenario: Valid register
    Given a valid "test@test.com" email
    And a correct "test@test.com" confirmation email
    Then the register should be valid
    And the "testId" user is in the database