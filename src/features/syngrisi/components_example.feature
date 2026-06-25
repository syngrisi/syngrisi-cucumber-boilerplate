@visual
Feature: Syngrisi component-level visual checks

    # Demonstrates capturing several independent visual checks (different elements plus the
    # whole viewport) within a single scenario — a common pattern when validating multiple
    # components of a page. Each check produces its own Syngrisi baseline.
    Scenario: Multiple component checks on the demo app
        When I open the url "https://viktor-silakov.github.io/syngrisi-demo-app/?version=0"
        When I visually check "#graph" element as "Component - Graph"
        When I scroll to element "#footer"
        When I visually check "#footer" element as "Component - Footer"
        When I visually check viewport as "Component - Viewport"
