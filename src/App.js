import React from "react";
import { Route, Routes } from "react-router-dom";
import Create from "./pages/Create";
import Read from "./pages/Create";
import Update from "./pages/Update";

const App = () => {
  return (
    <>
      <h1>title</h1>
      <Routes>
        <Route path="/" element={<Read />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update" element={<Update />} />
      </Routes>

      <button>Add</button>
    </>
  );
};

export default App;
