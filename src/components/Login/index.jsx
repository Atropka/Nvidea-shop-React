import React from "react";
import { Navigate } from "react-router-dom";
import AppContext from "../../context";

import styles from "../Login/Login.module.scss";

const Login = () => {
  const {
    title,
    isLoggedIn,
    handleLogout,
    username,
    setUsername,
    password,
    setPassword,
    handleLogin,
  } = React.useContext(AppContext);
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <Navigate to="/admin" />
          <button onClick={handleLogout}>Выйти</button>
        </div>
      ) : (
        <div>
          <div className={styles.wrapper}>
            <img src={process.env.PUBLIC_URL + "/img/1111111.png"} alt="" />
            <form action="">
              <h1>Administration</h1>
              <p>{title}</p>
              <input
                type="text"
                placeholder="Имя пользователя"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
              <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <button onClick={handleLogin}>Войти</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
