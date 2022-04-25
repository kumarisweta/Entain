Feature: Ninja Casino Features

    Different operations on Ninja Casino Website and Mobile

    Scenario: User should be able to find and open the game
        Given I Navigate to Website
        When I clicked Search button
        Then I Enter Serach Value in Search button
        Then Click on Play button
        And Validate the Game is loading


    Scenario: Switch Language
        Given I Navigate to Website
        And I clicked on the language dropdown select Finnish
        Then Application should get loaded in Finish Language
        And I clicked on the language dropdown select Estonian
        Then Application should get loaded in Estonian Language
        And I clicked on the language dropdown Select Russian
        Then Application should get loaded in Russian Language


    Scenario: Main Site Navigation in Mobile Device
        Given I Navigate to Website
        And Validate Menu options on NinjaCasino
        When I Click on Ninja Treasury
        Then Ninja Treasury Page should be redirected
        And I Navigate to Promotion page
        Then Promotion Page should be redirected
        And I Navigate to Customer Support
        Then Customer Support Center Page should be redirected
        And Navigate to Popular Games
        And Navigate to Slots
        And Navigate to Jackpots
        And Navigate to Table Games
        And Navigate to Megaways



