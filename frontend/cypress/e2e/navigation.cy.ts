describe("seamless navigation between categories", () => {
  it("displays notes related to a category upon click", () => {
    cy.visit("/");
    cy.get("li").contains("Shopping").click();
    cy.get("#notes-layout")
      .find("div")
      .should(($div) => {
        expect($div).to.have.length(1);
      });
  });
});
