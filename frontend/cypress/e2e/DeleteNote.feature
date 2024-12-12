Feature: Delete a note

There should be a delete button on each note

Scenario: When delete is clicked

  Given I'm on the webpage
  When I click delete on a note
  Then A note is deleted
