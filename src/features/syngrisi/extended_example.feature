@visual
Feature: Syngrisi demo

    Scenario: Graph Visual Checking - Broken Data
        # Broken version - 1
        When I open the url "http://localhost:8888/?version=1"
        When I visually check "#graph" element as "Graph"

    Scenario: Full Page Visual Checking - Text extra dot
        # Broken version - 4
        When I open the url "http://localhost:8888/lorem?version=4"
        When I visually check whole page as "Full Page"

    Scenario: Functional - Broken Color Theme Button
        # Broken version - 3
        When I open the url "http://localhost:8888/?version=3"
        When I visually check viewport as "Light theme"
        When I click on the element "#theme"
        When I visually check viewport as "Dark theme"

    Scenario: Dynamic content - Footer countdown timer
        # Broken version - 5
        When I open the url "http://localhost:8888/?version=5"
        When I scroll to element "#footer"
        When I visually check "#footer" element as "Footer"
