'use strict';
import React from "react";

export default function CustomerCenter() {
  return(
    <main id="container">
      <div className="sub_visual customer_center">
				<div className="inner">
					<div className="location">
						<ul>
							<li><a href="main.html">홈</a> <span>&gt;</span></li>
							<li>고객센터</li>
						</ul>
					</div>
					<div className="sub_tit">
						<h2>고객센터</h2>
						<p>문의에 대한 답변은 입력 폼에 작성하신 개인 이메일에서 확인하실 수 있습니다</p>
					</div>
				</div>
			</div>
			<div className="contents">
				<div className="customer_center">
					<div className="form_box">
						<ul>
							<li>	
								<span className="required">문의 제목</span>
								<input type="text" placeholder="제목을 입력해주세요" />
							</li>
							<li>	
								<span className="required ver-t">문의 내용</span>
								<textarea defaultValue="내용을 입력해주세요" />
							</li>
							<li>	
								<span className="required">이름</span>
								<input type="text" placeholder="이름을 입력해주세요" />
							</li>
							<li>	
								<span className="required">소속 및 직책</span>
								<input type="text" placeholder="현재 소속(계열사, 사업장, 직책)을 입력해주세요" />
							</li>
							<li>	
								<span className="required">이메일</span>
								<input type="text" placeholder="이메일을 입력해주세요" />
							</li>
							<li>	
								<span className="required">연락처</span>
								<input type="text" placeholder="연락처를 입력해주세요" />
							</li>
						</ul>
						<p className="mt40">
              <label className="check_box">
                <strong>귀하는 개인정보 수집 및 이용에 동의합니다.</strong>
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </p>
						<div className="btn-r mt40">
							<a href="#" className="page_btn btn_blue">문의하기</a>
						</div>
					</div>
				</div>
			</div>
    </main>
  )
}