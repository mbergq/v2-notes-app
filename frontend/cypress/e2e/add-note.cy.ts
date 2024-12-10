import "../e2e/e2e";

describe("add a note flow", () => {
  it("renders notes", () => {
    cy.visit("http://localhost:5173/");
  });
});
