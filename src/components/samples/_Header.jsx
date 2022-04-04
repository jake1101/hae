import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

import logo from "Images/logo.png";

export default function Header() {
  const ref = useRef(null);
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [headerInner, setHeaderInner] = useState({title: 'Home', desc: 'Aute ut exercitation tempor proident. Duis aute non exercitation amet. Pariatur consequat dolor nisi cupidatat nisi aliqua sint id ipsum proident in quis minim. Ipsum adipisicing qui nisi esse deserunt nulla excepteur velit ea reprehenderit non tempor.'})
  const [stepText, setStepText] = useState('');
  const dropdownItem = [
    {
      to: `/service0`,
      text: '이동형 비전센서'
    },
    {
      to: '/service1',
      text: 'CCTV'
    },
    {
      to: '/service2',
      text: '스마트 스테이션'
    },
    {
      to: '/service3',
      text: '바디캠'
    }
  ];

  const onClick = () => {
    !pathname.includes('/service') && isActive ? setIsActive('') : setIsActive('active');
    setShowDropdown(!showDropdown)
  };

  useEffect(() => {
    pathname.includes('/service') ? setIsActive('active') : setIsActive('');
    !pathname.includes('/service') && setShowDropdown(false);

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
        setShowDropdown(!showDropdown)
      }
    }

    showDropdown && window.addEventListener('click', clickHandler)
  
    return () => {
      window.removeEventListener('click', clickHandler);
    }
  }, [showDropdown])

  return(
    <header>
      <Wrap>
        <Top>
          <div>
            <Link to="/">
              <Logo src={logo} alt="this is logo" />
            </Link>
          </div>
          <Nav>
            <NL className={isActive} ref={ref} onClick={onClick}>
              Service Offerings
              <Dropdown className={`${showDropdown ? 'active' : ''}`}>
                <ul>
                  {dropdownItem.map((c, i) => (<li key={i}><Link to={`${c.to}`}>{c.text}</Link></li>))}
                </ul>
              </Dropdown>
            </NL>
            <SNL to="/customer">고객센터</SNL>
            <SNL to="/cart">장바구니</SNL>
          </Nav>
          <Login>
            <div>
              login
            </div>
          </Login>
        </Top>
        <Mid>
          <div>
            <h2>{headerInner.title}</h2>
            <p>{headerInner.desc}</p>
          </div>
          <div>
            <Step>{stepText}</Step>
          </div>
        </Mid>
      </Wrap>
    </header>
  )
}

const Wrap = styled.div`
  background-color: #f8f8f8;
  font-size: var(--p-f);
  font-weight: var(--p-b);
`;

const Top = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  max-width: var(--out-w);
  display: flex;
  justify-content: space-between;
  user-select: none;
`;

const Logo = styled.img`
  &:hover{
    cursor: pointer;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 10px;
  & > * {
    padding: 5px 10px;
    border: 1px solid black;
    align-self: center;
    text-align: center;

    min-width: 200px;
    text-decoration: none;
    color: #000;
  }
`;

const NL = styled.div`
  position: relative;
  &:hover {
    cursor: pointer;
  }
  &.active {
    background-color: #666 !important;
    color: #fff !important;
  }
`;

const SNL = styled(NavLink)`
  position: relative;
  &:hover {
    cursor: pointer;
  }
  &.active {
    background-color: #666 !important;
    color: #fff !important;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 1px);
  left: 0;
  width: 100%;
  background-color: #fff;
  opacity: 0;
  visibility: hidden;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;

  &.active {
    opacity: 1;
    visibility: visible;
  }
  & li {
    border-bottom: 1px solid #666666;
  }

  & li:last-child {
    border-bottom: none;
  }

  & li:hover {
    background-color: #dddddd;
    cursor: pointer;
  }

  & a {
    color: black;
    text-decoration: none;
    display: block;
    padding-top: 5px;
    padding-bottom: 5px;
  }
`;

const Login = styled.div`
  padding: 5px 10px;
  border: 1px solid black;
  align-self: center;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

const Mid = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  max-width: var(--in-w);
  height: 200px;
  display: flex;
  justify-content: space-between;
  gap: 500px;

  & h2 {
    padding-bottom: 10px;
    font-size: var(--h2-f);
    font-weight: var(--h2-b);
    white-space: nowrap;
  }

  & > div:first-child > p {
    max-height: 100px;
    word-break: break-all;
    overflow-y: hidden;
  }

  & > div:last-child {
    align-self: flex-end;
  }

  @media (max-width: 1023px) {
    & {
      gap: 100px;
    }
  }
`;

const Step = styled.p`
  min-width: max-content;
`;