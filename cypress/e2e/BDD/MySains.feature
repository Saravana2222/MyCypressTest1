Feature: Add to cart

    Test the add cart functionality
    Scenario Outline: Verify whether the user is able to add a product to cart
        Given I launch Sainsbury portal and login with valid "<username>" and "<password>"
        Then Search "<keyword>" in home page and click the "<dropdownValue>"
        #And Apply filter on Brand "<brandName>"
        Then Sort the product with "<sortType>"
        And Select the product "<productName>"
        Then Add the product to cart

    Examples:
        | username                  | password | keyword |dropdownValue | brandName  | sortType          | productName                                         |
        | saravana.0522@gmail.com   | *Itsme*0 | whi     |whiskey       | glenfiddich|Price - High to Low|Glenfiddich 12 Year Old Single Malt Scotch Whisky 70cl|
        | saravana.0522@gmail.com   | *Itsme*0 | Bread   |garlic bread  | glenfiddich|Price - High to Low|Sainsbury's Garlic Slices x9 270g|