import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import CloseIcon from "@material-ui/icons/Close";
import { slide as BarsMenu } from "react-burger-menu";

import "./styles.css";

function Header() {
  const history = useHistory();
  const [isOpen, setOpen] = useState(false);

  const barsMenuStyle = {
    bmBurgerButton: {
      position: "fixed",
      width: "30px",
      height: "30px",
      left: "20px",
      top: "20px",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmCrossButton: {
      height: 40,
      width: 40,
      right: "250px",
      color: "red",
    },
    bmMenu: {
      background: "#F1F1F1",
      marginTop: "8vh",
      width: "260px",
    },
    bmOverlay: {
      boxShadow: "0 3px 16px #00000033",
      marginTop: "7vh",
    },
  };
  return (
    <div>
      <BarsMenu styles={barsMenuStyle} onStateChange={(e) => setOpen(e.isOpen)}>
        <ul className="menuList">
          <li className="menuListItem" onClick={() => history.push("/")}>
            <img src="/assets/icons/home.svg" alt="" />
            <span>Início</span>
          </li>
          <li
            className="menuListItem"
            onClick={() => history.push("/resource-register")}
          >
            <img src="/assets/icons/resource-menu.svg" alt="Produto" />
            Cadastro de recursos
          </li>
          <li
            className="menuListItem"
            onClick={() => history.push("/product-register")}
          >
            <img src="/assets/icons/product-menu.svg" alt="Produto" />
            <span>Cadastro de produto</span>
          </li>
        </ul>
      </BarsMenu>
      <div id="header-container">
        <div className="bars-menu-icon">
          {isOpen ? <CloseIcon /> : <MenuOutlinedIcon />}
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
