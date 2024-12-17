describe("add a note flow", () => {
  it("successfully adds a new note", () => {
    cy.visit("/");
    cy.contains("new").click();
    cy.get("#title").type("shopping list");
    cy.get("[type='radio']").check("shopping");
    cy.get("[type='radio']").check("red");
    cy.get("textarea").type("apples, bananas, coffee, carrots, yoghurt, bread");
    cy.get("button[type='submit']").click();
    cy.contains("shopping list");
    cy.contains("apples, bananas, coffee, carrots, yoghurt, bread");
  });
});
