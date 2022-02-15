import React from "react";
import "./App.css";

import Header from "./Header/Header.jsx";
import Home from "./Home/Home.jsx";
import Service from "./Service/Service.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return(
    <BrowserRouter>
      <div className="hae_wrap">
        <Header />
        <section>
          <div className="hae_section_wrap">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/service" element={<Service />} />
            </Routes>
          </div>
        </section>
      </div>
    </BrowserRouter>
  )
}