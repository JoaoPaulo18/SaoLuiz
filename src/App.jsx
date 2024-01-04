import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import "./App.css";
import StaticBack from "./Components/Helpers/StaticBack";
import Footer from "./Components/Footer/Footer";
import Linhas from "./Components/Linhas/Linhas";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <StaticBack/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="linhas" element={<Linhas />} />
        </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
