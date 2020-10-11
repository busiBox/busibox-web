import React from "react";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import { slide as BarsMenu } from "react-burger-menu";

import "./styles.css";
import { Link } from "react-router-dom";

function Header() {
  const barsMenuStyle = {
    bmBurgerButton: {
      position: "fixed",
      width: "25px",
      height: "25px",
      left: "20px",
      top: "20px",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "#373a47",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#FFF",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };
  return (
    <div>
      <BarsMenu
        styles={barsMenuStyle}
        // isOpen={this.state.isHamburgerMenuOpened}
        // onStateChange={this.handleHamburguerMenu}
      ></BarsMenu>
      <div id="header-container">
        <div className="bars-menu-icon">
          <MenuOutlinedIcon />
        </div>

        <Link to="/">
          <img
            id="logo"
            src="/assets/logo/logo_horizontal_branco.png"
            alt="busiBox logo"
          />
        </Link>
        <div className="profile-menu-container">
          <Link to="/login">
            <img src="/assets/icons/logout.svg" alt="logout" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
