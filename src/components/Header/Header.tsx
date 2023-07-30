import React, { useState } from "react";
import style from "./header.module.css";
import logo from "./../../img/logo_header.svg";
import { Link } from "react-router-dom";
import OrangeBtn from "../UI/OrangeBtn/OrangeBtn";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Modal from "../UI/Modal/Modal";
import Donat from "../../Donat/Donat";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const coinValue = useSelector((state: RootState) => state.coin.coin);
  const usdValue = useSelector((state: RootState) => state.usd.usd);
  const [active, setActive] = useState(false);

  const openModal = () => {
    setActive(!active);
  };

  return (
    <header className={`container ${style.container}`}>
      <div className={style.header}>
        <div className={style.logo}>
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <nav>
          <ul className={style.nav}>
            <Link to={"/catalog"}>
              <li className={style.nav__link}>Каталог</li>
            </Link>
            <li className={style.nav__link} onClick={openModal}>
              {coinValue} Coin
            </li>
            <li className={style.nav__link} onClick={openModal}>
              {usdValue} $
            </li>
            <Modal active={active} setActive={setActive}>
              <Donat/>
            </Modal>
          </ul>
        </nav>
        <Link to={"/basket"}>
          <OrangeBtn>Корзина</OrangeBtn>
        </Link>
      </div>
    </header>
  );
};
export default Header;
