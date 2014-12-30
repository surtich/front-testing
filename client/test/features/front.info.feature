# features/front.info.feature

Feature: User info feature

Background: Goto info page
  Given I go on the info page with "test1Id" userId

Scenario: Valid userId
    Then I should see "test1Id" user info