import React from "react";
import { Link } from "react-router-dom";
import UserProfile from "../user-profile/user-profile.jsx";

const PageHeader = (props) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/" className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <UserProfile
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
