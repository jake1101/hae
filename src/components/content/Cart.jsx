'use strict';
import React from "react";

import search from "Images/icon_search.png";
import reset from "Images/icon_reset.png";
import more from "Images/icon_more.png";

export default function Cart() {
  return(
    <main id="container">
      <div className="sub_visual cart">
				<div className="inner">
					<div className="location">
						<ul>
							<li><a href="main.html">홈</a> <span>&gt;</span></li>
							<li>장바구니</li>
						</ul>
					</div>
					<div className="sub_tit">
						<h2>장바구니</h2>
						<p>장바구니에서 서비스 신청하려면 로그인이 필요합니다</p>
					</div>
				</div>			
			</div>
			<div className="contents">
				<div className="board_top">
					<select>
						<option>전체</option>
					</select>
					<div className="search_box">
						<div className="search_inp"><img src={search} alt="" /><input type="text" /></div>
						<a href="#" className="btn_search">검색</a>
						<a href="#" className="btn_reset"><img src={reset} alt="" /></a>
					</div>
				</div>
				<div className="tbl_default mt20">
					<table cellPadding="0" cellSpacing="0" border="0">
						<caption>장바구니<span>장바구니의 NO, 서비스 그룹, 서비스 명, 삭제버튼 정보 제공</span></caption>
						<colgroup>
							<col width="*" />
							<col width="*" />
							<col width="*" />
							<col width="20" />
						</colgroup>
						<thead>
							<tr>
								<th>NO</th>
								<th>서비스 그룹</th>
								<th>서비스 명</th>
								<th>삭제</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>이동형 비전센서</td>
								<td>
									이동형 비전센서 활용 접근통제
									<a href="#" className="icon_more"><img src={more} alt="" /></a>
								</td>
								<td><a href="#" className="tbl_btn btn_red_line">삭제</a></td>
							</tr>
							<tr>
								<td>2</td>
								<td>이동형 비전센서</td>
								<td>
									이동형 비전센서 활용 접근통제
									<a href="#" className="icon_more"><img src={more} alt="" /></a>
								</td>
								<td><a href="#" className="tbl_btn btn_red_line">삭제</a></td>
							</tr>
							<tr>
								<td>3</td>
								<td>이동형 비전센서</td>
								<td>
									이동형 비전센서 활용 접근통제
									<a href="#" className="icon_more"><img src={more} alt="" /></a>
								</td>
								<td><a href="#" className="tbl_btn btn_red_line">삭제</a></td>
							</tr>
							<tr>
								<td>4</td>
								<td>이동형 비전센서</td>
								<td>
									이동형 비전센서 활용 접근통제
									<a href="#" className="icon_more"><img src={more} alt="" /></a>
								</td>
								<td><a href="#" className="tbl_btn btn_red_line">삭제</a></td>
							</tr>
							<tr>
								<td>5</td>
								<td>이동형 비전센서</td>
								<td>
									이동형 비전센서 활용 접근통제
									<a href="#" className="icon_more"><img src={more} alt="" /></a>
								</td>
								<td><a href="#" className="tbl_btn btn_red_line">삭제</a></td>
							</tr>
							<tr>
								<td colSpan="4" className="list_none">
									장바구니에 담은 상품이 없습니다.
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="btn-r mt40">
					<span id="openpopup" className="page_btn btn_blue">신청하기</span>
				</div>
			</div>
    </main>
  )
}