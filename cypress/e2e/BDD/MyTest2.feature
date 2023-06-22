Feature: Test SauceDemo portal

@homepage
Scenario Outline: Verify SauceDemo login
    Given I launch SauceDemo Web portal
    When I enter "<Username>" and "<password>"
    Then I login to SauceDemo with "<HomepageTxt>"

Examples:
    | Username      | password      | HomepageTxt|
    | standard_user | secret_sauce  |Swag Labs|

@login
Scenario Outline: Lauch Saucedemo portal and login
    Given I launch SauceDemo Web portal
    When I enter "<Username>" and "<password>"

Examples:
    | Username      | password      | HomepageTxt|
    | standard_user | secret_sauce  |Swag Labs|

