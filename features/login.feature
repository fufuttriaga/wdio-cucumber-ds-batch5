@login
Feature: Login Test

Background:
          Given use is on login page
 @positive @testcase1 @regression @smoketest
Scenario Outline: success Login
  When user login using "<username>" as username and "<password>" as password
  Then user should be redirected to homepage

  Examples:
  | username         | password     |
  | standard_user    | secret_sauce |
  | visual_user      | secret_saucee | 
  

@negative @testcase2
Scenario: Login with wrong password
  When user login using "standard_user" as username and "Wrong_password" as password
  Then user should see error message "Epic sadface: Username and password do not match any user in this service"



