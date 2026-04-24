Feature: Login functionality

  Scenario: Successful login
    Given user is on login page
    When user enters username "admin" and password "admin123"
    Then user should see dashboard
