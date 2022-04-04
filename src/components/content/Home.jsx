'use strict';
import React from "react";

import summary from "Images/image_summary.png";

import list1 from "Images/img_features_list1.png";
import list2 from "Images/img_features_list2.png";
import list3 from "Images/img_features_list3.png";
import list4 from "Images/img_features_list4.png";
import list5 from "Images/img_features_list5.png";
import list6 from "Images/img_features_list6.png";

export default function Home() {
  return(
    <main id="container">
      <section className="main_visual">
        <h2>HAS</h2>
        <p>
          <strong>현대오토에버 안전관리 플랫폼</strong>
          <br />
          Hyundai Autoever Safety platform
        </p>
      </section>
      <section className="section01">
        <h4>HAS (Hyundai Autoever Safety platform)</h4>
				<p>안전 관제 강화를 통해 인명 사고 발생 방지 및 지속 가능한 기업 경영을 지원하는 시스템 구축</p>
      </section>
      <section className="section02">
				<div className="img">
					<img src={summary} alt="근로자 안전확보/위험요소 선제대응/사회적 기대부응/중대재해 처벌법 시행 22년 01월 27일" />
				</div>
				<p>중대재해처벌법 : 중대한 인명 피해를 주는 산업 재해가 발생했을 경우 사업주 또는 경영책임자에 대한 형사처벌을 강화하는 법</p>
			</section>
      <section className="section03">
        <ul>
					<li className="bor_blue1">
						<h4>기업경영위험요인 (risk) 최소화</h4>
						<p>중대재해 안전사고 발생시 조업중단, 사업참여 제한 등 의 Risk 대응</p>
					</li>
					<li className="bor_blue2">
						<h4>실시간 안전관리 긴급 대응, 인명 피해 최소화</h4>
						<p>실시간 기준으로 안전사고 예방과 사고 발생시 신속한 의사결정을 통한 긴급대응</p>
					</li>
					<li className="bor_blue3">
						<h4>중대재해처벌법 적극 대응</h4>
						<p>(2022.01.27 시행) 중대재해 처벌 등에 대한 법률 대응</p>
					</li>
					<li className="bor_blue4">
						<h4>ESH(환경, 안전, 보건) 관리 시스템과 통합 운영</h4>
						<p>안전 관제 플랫폼 기반 ESH(환경, 안전,보건) 시스템의 통합관리 기반 마련</p>
					</li>
					<li className="bor_blue5">
						<h4>스마트 안전관리 기술 및 디바이스 도입 기반 구축</h4>
						<p>IoT, Big Data, AI 등 4차산업 혁명기술 및 스마트 안전장비 도입 토대</p>
					</li>
				</ul>
      </section>
      <section className="section04">
      <h2 className="main_tit mt160 mb50">주요 특징</h2>
				<ul>
					<li>
						<img src={list1} alt="" />
						<h4>시스템 확장성</h4>
						<p>
							새로운 안전관리 서비스 및 안전관리<br />
							디바이스를 쉽게 적용하기 위한 기능 모듈화
						</p>
					</li>
					<li>
						<img src={list2} alt="" />
						<h4>시스템 유연성</h4>
						<p>
							현장의 특성에 맞는 서비스 등록,<br />
							현장 별 대시보드 설정 및 편집 
						</p>
					</li>
					<li>
						<img src={list3} alt="" />
						<h4>실시간 안전관리</h4>
						<p>
							모바일 기반 양방향 정보/지시 전달, 안전관리자와<br />
							작업자에게 적시에  알림이 제공
						</p>
					</li>
					<li>
						<img src={list4} alt="" />
						<h4>직관적 정보제공</h4>
						<p>
							3D 지도 기반 직관적인 안전관리 정보 제공,<br />
							통계적 분석과 시각화 된 정보제공
						</p>
					</li>
					<li>
						<img src={list5} alt="" />
						<h4>데이터 표준화</h4>
						<p>
							현대 그룹사에 맞는 표준화<br />
							인터페이스 기능 적용 
						</p>
					</li>
					<li>
						<img src={list6} alt="" />
						<h4>데이터 품질</h4>
						<p>
							각 산업 현장에 맞는 대량의 정형/비정형<br />
							데이터의 수집을 통해 고품질의 데이터 품질 유지
						</p>
					</li>
				</ul>
      </section>
      <section className="section05">
      <h2 className="main_tit mt160 mb50">제공 기능</h2>
				<h3>서비스 관제</h3>
				<dl>
					<dt>
						<span className="col_blue">01</span>
						<h4>사용자 UX/UI</h4>
					</dt>
					<dd>
						<ul>
							<li>통합 운영센터에서 여러 현장의 안전관리 서비스를 <strong>통합관리</strong></li>
							<li>사용자 중심형 UI 구성으로 <strong>고객 맞춤형</strong>으로 사용자별 테마 구성</li>
							<li>현장/사용자/서비스에  따라 <strong>대시보드 및 아이템 선택</strong>  가능</li>
							<li><strong>윈도우 단위로 구현, Drag</strong>  기능을 이용해  변경 가능</li>
						</ul>
					</dd>
					<dt>
						<span className="col_blue">02</span>
						<h4>실시간 모니터링</h4>
					</dt>
					<dd>
						<ul>
							<li>위험지역, 위험장비, 작업자 현황, 환경센서, <strong>이상현황 모니터링</strong></li>
							<li><strong>실시간 3D 지도기반</strong> 안전관리 모니터링</li>
							<li><strong>이벤트 발생</strong> 내용 리스트(통계) 모니터링</li>
							<li>가시성과  편의성을 고려한 <strong>시각화된 정보</strong> 제공</li>
						</ul>
					</dd>
					<dt>
						<span className="col_blue">03</span>
						<h4>실시간 위험관제</h4>
					</dt>
					<dd>
						<ul>
							<li>실시간 위치기반으로 위험 및 <strong>이벤트 확인 및 추적 관리</strong></li>
							<li>위험 발생시 <strong>위험경고 및 원격지원</strong>(SOS 긴급 구조 요청)</li>
							<li>긴급상황(사고 현황, 인원, 시설 등) 파악 및 <strong>사고지역 접근통제</strong> 지원</li>
							<li>긴급상황 시 <strong>신속 상황 전파</strong> (Push, SMS, 메일, SNS/카톡 등)</li>
						</ul>
					</dd>
					<dt>
						<span className="col_blue">04</span>
						<h4>사용자 관리</h4>
					</dt>
					<dd>
						<ul>
							<li>기본정보(성명, 전화번호, 소속, 직책 등)의 <strong>연동</strong>과 그룹(정책그룹화)</li>
							<li><strong>사용자별</strong> 알림 디바이스 설정 및 <strong>정보 관리</strong></li>
							<li>서비스 및 자료에 대한  <strong>접근관리수준</strong>(등록/수정/삭제/조회 등)</li>
						</ul>
					</dd>
				</dl>
				<h3 className="mt140">디바이스 이력관리</h3>
				<dl>
					<dt>
						<span className="col_blue">01</span>
						<h4>디바이스 이력관리</h4>
					</dt>
					<dd>
						<ul>
							<li><strong>안전장비 도입</strong>, 설치,  점검, 교체, 유지 운영</li>
							<li>디바이스 그룹, 명칭, 유관업체, 기능내역, <strong>사용 연계 서비스</strong></li>
							<li><strong>플랫폼 접속</strong> 및 인터페이스 인증 관리</li>
							<li>디바이스의 <strong>로그 및 DB 관리</strong></li>
						</ul>
					</dd>
					<dt>
						<span className="col_blue">02</span>
						<h4>디바이스<br />I/F 표준화</h4>
					</dt>
					<dd>
						<ul>
							<li>다양한 디바이스의 <strong>I/F 표준화 규격</strong> 적용</li>
							<li>표준화 규격과 상이할 경우 <strong>표준에 맞게 Converting</strong></li>
							<li><strong>디바이스별 연동 가능</strong>한 네트워크 정의</li>
							<li>개인정보 <strong>암호화 표준관리</strong></li>
						</ul>
					</dd>
					<dt>
						<span className="col_blue">03</span>
						<h4>디바이스 상태 관리</h4>
					</dt>
					<dd>
						<ul>
							<li><strong>실시간</strong> 디바이스이상 유무, 서비스 기능 <strong>정상 여부</strong></li>
							<li><strong>디바이스의 상태</strong> (연동 여부, 연동 주기 등) 정보</li>
							<li>현장내 IoT 연결,  <strong>통신 환경</strong>(데이터 업로드)</li>
						</ul>
					</dd>
					<dt>
						<span className="col_blue">04</span>
						<h4>데이터 수집/관리</h4>
					</dt>
					<dd>
						<ul>
							<li>디바이스 Data <strong>표준화 규격 적용</strong></li>
							<li><strong>수집 데이터 분석</strong> (일회성 단발성, 분석 data, 영상분석 등)</li>
							<li>데이터 분석 후 특정 <strong>이벤트 발생시 전달</strong></li>
						</ul>
					</dd>
				</dl>
      </section>
    </main>
    
  )
}
