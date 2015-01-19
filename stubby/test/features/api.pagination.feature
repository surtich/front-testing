Feature: Client pagination feature

  Scenario: Multiple pages
    Given There is multiple client pages
    When I ask for de "1" client page
    Then I get the "1" client page
