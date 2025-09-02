import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import ProjectCaseStudy from "./pages/ProjectCaseStudy.jsx";
import { ContentProvider } from "./content/ContentContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContentProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
          {/* <Route path="/dashboard" element={<Dashboard />} />  // optional */}
        </Routes>
      </BrowserRouter>
    </ContentProvider>
  </React.StrictMode>
);
