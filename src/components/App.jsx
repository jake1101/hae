'use strict';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./Header";
import Home from "./Home";
import Service from "./Service";
import Customer from "./Customer";
import Cart from "./Cart";

export default function App() {
  const sub_title_list = [
    ["이동형 비전센서 활용 접근 통제", "이동형 비전센서 활용 작업자 안전 관리"],
    [],
    [],
    []
  ];
  return(
    <React.StrictMode>
      <BrowserRouter>
        <div className="hae_wrap">
          <Header />
          <section>
            <div className="hae_section_wrap">
              <Routes>
                <Route exact path="/" element={<Home />} />
                {sub_title_list.map((s, i) => <Route key={i} path={`/service/${i}`} element={<Service group={["이동형 비전센서", "CCTV", "스마트 스테이션", "바디캠"]} list={s} />} />)}
                <Route exact path="/customer" element={<Customer />} />
                <Route exact path="/cart" element={<Cart />} />
              </Routes>
            </div>
          </section>
        </div>
      </BrowserRouter>
    </React.StrictMode>
  )
}