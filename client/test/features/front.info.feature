# features/front.info.feature

Feature: User info feature

Background: Goto info page
  Given I go on the info page with "testId" userId

Scenario: Valid userId
    Then I should see "testId" user info