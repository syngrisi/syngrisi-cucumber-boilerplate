@visual
Feature: Syngrisi demo

    Scenario: Graph Visual Checking - Broken Data
        When I open the url "https://viktor-silakov.github.io/syngrisi-demo-app/?version=0"
        # broken version of the application, uncomment and comment out the previous line to break the graph
        # When I open the url "https://viktor-silakov.github.io/syngrisi-demo-app/?version=1"
        When I visually check "#graph" element as "Graph"

    Scenario: Full Page Visual Checking - Text extra dot
        When I open the url "https://viktor-silakov.github.io/syngrisi-demo-app/?version=0"
        When I click on the element "=About"
        # 💡 broken version of the application, uncomment and comment out the previous line to break the graph
        # When I click on the element "=About (Bug)"
        When I visually check whole page as "Full Page"

    # there is dynamic content in the footer, and test will fail every time, you can use the 'Ignore regions' Syngrisi feature to suppress this
    Scenario: Dynamic content - Footer countdown timer
        When I open the url "https://viktor-silakov.github.io/syngrisi-demo-app/?version=5"
        When I scroll to element "#footer"
        When I visually check "#footer" element as "Footer"
