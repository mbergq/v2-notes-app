describe("navigation between categories", () => {
  it("displays notes related to a category upon click", () => {
    cy.visit("/");
    cy.get("button").contains("Shopping").click();
    cy.get("#no-note-msg").should("not.exist");
  });
});
