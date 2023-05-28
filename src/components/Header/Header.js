import React from "react";
import { Link } from "react-router-dom";

import { useCart } from "../../hooks/useCart";

import styles from "./Header.module.scss";

function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img
            width={60}
            height={60}
            src={process.env.PUBLIC_URL + "/img/logo.png"}
            alt="Logotype"
          />
          <div>
            <div className="logo-name">
              <h3 className="text-uppercase">RTX ON </h3>
              <h4>SHOP</h4>
            </div>

            <p className="opacity-5">Магазин новейших видеокарт</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img
            width={18}
            height={18}
            src={process.env.PUBLIC_URL + "/img/cart.svg"}
            alt="Корзина"
          />
          <span>{totalPrice} RUB.</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img
              width={18}
              height={18}
              src={process.env.PUBLIC_URL + "/img/heart.svg"}
              alt="Закладки"
            />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img
              width={18}
              height={18}
              src={process.env.PUBLIC_URL + "/img/user.svg"}
              alt="Пользователь"
            />
          </Link>
        </li>
        <li className={styles.admin}>
          <Link to="/login">
            <img
              width={20}
              height={20}
              src={process.env.PUBLIC_URL + "/img/enter.svg"}
              alt="Администрация"
            />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
