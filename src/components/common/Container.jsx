'use strict';
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "Content/Home";
import ServiceOffering from "Content/ServiceOffering";
import Service0 from "Content/Service0";
import Service1 from "Content/Service1";
import Service2 from "Content/Service2";
import Service3 from "Content/Service3";
import Svc1Detail1 from "Content/Svc1Detail1";
import CustomerCenter from "Content/CustomerCenter";
import Cart from "Content/Cart";

export default function Container() {
  return(
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/service_offering" element={<ServiceOffering />}>
        <Route path="0" element={<Service0 />} />

        <Route path="1" element={<Service1 />} />
        <Route path=":sid/d1" element={<Svc1Detail1 />} />

        <Route path="2" element={<Service2 />}/>

        <Route path="3" element={<Service3 />}/>
      </Route>
      <Route exact path="customer_center" element={<CustomerCenter />} />
      <Route exact path="cart" element={<Cart />} />
    </Routes>
  )
}