'use strict';
import React from "react";

export default function Footer() {
  return(
    <footer id="footer">
			<div className="inner">
				<h4>사이트맵</h4>
				<ul>
					<li><a href="main.html">Home</a></li>
					<li><a href="service_offering.html">Service Offering</a></li>
					<li><a href="customer_center.html">고객센터</a></li>
					<li><a href="cart.html">장바구니</a></li>
					<li><a href="login.html">로그인</a></li>
				</ul>
				<div className="ft_menu">
					<ul>
						<li>회사명</li>
						<li>대표자</li>
						<li>사업자번호</li>
						<li><a href="#">이용약관</a></li>
						<li><a href="#">개인정보 처리방침</a></li>
					</ul>
				</div>
			</div>
		</footer>
  )
}