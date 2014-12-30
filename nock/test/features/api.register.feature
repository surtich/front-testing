Feature: Register an user

  Scenario: Valid register
    Given a valid "test1@test.com" email
    And a correct "test1@test.com" confirmation email
    Then the register should be valid
    And the "test1Id" user is in the database