import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Books from "./Components/Books";
import Book from "./Components/Book";
import About from "./Components/About";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/books" element={<Books />}>
            <Route index element={<h3>Your Book :</h3>} />
            <Route path=":uniqId" element={<Book />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h1>Not Found :(</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
