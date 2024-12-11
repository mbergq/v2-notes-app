import "../e2e/e2e";

describe("add a note flow", () => {
  it("successfully loads", () => {
    cy.visit("/");
  });
  it("succesfully adds a note", () => {
    cy.get("button").contains("new");
  });
});
