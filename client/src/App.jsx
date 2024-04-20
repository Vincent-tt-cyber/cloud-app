import React from "react";
import Header from "./components/Header/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";
function App() {
  const isAuth = useSelector((state) => state.user.isAuth);

  React.useEffect(() => {}, [isAuth]);

  return (
    <>
      <Header />
      <Routes>
        {!isAuth && (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}
        {isAuth && <Route path="/" element={<h1>Главная</h1>} />}
      </Routes>
    </>
  );
}

export default App;
