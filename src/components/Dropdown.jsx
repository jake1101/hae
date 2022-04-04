import React, { useRef } from "react";
import { useDetectOutsideClick } from "Hooks";
import styled from "styled-components";

export default function Dropdown({ title, list }) {
  const ref = useRef(null);
  const [isOutside, setIsOutside ] = useDetectOutsideClick(ref, false)
  const onClick = () => setIsOutside(!isOutside);

  return(
    <Wrap className={`${isOutside ? 'active' : ''}`} onClick={onClick}>
      <div ref={ref}>{title}</div>
      <ul className={`${isOutside ? 'active' : ''}`}>{list && list.map((c, i) => (<li key={i}>{c}</li>))}</ul>
    </Wrap>
  )
}

const Wrap = styled.div`
  padding: 5px 10px;
  border: 1px solid black;
  align-self: center;
  text-align: center;

  min-width: 200px;
  text-decoration: none;
  color: #000;

  position: relative;
  &:hover {
    cursor: pointer;
  }
  &.active {
    background-color: #666 !important;
    color: #fff !important;
  }
  & ul {
    position: absolute;
    top: calc(100% + 1px);
    left: 0;
    width: 100%;
    background-color: #fff;
    opacity: 0;
    visibility: hidden;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  }

  & ul.active {
    opacity: 1;
    visibility: visible;
  }
  & li {
    padding-top: 5px;
    padding-bottom: 5px;
    color: black;
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
  }
`;