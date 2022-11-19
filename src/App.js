import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from "react";
import GlobalStyle from "./assets/GlobalStyle";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import BalancePage from "./pages/BalancePage/BalancePage";
import AdditionPage from "./pages/AdditionPage/AdditionPage";
import SubtractionPage from "./pages/SubtractionPage/SubtractionPage";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/balance" element={<BalancePage />} />
        <Route path="/addPage" element={<AdditionPage />} />
        <Route path="/subPage" element={<SubtractionPage />} />
      </Routes>
    </BrowserRouter>
  )
}