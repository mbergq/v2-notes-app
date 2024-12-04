import React from "react";
import Note from "../../src/Note";
import App from "../../src/App";

const data = {
  notes: [
    {
      id: "463504d7-9649-49b4-b8d4-f8ab5f079b49",
      title: "Test note title",
      content: "Lorem ipsum blablablabla",
      background_color_id: 3,
      created_at: "2024-12-03T15:51:31.533Z",
    },
  ],
};

describe("Note.cy.tsx", () => {
  it("renders data and has correct id value", () => {
    cy.intercept(
      {
        method: "GET",
        url: "/api/notes",
      },
      {
        fixture: "notes.json",
      }
    ).as("getNotes");

    cy.mount(<App />);

    cy.wait("@getNotes");

    cy.get("[data-cy=note-wrapper]").should("have.id", data.notes[0].id);
    cy.contains("Test note title").should("be.visible");
    cy.contains("Lorem ipsum blablablabla").should("be.visible");
  });
  it("has a delete button", () => {
    cy.mount(<Note data={data} />);

    cy.contains("button", "Delete");
  });
});
