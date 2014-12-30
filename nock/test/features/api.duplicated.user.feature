Feature: Register an user

  Scenario: Valid register
    Given a valid "test2@test.com" email
    And a correct "test2@test.com" confirmation email
    Then the register should be valid
    And the "test2Id" user is in the database

  Scenario: Duplicated user
    Given a valid "test2@test.com" email
    And a correct "test2@test.com" confirmation email
    Then a "405" code response is obtained with the "Duplicated user" message