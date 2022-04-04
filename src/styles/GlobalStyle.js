import { createGlobalStyle } from "styled-components";

import banner from "Images/img_main banner.jpg";
import summary_bg from "Images/image_summary_bg.jpg";
import sub_visual1 from "Images/sub_visual1.jpg";
import sub_visual2 from "Images/sub_visual2.jpg";
import sub_visual3 from "Images/sub_visual3.jpg";

const GlobalStyle = createGlobalStyle`
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,textarea,p,blockquote,th,td,input,select,textarea,button {margin:0;padding:0}
  fieldset,img {border:0 none}
  dl,ul,ol,menu,li {list-style:none}
  blockquote, q {quotes:none}
  blockquote:before, blockquote:after,q:before, q:after {content:'';content:none}
  input,select,textarea,button {font-size:100%;vertical-align:middle}
  button {border:0 none;background-color:transparent;cursor:pointer}
  table {border-collapse:collapse;border-spacing:0}
  body {-webkit-text-size-adjust:none} /* 뷰표트 변환시 폰트크기 자동확대 방지 */
  input[type='text'],input[type='password'],input[type='submit'],input[type='search'] {-webkit-appearance:none; border-radius:0}
  input:checked[type='checkbox'] {background-color:#666; -webkit-appearance:checkbox}
  button,input[type='button'],input[type='submit'],input[type='reset'],input[type='file'] {-webkit-appearance:button; border-radius:0}
  input[type='search']::-webkit-search-cancel-button {-webkit-appearance:none}
  body {background:#fff}
  body,th,td,input,select,textarea,button {font-size:16px;line-height:1.5;font-family:'Noto Sans KR', sans-serif;color:#000;letter-spacing:-0.05em;}
  a {color:#000;text-decoration:none}
  address,caption,cite,code,dfn,em,var {font-style:normal;font-weight:normal}
  img {vertical-align:top;max-width:100%;}

  table caption{display:none;}
  .blind{display:none;}

  #accessibility-contents {position:fixed;top:0;left:0;width:100%;}
  #skipNav {position:absolute;left:0;top:0;width:100%;z-index:999;}
  #skipNav a {display:block;width:100%;height:0px;background:#333;line-height:30px;color:#fff;text-align:center;font-weight:bold;overflow:hidden;}
  #skipNav a:focus, #skipNav a:active {height:30px;}

  .col_red{color:#ED3232}
  .col_blue{color:#466FC5}
  .bg_gray{background-color:#EEF0F1}
  .bg_blue{background-color:#E4EDF7}

  .ml5{margin-left:5px}
  .mt20{margin-top:20px}
  .mt40{margin-top:40px}
  .mt60{margin-top:60px}
  .mt120{margin-top:120px}
  .mt140{margin-top:140px !important}
  .mt160{margin-top:160px}
  .mb10{margin-bottom:10px}
  .mb20{margin-bottom:20px}
  .mb40{margin-bottom:40px}
  .mb50{margin-bottom:50px}

  .btn-r{text-align:right;}
  .btn-c{text-align:center;}

  .page_btn{padding:10px 20px;color:#fff;font-size:16px;display:inline-block;min-width:44px;text-align:center;border-radius:2px;cursor:pointer}
  .page_btn img{height:20px;margin:3px 5px 0 0}
  .btn{padding:10px 16px;color:#fff;font-size:14px;display:inline-block;min-width:44px;text-align:center;border-radius:2px;;cursor:pointer}
  .tbl_btn{padding:5px 16px;color:#fff;font-size:14px;display:inline-block;min-width:44px;text-align:center;border-radius:2px;}

  .btn_blue{background-color:#1A3670}
  .btn_light_blue{background-color:#466FC5}
  .btn_light_gray{background-color:#A4A4A4}
  .btn_blue_line{border:1px solid #466FC5;color:#466FC5;font-weight:bold}
  .btn_red_line{border:1px solid #ED3232;color:#ED3232;font-weight:bold}
  .btn_gray{background-color:#4B4B4B}

  #wrap{}

  #header{width:100%;margin:0 auto;position:relative;height:64px;}
  #header .logo{position:absolute;left:40px;top:18px;z-index:80}
  #header .logo img{height:24px;}
  #header .gnb{position:relative;margin:0 auto;width:100%}
  #header .gnb .depth1{position:relative;width:1200px;margin:0 auto;text-align:center}
  #header .gnb .depth1 > li{display:inline-block;position:relative;z-index:90;}
  #header .gnb .depth1 > li a{color:#1A3670;display:inline-block;width:160px;padding-top:18px;height:46px}
  #header .gnb .depth1 > li > a.on{font-weight:bold}
  #header .gnb .depth2{display:none;position:absolute;}
  #header .gnb .depth2 li a{height:25px;padding:5px 0}
  #header .gnb .depth2 li{text-align:center;padding:10px 0;}
  #header .gnb .depth1 > li:hover{background-color:#EEF0F1;}
  #header .gnb .depth1 li:hover .depth2{display:block}
  #header .gnb .depth1 li:hover .depth2{background-color:#fff;}
  #header .gnb .depth1 li:hover .depth2 li:hover{background-color:#E4EDF7}
  #header .right_link{position:absolute;right:40px;top:22px;font-size:14px;font-weight:bold} 

  #container{position:relative;z-index:10}
  #container .contents{position:relative;width:1200px;margin:80px auto;}

  #footer{position:relative;background-color:#2A2B32}
  #footer .inner{width:1200px;margin:0 auto;padding:50px 0;color:#A4A4A4;}
  #footer .inner h4{margin-bottom:12px;font-weight:normal;}
  #footer .inner > ul > li{margin-bottom:6px;}
  #footer .inner .ft_menu {margin-top:14px;}
  #footer .inner .ft_menu li{display:inline;font-size:14px;}
  #footer .inner .ft_menu li:after{content:"|";padding:0 8px;display:inline-block;}
  #footer .inner .ft_menu li:last-child:after{display:none}
  #footer .inner a{color:#A4A4A4;font-weight:bold}

  .main_visual{position:relative;width:100%;height:700px;background:url(${banner}) no-repeat;background-size:cover;}
  .main_visual h2{position:relative;width:1200px;margin:0 auto;font-size:60px;color:#fff;padding-top:240px;}
  .main_visual p{position:relative;width:1200px;margin:0 auto;font-size:20px;color:#fff}
  .main_visual p strong{font-size:24px;}

  .main_tit{font-size:40px;font-weight:normal;text-align:center}

  .section01{text-align:center;position:relative;margin:80px auto 60px auto}
  .section01 h4{color:#1A3670;font-size:40px;}
  .section01 p{color:#4B4B4B;font-size:18px}

  .section02{position:relative;margin:0 auto;text-align:center}
  .section02 .img{background:url(${summary_bg}) no-repeat;background-size:cover;padding:44px 0}
  .section02 p{margin-top:24px;color:#4B4B4B;font-size:15px;letter-spacing:0;}

  .section03{margin-top:55px;}
  .section03 ul{position:relative;width:1200px;margin:0 auto;}
  .section03 li{border:1px solid #ddd;padding:40px 60px;box-sizing:border-box;margin:20px 0;border-left:10px solid #ddd}
  .section03 li h4{font-size:24px;}
  .section03 li p{margin-top:5px;}
  .section03 li.bor_blue1{border-left-color:#1A3670}
  .section03 li.bor_blue2{border-left-color:#1F4187}
  .section03 li.bor_blue3{border-left-color:#466FC5}
  .section03 li.bor_blue4{border-left-color:#A4C6E5}
  .section03 li.bor_blue5{border-left-color:#E4EDF7}

  .section04{text-align:center}
  .section04 ul{position:relative;width:1200px;margin:0 auto;}
  .section04 li{width:380px;float:left;text-align:left;padding:50px;box-sizing:border-box}
  .section04 li h4{font-size:24px;}
  .section04 li p{color:#393E47;margin-top:10px;}
  .section04 li img{height:60px;margin-bottom:8px;}
  .section04 li.m30{margin:0 30px;}
  .section04:after{display:block;clear:both;content:""}

  .section05{position:relative;margin-bottom:200px;}
  .section05 h3{position:relative;width:1200px;margin:0 auto 40px auto;font-size:40px;color:#1A3670}
  .section05 dl{position:relative;width:1200px;margin:0 auto}
  .section05 dt{float:left;width:30%}
  .section05 dt span{color:#466FC5}
  .section05 dt h4{font-weight:normal;color:#393E47;font-size:32px;margin-top:5px;}
  .section05 dd{float:left;width:70%;background-color:#EEF0F1;margin-bottom:35px;box-sizing:border-box;padding:30px;color:#4B4B4B}
  .section05 dd li{margin-top:8px}
  .section05 dd li:first-child{margin-top:0;}
  .section05 dl:after{display:block;clear:both;content:""}

  /* sub */
  .contents .customer_center .form_box{background-color:#EEF0F1;box-sizing:border-box;padding:60px 80px;}
  .contents .customer_center .form_box li{margin:30px 0}
  .contents .customer_center .form_box li .ver-t{vertical-align:top;padding-top:5px}
  .contents .customer_center .form_box textarea{min-height:200px;border:1px solid #ddd;width:calc(100% - 193px);padding:12px;color:#666}
  .contents .customer_center .form_box strong{font-weight:normal;}

  .sub_visual{position:relative;height:334px;width:100%;margin:0 auto;background-color:#000}
  .sub_visual.service{background:url(${sub_visual1}) no-repeat;background-size:cover}
  .sub_visual.cart{background:url(${sub_visual2}) no-repeat;background-size:cover}
  .sub_visual.customer_center{background:url(${sub_visual3}) no-repeat;background-size:cover}
  .sub_visual .inner{position:relative;width:1200px;margin:0 auto;}
  .sub_visual .location{padding-top:100px;color:#fff}
  .sub_visual .location li{display:inline;}
  .sub_visual .location li span{padding:0 3px}
  .sub_visual .location a{color:#fff}
  .sub_visual .sub_tit{margin-top:16px;color:#fff}
  .sub_visual .sub_tit h2{margin-bottom:8px;font-size:40px;}
  .sub_visual .sub_tit p{font-size:20px;}

  .board_top{position:relative;}
  .board_top select{position:absolute;left:0;top:0;border:1px solid #ddd;padding:10px;min-width:240px;border-radius:2px}
  .board_top .search_box{text-align:right;vertical-align:top}
  .board_top .search_inp{position:relative;display:inline-block;}
  .board_top .search_inp input{border:1px solid #ddd;padding:10px 10px 10px 30px;border-radius:2px}
  .board_top .search_inp img{position:absolute;top:12px;left:8px;height:20px}
  .board_top .btn_search{background-color:#466FC5;border:1px solid #3157A7;color:#fff;padding:7px 20px 11px 20px;border-radius:2px;margin:0 10px}
  .board_top .btn_reset{background-color:#E3E3E3;border:1px solid #CCCCCC;padding:7px 15px 11px 15px;border-radius:2px}
  .board_top .btn_reset img{height:20px;margin-top:11px}

  .tbl_default{border-top:1px solid #1A3670}
  .tbl_default table{width:100%;font-size:13px}
  .tbl_default table thead th{background-color:#EEF0F1;color:#333;border-left:1px solid #E4E4E4;padding:10px 0;}
  .tbl_default table thead th:first-child{border-left:none}
  .tbl_default table tbody td{color:#4B4B4B;border-bottom:1px solid #ccc;text-align:center;padding:10px 0;}
  .tbl_default .icon_more img{height:24px;margin-left:5px}
  .tbl_default td.list_none{padding:80px 0}

  .tab_menu{position:relative;border-bottom:1px solid #ddd}
  .tab_menu li{float:left;width:25%;text-align:center;}
  .tab_menu li a{color:#000;display:block;padding:0 0 18px 0}
  .tab_menu li a.on{border-bottom:4px solid #466FC5;color:#466FC5}
  .tab_menu:after{display:block;content:"";clear:both}

  .box_list ul{position:relative;height:264px;overflow:hidden}
  .box_list li > img{float:left;width:380px;}
  .box_list li .txt{float:left;width:820px;border:1px solid #ddd;box-sizing:border-box;padding:30px 50px;height:264px;}
  .box_list li .txt h4{font-size:20px;color:#000;margin:30px 0 10px 0;}
  .box_list li .txt .btn-r{position:absolute;bottom:50px;right:50px;}
  .box_list:after{display:block;content:"";clear:both}

  .lnb{position:relative;width:100%;border-bottom:1px solid #ddd}
  .lnb ul{position:relative;width:1200px;margin:0 auto}
  .lnb li{float:left;width:16.666%;text-align:center;}
  .lnb li a{color:#000;display:block;padding:18px 0}
  .lnb li.on a{border-bottom:4px solid #466FC5;color:#466FC5}
  .lnb:after{display:block;content:"";clear:both}

  .contents .sub_tit{color:#393E47;font-size:30px;}
  .sec01 .left_box{float:left;width:700px;}
  .sec01 .left_box p{color:#4B4B4B;padding:20px 0}
  .sec01 .left_box li{float:left;width:50%;text-align:left;font-size:14px}
  .sec01 .left_box li h6{font-weight:bold;font-size:14px;padding:10px 0 5px 0}
  .sec01 .left_box:after{clear:both;display:block;content:"";}
  .sec01 .right_box{float:left;width:500px;}
  .sec01 .right_box img{width:100%}
  .sec01:after{display:block;content:"";clear:both}

  .sec02{position:relative;padding:90px 0}
  .sec02 .left_box{float:left;width:560px;}
  .sec02 .left_box img{width:100%;}
  .sec02 .right_box{float:left;width:640px;}
  .sec02 .right_box h3{padding-left:100px}
  .sec02 .right_box p{font-size:15px;color:#4B4B4B;padding-left:100px;margin-top:5px}
  .sec02 .sub_tit{margin-bottom:15px;}
  .sec02:after{clear:both;display:block;content:"";}

  .sec03 .box3 ul{}
  .sec03 .box3 li{float:left;height:240px;width:31.33333%;box-sizing:border-box;margin:40px 0 40px 2%}
  .sec03 .box3 li.w32{margin-left:0;width:32.3333%}
  .sec03 .box3 li img{height:220px;}
  .sec03 .box3 li h5{font-size:24px}
  .sec03 .box3 li p{font-size:18px;color:#4B4B4B;margin-top:12px}
  .sec03 h4{font-size:20px;}
  .sec03 ul{margin:15px 0 50px 0}
  .sec03 li{color:#4B4B4B;padding:2px 0;font-size:18px;}
  .sec03 .box{float:left;width:50%;margin-top:20px}
  .sec03:after{clear:both;display:block;content:"";}

  .sec04{padding:100px 0;}
  .sec04 .box3 ul li{position:relative;float:left;width:380px;height:238px;color:#4B4B4B;font-size:18px;background-color:#fff;box-sizing:border-box;padding:45px;margin-bottom:30px;}
  .sec04 .box3 ul li img{position:absolute;right:50px;bottom:50px;height:50px}
  .sec04 .box3 ul li.m30{margin:0 30px}
  .sec04 .box3:after{display:block;clear:both;content:""}

  .sec05 .box4{margin-top:30px}
  .sec05 .box4 li{float:left;width:277px;margin-left:30px;border:1px solid #ddd;position:relative;box-sizing:border-box}
  .sec05 .box4 .first-box li{height:320px;}
  .sec05 .box4 li:first-child{margin-left:0;}
  .sec05 .box4 li.w50{width:585px}
  .sec05 .box4 li h5{font-size:20px;padding:20px 20px 10px 20px}
  .sec05 .box4 li p{text-align:center;font-size:20px;padding:20px 0;}
  .sec05 .box4 li .small{font-size:16px;text-align:left;padding:0 20px;}
  .sec05 .box4 li .img{position:absolute;bottom:20px;left:50%;margin-left:-115px}
  .sec05 .box4:after{display:block;clear:both;content:""}
  .sec05 .dot_list{margin-top:20px}
  .sec05 .dot_list li{font-size:18px;margin:5px 0;color:#393E47;}
  .sec05 .dot_list li:before{content:"●";display:inline-block;margin-right:6px;vertical-align:middle;font-size:2px;}

  #layer_popup{position:absolute;top:0;left:0;width:100%;height:100%;z-index:100;display:none}
  #layer_popup .dim_bg{position:fixed;top:0;left:0;width:100%;height: 100%;background:#000; opacity: .5; filter: alpha(opacity=50);}
  #layer_popup .popup_con{position:relative;max-width:400px;margin:0 auto;padding:50px 20px 20px 20px;background-color: #fff;border-radius:3px; z-index: 10;text-align:center;top:0;}
  #layer_popup .popup_con .closed{position:absolute;right:20px;top:20px;}
  #layer_popup .popup_con .closed img{height:20px;}

  #layer_popup .popup_service{position:relative;max-width:1000px;margin:0 auto;padding:30px 30px 40px 30px;background-color: #fff;border-radius:3px; z-index: 10;text-align:left}
  #layer_popup .popup_service .closed{position:absolute;right:30px;top:30px;}
  #layer_popup .popup_service .closed img{height:20px;}
  #layer_popup .popup_service .tit{margin-bottom:20px}
  #layer_popup .popup_service .tit h2{font-size:20px;}
  #layer_popup .popup_service .tit h2 span{font-size:14px;font-weight:normal;margin-left:10px;}
  #layer_popup .popup_service .pop_form{padding:20px 0;border-top:1px solid #ddd;border-bottom:1px solid #ddd}
  #layer_popup .popup_service .pop_form .pop_location{margin-bottom:40px;color:#333}
  #layer_popup .popup_service .pop_form .pop_location li{display:inline;}
  #layer_popup .popup_service .pop_form .pop_location li span{padding:0 10px}
  #layer_popup .popup_service .pop_form > ul > li{margin:20px 0;}
  #layer_popup .popup_service .pop_form > ul > li .date{color:#666;font-size:13px;margin-left:10px;letter-spacing:0;}
  #layer_popup .popup_service .pop_form strong{display:inline-block;width:200px;vertical-align:top}
  #layer_popup .popup_service .pop_form select{color:#666;font-size:14px;min-width:240px}
  #layer_popup .popup_service .pop_form input,
  #layer_popup .popup_service .pop_form select:first-child{color:#666;}
  #layer_popup .popup_service .pop_form dl{width:calc(100% - 300px);display:inline-block;color:#666}
  #layer_popup .popup_service .pop_form input,
  #layer_popup .popup_service .pop_form select{border:1px solid #ddd;padding:5px 10px;font-size:14px}
  #layer_popup .popup_service .pop_form dl{font-size:14px}
  #layer_popup .popup_service .pop_form dl dt{color:#000;width:240px;float:left;}
  #layer_popup .popup_service .pop_form dl dt .small{font-size:12px;letter-spacing:0;}
  #layer_popup .popup_service .pop_form dl dd{margin:8px 0;}
  #layer_popup .popup_service .pop_form dl dd input{width:100px;padding:3px}
  #layer_popup .popup_service .pop_form .required:after{content:"*";color:#ED3232;padding-left:3px}
  #layer_popup .popup_service .pop_form .btn{padding:5px 24px;}
  #layer_popup .popup_service .pop_ft{margin-top:20px;font-size:15px}
  #layer_popup .popup_service .pop_ft .btn{float:right}

  #layer_popup.pop_page{top:auto}

  #layer_popup.join{top:auto}
  #layer_popup.join .popup_con{max-width:700px;border:1px solid #ddd;border-radius:0;padding-bottom:50px;}
  #layer_popup.join .popup_con h2.tit{font-size:24px;font-weight:normal;padding:20px 0 50px 0;}
  .form_box {padding:0 80px;position:relative;box-sizing:border-box;}
  .form_box li{margin-bottom:16px;text-align:left;position:relative;}
  .form_box > ul > li > input{border:1px solid #ddd;color:#A4A4A4;padding:12px;border-radius:3px;width:calc(100% - 193px);}
  .form_box > ul > li > span{width:160px;display:inline-block;}
  .form_box > ul > li > span.required:after{content:"*";color:#ED3232}
  #layer_popup.join .form_box .add_input{border-top:1px solid #ddd;padding-top:16px}
  #layer_popup.join .form_box .add_input > li > input{width:calc(100% - 246px);}
  #layer_popup.join .form_box .add_input > li > .closed{display:flex;justify-content:center;align-items:center;right:0;border:1px solid #ddd;border-radius:3px;width:42px;height:52px;top:0;}
  #layer_popup.join .form_box .add_input > li > .closed img{height:20px;}
  .form_box .ft_box .deco_line{position:absolute;top:0;right:0;color:#4B4B4B;text-decoration:underline;}
  .form_box .ft_box li{margin:25px 0;color:#444;}
  .form_box .ft_box strong{color:#4B4B4B}
  #layer_popup.join .btn-join .btn{width:calc(100% - 160px);box-sizing:border-box;font-size:15px;padding:18px auto;margin:0 80px;}

  .check_box {
      position: relative;
      padding-left:30px;
    padding-right:5px;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  .check_box input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }  

  .check_box .checkmark {
      position: absolute;
      top: 2px;
      left: 0;
      height: 20px;
      width: 20px;
      border:1px solid #A4A4A4;
    }  

  .check_box:hover input ~ .checkmark {
      background-color: #fff;
    }  

  .check_box input:checked ~ .checkmark {
      background-color: #1A3670;
      border:2px solid #1A3670;
    }  

  .check_box .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }  

  .check_box input:checked ~ .checkmark:after {
      display: block;
    }  

  .check_box .checkmark:after {
      left: 6px;
      top: 2px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }  

  .radio_box {
      position: relative;
    font-weight:bold;
    color:#6A6A6A;
      padding-left: 20px;
    margin-left:20px;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }  

  .radio_box input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }  

  .radio_box .checkmark {
      position: absolute;
      top: 2px;
      left: 0;
      height: 14px;
      width: 14px;
      background-color: #fff;
      border:1px solid #ccc;
      border-radius: 50%;
    }  

  .radio_box input:checked ~ .checkmark {
      background-color: #fff;
      border:1px solid #466FC5;
    }  

  .radio_box .checkmark:after {
      content: "";
      position: absolute;
    }  

  .radio_box input:checked ~ .checkmark:after {
      display: block;
    }  

  .radio_box .checkmark:after {
        top:3px;
        left: 3px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #ccc;
    }
  .radio_box input:checked ~ .checkmark:after {
      display: block;
      background: #466FC5;
    }  

  .login_box{position:relative;width:870px;margin:0 auto;height:412px;top:200px}
  .login_box .box_wrap{background-color:#f8f8f8;height:100%}
  .login_box .box_wrap img{width:516px;float:left;}
  .login_box .box_wrap .input_wrap{height:412px;width:354px;float:left;box-sizing:border-box;padding:50px 30px;font-size:13px;color:#666;border:1px solid #ddd}
  .login_box .box_wrap .input_wrap h4{color:#333;font-size:15px;margin-bottom:30px}
  .login_box .box_wrap .input_wrap .radio_wrap{position:relative;color:#6A6A6A;font-size:13px;letter-spacing:0;text-align:right;margin-bottom:10px}
  .login_box .box_wrap .input_wrap .inp{border:1px solid #ccc;color:#A6A6A6;padding:8px 14px;box-sizing:border-box;width:100%;font-size:15px;margin:5px 0;}
  .login_box .box_wrap .input_wrap .btn{width:100%;box-sizing:border-box;padding:18px;font-size:15px;}
  .login_box .box_wrap .info{padding:15px 0 30px;}
  .login_box .box_wrap .info a{color:#666;float:right}
  .login_box .box_wrap .info a span{padding:0 5px}
  .login_box .box_wrap .info .check_box {padding-left:22px;}
  .login_box .box_wrap .info .check_box .checkmark{position: absolute;top: 2px;left: 0;height: 15px;width: 15px;border:1px solid #ccc;border-radius:2px;background-color:#ddd;} 
  .login_box .box_wrap .info .check_box .checkmark:after{left: 5px;top: 1px;width: 4px;height: 7px;border-width: 0 2px 2px 0;}
  .login_box .box_wrap .info .check_box input:checked ~ .checkmark {background-color: #1A3670;border:2px solid #1A3670;}  
  .login_box .box_wrap:after{content:"";display:block;clear:both;}
  .login_box .copyright{text-align:right;color:#AAAAAA;font-size:11px;letter-spacing:0;margin-top:12px}
`;
export default GlobalStyle