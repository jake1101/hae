import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Link, NavLink } from "react-router-dom";

import "./style.css";

import logo from "Images/example.png";

export default function Header() {
  const ref = useRef(null);
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState('');
  const [isOutsideClick, setIsOutsideClick] = useState(false);
  const [headerInner, setHeaderInner] = useState({title: 'Home', desc: 'Aute ut exercitation tempor proident. Duis aute non exercitation amet. Pariatur consequat dolor nisi cupidatat nisi aliqua sint id ipsum proident in quis minim. Ipsum adipisicing qui nisi esse deserunt nulla excepteur velit ea reprehenderit non tempor.'})
  const [stepText, setStepText] = useState('');
  const dropdownItem = [
    {
      to: `/service/0`,
      text: '이동형 비전센서'
    },
    {
      to: '/service/1',
      text: 'CCTV'
    },
    {
      to: '/service/2',
      text: '스마트 스테이션'
    },
    {
      to: '/service/3',
      text: '바디캠'
    }
  ];

  const onClick = () => {
    setIsOutsideClick(!isOutsideClick);
    !pathname.includes('/service') && isActive ? setIsActive('') : setIsActive('active');
  };

  useEffect(() => {
    pathname.includes('/service') ? setIsActive('active') : setIsActive('');

    if(pathname.includes('/service')){
      setHeaderInner({title: 'Service Offerings', desc: 'Aute ut exercitation tempor proident. Duis aute non exercitation amet. Pariatur consequat dolor nisi cupidatat nisi aliqua sint id ipsum proident in quis minim. Ipsum adipisicing qui nisi esse deserunt nulla excepteur velit ea reprehenderit non tempor.'});
      setStepText('home > Service Offerings')
    }else if(pathname.includes('/customer')){
      setHeaderInner({title: '고객센터', desc: 'Aute ut exercitation tempor proident. Duis aute non exercitation amet. Pariatur consequat dolor nisi cupidatat nisi aliqua sint id ipsum proident in quis minim. Ipsum adipisicing qui nisi esse deserunt nulla excepteur velit ea reprehenderit non tempor.'});
      setStepText('home > 고객센터')
    }else if(pathname.includes('/cart')){
      setHeaderInner({title: '장바구니', desc: 'Aute ut exercitation tempor proident. Duis aute non exercitation amet. Pariatur consequat dolor nisi cupidatat nisi aliqua sint id ipsum proident in quis minim. Ipsum adipisicing qui nisi esse deserunt nulla excepteur velit ea reprehenderit non tempor.'});
      setStepText('home > 장바구니')
    }else{
      setHeaderInner({title: 'Home', desc: 'Aute ut exercitation tempor proident. Duis aute non exercitation amet. Pariatur consequat dolor nisi cupidatat nisi aliqua sint id ipsum proident in quis minim. Ipsum adipisicing qui nisi esse deserunt nulla excepteur velit ea reprehenderit non tempor.'})
      setStepText('home')
    }
  }, [pathname]);

  useEffect(() => {
    const clickHandler = e => {
      if(ref.current !== null && !ref.current.contains(e.target)){
        !pathname.includes('/service') && setIsActive('');
        setIsOutsideClick(false);
      }
    }
    window.onclick = clickHandler;
  }, [])

  // useEffect(() => {
    // const clickHandler = e => {
    //   if(ref.current !== null && !ref.current.contains(e.target)) {
    //     !pathname.includes('/service') && setIsActive('');
    //     setIsOutsideClick(!isOutsideClick);
    //   }
    // };

    // if(isOutsideClick) {
    //   window.addEventListener('click', clickHandler);
    // }

    // return () => {
    //   window.removeEventListener('click', clickHandler);
    // }
  // }, [isOutsideClick])

  return(
    <header>
      <div className="hae_header_wrap">
        <div className="hae_header_top">
          <div>
            <Link to="/">
              <img className="hae_header_logo" src={logo} alt="this is logo" />
            </Link>
          </div>
          <nav className="hae_header_nav">
            <div className={`hae_nl ${isActive}`} ref={ref} onClick={onClick}>
              Service Offerings
              <div className={`hae_nl_dropdown ${isOutsideClick ? 'active' : ''}`}>
                <ul>
                  {dropdownItem.map((c, i) => (<li key={i}><Link to={`${c.to}`}>{c.text}</Link></li>))}
                  {/* <li><Link to={'/service/0'}>{'이동형 비전센서'}</Link></li>
                  <li><Link to={'/service/1'}>{'CCTV'}</Link></li>
                  <li><Link to={'/service/2'}>{'스마트 스테이션'}</Link></li>
                  <li><Link to={'/service/3'}>{'바디캠'}</Link></li> */}
                </ul>
              </div>
            </div>
            <NavLink className="hae_nl" to="/customer">고객센터</NavLink>
            <NavLink className="hae_nl" to="/cart">장바구니</NavLink>
          </nav>
          <div className="hae_header_login">
            <div>
              login
            </div>
          </div>
        </div>
        <div className="hae_header_mid">
          <div>
            <h2>{headerInner.title}</h2>
            <p>{headerInner.desc}</p>
          </div>
          <div>
            <p className="hae_step">{stepText}</p>
          </div>
        </div>
      </div>
    </header>
  )
}