import React from "react";
import Note from "../../src/Note";

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

const colorIndex = [1, 2, 3, 4, 5];

describe("Note.cy.tsx", () => {
  // it("renders with correct color-id", () => {
  // note.map((n) => {
  //   cy.mount(<Note />);
  //   cy.contains("Test note title").should("be.visible");
  //   cy.contains("Lorem ipsum blablablabla").should("be.visible");
  //   cy.contains(1 | 2 | 3 | 4 | 5).should("be.visible");
  // });
  // cy.mount(<Note />);
  colorIndex.forEach((index) => {
    it("renders with correct color id", () => {
      cy.mount(<Note data={data} />);
    });
  });
});
// });
