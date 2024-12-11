describe("add a note flow", () => {
  it("successfully adds a new note", () => {
    cy.visit("/");
    cy.contains("new").click();
    cy.get("#title").type("My very good note title");
    cy.get("[type='radio']").check("red");
    cy.get("textarea").type(
      "My very good note content where I've added a lot of good text"
    );
    cy.get("button[type='submit']").click();
    cy.contains("My very good note title");
    cy.contains(
      "My very good note content where I've added a lot of good text"
    );
  });
});
