Feature: Class search

  As a user I want to be able to search for classes by my location so that I can find a Zumba Class near me

  @geoip
  Scenario: Search for classes near me
    Given that there are Zumba classes in my area
    When I visit the classes near me search
    Then I should see classes within 50 miles of my area

  @zip_code
  Scenario: Search for classes using a zip code
    Given I am on the class search page
    When I search for classes in my zip code
    Then I should see classes available in Aventura
