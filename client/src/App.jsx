import React from "react";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register/Register";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
