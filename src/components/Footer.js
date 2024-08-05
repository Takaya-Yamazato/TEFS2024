import React from "react";
import { Link } from "gatsby";
// import logo from "../img/logo.svg";
import { FaWifi } from "@react-icons/all-files/fa/FaWifi";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          {/* <img src={logo} alt="Kaldi" style={{ width: "14em", height: "10em" }} /> */}
          <h1 className="is-size-3 has-text-white-ter">テクノフロンティアセミナー（TEFS2024）</h1>
        </div>
        <div className="content">
          <div className="container">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item has-text-white-ter has-text-weight-bold">
                        ホーム
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item has-text-white-ter has-text-weight-bold" to="/about/">
                        TEFSについて
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item has-text-white-ter has-text-weight-bold" to="/blog/">
                        お知らせ
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item has-text-white-ter has-text-weight-bold" to="/theme/">
                      実験テーマとその概要
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item has-text-white-ter has-text-weight-bold" to="/team/">
                      実行委委員会
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item has-text-white-ter has-text-weight-bold" to="/registration/">
                        お申し込み
                      </Link>
                    </li>
                    <li>
                      <a className="navbar-item has-text-white-ter has-text-weight-bold" href="https://docs.google.com/forms/d/e/1FAIpQLScEQw3lxo1LltghuuCKHDOAHp9dpMmukafGxiUbOMwJGqtV_g/viewform?usp=sf_link" title="お問い合わせ">
                        お問い合わせ
                      </a>
                    </li>
                    <li>
                      <a className="navbar-item has-text-white-ter" href="https://ocw.nagoya-u.jp" target="_blank" rel="noopener noreferrer" title="NU OCW">
                        名大の授業
                      </a>
                    </li>
                    <li>
                      <a className="navbar-item has-text-white-ter" href="https://www.nagoya-u.ac.jp/admissions/voice/index.html" target="_blank" rel="noopener noreferrer" title="NU Start Guide">
                      名大生ボイス
                      </a>
                    </li>
                    <li>
                      <a className="navbar-item has-text-white-ter" href="https://nuoc.adm.nagoya-u.ac.jp/2024/index.html" target="_blank" rel="noopener noreferrer" title="NU Start Guide">
                      名古屋大学オープンキャンパス
                      </a>
                    </li>
                    
                    <li>
                      <a className="navbar-item has-text-white-ter" href="https://www.nuee.nagoya-u.ac.jp/" target="_blank" rel="noopener noreferrer" title="名古屋大学工学部電気電子情報工学科">
                      名古屋大学工学部電気電子情報工学科
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a className="navbar-item has-text-white-ter" href="https://yamazato.nuee.nagoya-u.ac.jp/" target="_blank" rel="noopener noreferrer" title="Nagoya University Yamazato Laboratory">
                  <FaWifi />
                  &nbsp;&nbsp;Yamazato Laboratory
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
