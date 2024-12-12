import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("I'm on the webpage", () => {
  cy.visit("/");
});

When("I click delete on a note", () => {
  cy.get("button").contains("Delete").click();
});

Then("A note is deleted", () => {
  cy.get("#notes-layout")
    .find("div")
    .should(($div) => {
      expect($div).to.have.length($div.length - 1);
    });
});
