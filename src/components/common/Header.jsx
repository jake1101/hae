'use strict';
import React, { useRef, useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import logo from "Images/logo.png";

export default function Header() {
  const isService_offering = ({isActive}) => {
    const { pathname } = useLocation();
    return pathname.includes("/service_offering/") ? "on" : isActive ? "on" : "";
  }

  const isActive = ({isActive}) => isActive ? "on" : "";
  return(
    <header id="header">
      <h1 className="logo">
        <Link to="/">
          <img src={logo} />
        </Link>
      </h1>
      <div className="gnb">
        <ul className="depth1">
          <li>
            <NavLink className={isService_offering} to="/service_offering/0">Service Offering</NavLink>
            <ul className="depth2">
              <li>
                <NavLink className={isService_offering} to="/service_offering/0">전체</NavLink>
              </li>
              <li>
                <NavLink className={isService_offering} to="/service_offering/1">안전 서비스</NavLink>
              </li>
              <li>
                <NavLink className={isService_offering} to="/service_offering/2">OO 서비스</NavLink>
              </li>
              <li>
                <NavLink className={isService_offering} to="/service_offering/3">OO 서비스</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink className={isActive} to="customer_center">고객센터</NavLink>
          </li>
          <li>
            <NavLink className={isActive} to="cart">장바구니</NavLink>
          </li>
        </ul>
      </div>
      <Link className="right_link" to="#">로그인</Link>
    </header>
  )
}