'use strict';
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function ServiceOffering() {
	const isActive = ({isActive}) => isActive ? "on": "";
  return(
    <main id="container">
      <section className="sub_visual service">
				<div className="inner">
					<div className="location">
						<ul>
							<li><Link to="/">홈</Link> <span>&gt;</span></li>
							<li>Service offering</li>
						</ul>
					</div>
					<div className="sub_tit">
						<h2>Service offering</h2>
						<p>귀사에 맞는 원하는 서비스를 확인하고 신청하세요</p>
					</div>
				</div>
			</section>
      <section className="contents">
				<nav className="tab_menu">
					<ul>
						<li><NavLink className={isActive} to="/service_offering/0">전체</NavLink></li>
						<li><NavLink className={isActive} to="/service_offering/1">안전 서비스</NavLink></li>
						<li><NavLink className={isActive} to="/service_offering/2">oo 서비스</NavLink></li>
						<li><NavLink className={isActive} to="/service_offering/3">oo 서비스</NavLink></li>
					</ul>
				</nav>
				<Outlet />
			</section>
    </main>
  )
}