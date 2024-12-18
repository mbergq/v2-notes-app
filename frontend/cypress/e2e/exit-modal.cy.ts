describe("open modal and close modal", () => {
  it("displays a modal and closes the modal", () => {
    cy.visit("/");
    cy.get("button").contains("new").click();
    cy.get("button[type='submit']");
    cy.get("#closeButton").click();
    cy.get("button[type='submit']").should("not.exist");
  });
});
