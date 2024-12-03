import React from "react";
import Note from "../../src/Note";

describe("Note.cy.tsx", () => {
  it("renders", () => {
    cy.mount(<Note />);
  });
});
