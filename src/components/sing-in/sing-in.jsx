import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import UserProfile from "../user-profile/user-profile.jsx";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {getUser} from "../selectors.js";
import {Operation as OperationUser} from "../../reducer/user/user.js";

const SingIng = (props) => {
  const {loginIn, userInfo} = props;

  if (userInfo.authorizationStatus === `AUTH`) {
    return (
      <Redirect to="/" />
    );
  } else {
    return (
      <div className="page page--gray page--login">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link className="header__logo-link" to="/">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
                </Link>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <UserProfile />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form" action="/" method="post"
                onSubmit={(evt) => {
                  evt.preventDefault();
                  loginIn({
                    email: evt.target.email.value,
                    password: evt.target.password.value
                  });
                }}
              >
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input className="login__input form__input" type="email" name="email" placeholder="Email" required
                    // onChange={this.onChangeLogin}
                  />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input className="login__input form__input" type="password" name="password" placeholder="Password" required
                    // onChange={this.onChangePassword}
                  />
                </div>
                <button className="login__submit form__submit button" type="submit">
                  Sign in
                </button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>Amsterdam</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
};

SingIng.propTypes = {
  loginIn: PropTypes.func,
};

const mapStateToProps = (state) => ({
  userInfo: getUser(state)
});

const mapDispatchToProps = (dispatch) => ({
  loginIn(loginInfo) {
    dispatch(
        OperationUser.loginIn(loginInfo)
    );
  },
  checkAuth() {
    dispatch(
        OperationUser.checkAuth()
    );
  }
});

export {SingIng};
export default connect(mapStateToProps, mapDispatchToProps)(SingIng);
