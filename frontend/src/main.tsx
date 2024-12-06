import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.tsx";
import About from "./About.tsx";
import NoteModal from "./components/NoteModal.tsx";
import "./tailwind.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="dev" element={<NoteModal />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
