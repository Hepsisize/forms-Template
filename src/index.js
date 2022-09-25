import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FormContextProvider } from "./context/Form-context";
import { theme } from "./theme/theme";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SuccessSubmission from "./pages/success-submission/SuccessSubmission";
import Home from "./pages/home/Home";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <ThemeProvider theme={theme}>
      <FormContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="success-submission" element={<SuccessSubmission />} />
          </Route>
        </Routes>
      </FormContextProvider>
    </ThemeProvider>
  </Router>
);
