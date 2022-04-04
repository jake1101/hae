'use strict';
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import img1 from "Images/service_img1.jpg";
import img2 from "Images/service_img2.jpg";
import view from "Images/icon_view.png";
import cart from "Images/icon_cart.png";

export default function Service1() {
  return(
    <div className="box_list">
      <ul className="mt40">
        <li>
          <img src={img1} alt="AI머신비전 + 클라우드" />
          <div className="txt">
            <h4>AI머신비전 안전관제 서비스</h4>
            <p>AI머신비전 및 지능형 CCTV 연동을 통해 산업현장의 안전사고 징후를 자동 감지하며, 이를 통해 안전사고 예방과 신속한 조치를 지원하는 지능형 안전관리 서비스 입니다.</p>
            <div className="btn-r mt40">
              <Link to="d1" className="page_btn btn_light_blue"><img src={view} alt="" />상세보기</Link>
              <span href="#" id="openpopup" className="page_btn btn_blue"><img src={cart} alt="" />장바구니 담기</span>
            </div>
          </div>
        </li>
      </ul>
      <ul className="mt40">
        <li>
          <img src={img2} alt="LoRa + BLE 기반 위치 파악" />
          <div className="txt">
            <h4>위치기반 안전관제 서비스</h4>
            <p>LoRa, SmartTag 를 활용하여 산업현장 내 작업자와 이동장비의 실시간 위치를 모니터링함으로써, 위험구역 접근, 긴급구조신호나 추락 등 사고 상황이 발생 시 이를 감지하여 안전사고의 발생에 신속하게 대응 가능한 위치기반 안전관제 서비스 입니다.</p>
            <div className="btn-r mt40">
              <Link to="1/d1" className="page_btn btn_light_blue"><img src={view} alt="" />상세보기</Link>
              <span id="openpopup2" className="page_btn btn_blue"><img src={cart} alt="" />장바구니 담기</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}