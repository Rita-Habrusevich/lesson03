Feature: Website configuration for user
Background: Navigate to website
   Given I navigate to "https://webdriver.io/" page

  Scenario: Getting Started page should open after click Get Started button on the main page
    When I click on "*=Get Started" element
    Then I get text "h1=Getting Started" from "Getting Started"

  Scenario: Check pagination on Getting Started page
    When I click on "*=Docs" element
    When I click on ".pagination-nav__item--next" element
    Then I get text "h1=Boilerplate Projects" from "Boilerplate Projects"


  Scenario: Check the search for keyword
    When I click on ".DocSearch-Button-Placeholder" element
    When I input text "selectors" to ".DocSearch-Input" field
    When I click on "#docsearch-item-0:first-child" element
    Then I get text "header > h1" from "Selectors"

  Scenario: Check side menu navigation on Introduction page
    When I click on "*=API" element
    When I click on "*=Examples" element
    Then I check that url contains "examples"
    When I click on "*=Contribute" element
    Then I check that url contains "contribute"

  Scenario: Check switching between tabs WebDriver and Chrome DevTools on the Setup Types page
    When I click on "*=Docs" element
    When I click on "*=Core Concepts" element
    When I click on "*=Setup Types" element
    When I click on "div.tabs-container > ul > li:nth-child(2)" element
    Then I check that " div:nth-child(2) > div > div > pre > code > span:nth-child(1) > span.token.maybe-class-name" displayed in viewport