import React, { FC, useEffect, useState } from "react";
import "../../../styles/index.scss";
import cn from "classnames";

export interface ITabbar {
  setPageMode: (mode: string) => void;
}

const Tabbar: FC<ITabbar> = (props) => {
  //state gets the mode from the tabbar buttons
  const [mode, setMode] = useState<String>("Login");

  //useEffect is used when mode changes it sets the prop
  useEffect(() => {
    if (mode === "Login") {
      props.setPageMode("Login");
    } else if (mode === "Register") {
      props.setPageMode("Register");
    }
  }, [mode, props]);

  return (
    <>
      <div className="tabbar__container">
        <button
          id="login"
          className={cn([
            "tabbar__button-green",
            mode === "Login" && "tabbar__button-green-clicked",
          ])}
          onClick={() => setMode("Login")}
        >
          <h3>Giriş Yap</h3>
        </button>
        <button
          data-testid="register"
          className={cn([
            "tabbar__button-red",
            mode === "Register" && "tabbar__button-red-clicked",
          ])}
          onClick={() => setMode("Register")}
        >
          <h3>Üye Ol</h3>
        </button>
      </div>
    </>
  );
};

export default Tabbar;
