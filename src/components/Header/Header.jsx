import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

import logo from "../../image/example.png";

const NL = (props) => {
  return(
    <NavLink className={({isActive}) => isActive ? 'hae_nl_active' : '' } to={props.linkTo} >
      {props.text}
    </NavLink>
  )
}

export default function Header() {
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
            <NL linkTo="/service" text="Service offering" />
            <NL linkTo="/customer" text="고객센터" />
            <NL linkTo="/cart" text="장바구니" />
          </nav>
          <div className="hae_header_login">
            <div>
              login
            </div>
          </div>
        </div>
        <div className="hae_header_mid">
          <div>
            <h2>Header</h2>
            <p>this is header header heaadlfjelifxcvlseflksdjfklsllselkjsdf</p>
          </div>
          <div>
            <p>home &gt; header</p>
          </div>
        </div>
      </div>
    </header>
  )
}