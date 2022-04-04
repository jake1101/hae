'use strict';
import React from "react";
import {  Routes, Route } from "react-router-dom";
import styled from "styled-components";

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
    <div>
      <Header />
      <section>
        <Wrap>
          <Routes>
            <Route exact path="/" element={<Home />} />
            {sub_title_list.map((s, i) => <Route key={i} path={`/service${i}`} element={<Service group={["이동형 비전센서", "CCTV", "스마트 스테이션", "바디캠"]} list={s} />} />)}
            <Route exact path="/customer" element={<Customer />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </Wrap>
      </section>
    </div>
  )
}

const Wrap = styled.div`
  max-width: var(--in-w);
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;
  padding-bottom: 40px;
`;