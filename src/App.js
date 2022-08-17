import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./component/Header";
import Create from "./pages/Create";
import Read from "./pages/Read";
import Update from "./pages/Update";
import "./App.css";
import Landing from "./pages/Landing";
const Dom = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
`;

const App = () => {
  return (
    <Dom>
      <Header />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/read" element={<Read />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id/update" element={<Update />} />
      </Routes>
    </Dom>
  );
};

export default App;
