import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="OWC2023" style={{ width: "88px" }} />
            </Link>
            {/* Hamburger menu */}
            <button className={`navbar-burger burger ${this.state.navBarActiveClass}`} aria-label="Nav button" data-target="navMenu" onClick={() => this.toggleHamburger()} tabIndex={0}>
              <span />
              <span />
              <span />
            </button>
          </div>
          <div id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}>
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                TEFSについて
              </Link>
              <Link className="navbar-item" to="/blog/">
                お知らせ
              </Link>
              <Link className="navbar-item" to="/theme/">
                実験テーマとその概要
              </Link>
              <Link className="navbar-item" to="/registration/">
                お申し込み
              </Link>
              {/* <a className="navbar-item" href="https://www.ieee-jp.org/section/tokyo/chapter/COM-19/com-19.html" target="_blank" rel="noopener noreferrer">
                お申し込み
              </a> */}
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
