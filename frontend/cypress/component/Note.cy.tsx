import React from "react";
import Note from "../../src/components/Note";

const data = [
  {
    id: "463504d7-9649-49b4-b8d4-f8ab5f079b49",
    title: "Test note title",
    content: "Lorem ipsum blablablabla",
    color: "green",
    created_at: "2024-12-03T15:51:31.533Z",
  },
];

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      enabled: false,
      retry: false,
    },
  },
});

const TestWrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("Note.cy.tsx", () => {
  it("renders data and has correct id value", () => {
    cy.mount(
      <TestWrapper>
        <Note data={data} />
      </TestWrapper>
    );

    cy.get("[data-cy=note-wrapper]").should("have.id", data[0].id);
  });
});
