import React, { FC, useEffect, useState } from "react";
import "../styles/index.scss";
import Button from "../components/Inputs/Button/Button";
import Input from "../components/Inputs/Input/Input";
import Tabbar from "../components/UI/Tabbar/Tabbar";
import Popup from "../components/UI/Popup/Popup";
import { checkAuth, login, register } from "../utils/authentication";
import { useNavigate } from "react-router-dom";
import Card from "../components/UI/Card/Card";

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  nameSurname: string;
  email: string;
  password: string;
}

const Login = () => {
  //mode state, props and handlePageMode function is used get the mode from Tabbar and pass it into required components
  const [mode, setMode] = useState<string>("Login");
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });
  const [registerData, setRegisterData] = useState<RegisterData>({
    nameSurname: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  //gets the data from tabbar component to a state variable
  const handlePageMode = (mode: string) => {
    setMode(mode);
  };

  //checks current auth state
  useEffect(() => {
    getAuthState();
  }, []);

  //empties input states when mode changes
  useEffect(() => {
    restInputStates();
  }, [mode]);

  //if user is authenticated routes to home page
  const getAuthState = async () => {
    const auth = await checkAuth();
    if (auth !== null) {
      navigate("/home");
    }
  };

  //checks the apge mode and sends either login request or register request
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (mode === "Login") {
      const resp = await login(loginData);
      if (resp === 200) {
        navigate("/home");
      } else if (resp === 400) {
        setErrorMessage("Email veya parola yanlış!");
        setOpenPopup(true);
      }
    } else if (mode === "Register") {
      const resp = await register(registerData);
      if (resp === 200) {
        setErrorMessage("Kullanıcı başarıyla oluşturuldu!");
        setOpenPopup(true);
        restInputStates();
      } else if (resp === 401) {
        setErrorMessage("Bu kullanıcı kayıtlı!");
        setOpenPopup(true);
      } else if (resp === 400) {
        setErrorMessage("Üye olurken bir hata oluştu!");
        setOpenPopup(true);
      }
    }
  };

  const restInputStates = () => {
    setLoginData({
      email: "",
      password: "",
    });
    setRegisterData({
      nameSurname: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="login__container">
      <Card mode={mode}>
        <Tabbar setPageMode={handlePageMode} />
        <form
          autoComplete="off"
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
        >
          {mode === "Login" ? (
            <div className="card__container-form-container-login">
              <Input
                value={loginData.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setLoginData((prev: LoginData) => ({
                    ...prev,
                    email: e.target.value.replace(" ", ""),
                  }))
                }
                name="loginEmail"
                inputType="email"
                inputPlaceHolder="E-Posta Adresiniz"
                inputMode={mode}
              />
              <Input
                value={loginData.password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setLoginData((prev: LoginData) => ({
                    ...prev,
                    password: e.target.value.replace(" ", ""),
                  }))
                }
                name="loginPassword"
                inputType="password"
                inputPlaceHolder="Paralonız"
                inputMode={mode}
              />
            </div>
          ) : mode === "Register" ? (
            <div className="card__container-form-container-register">
              <Input
                value={registerData.nameSurname}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setRegisterData((prev: RegisterData) => ({
                    ...prev,
                    nameSurname: e.target.value,
                  }))
                }
                name="RegisterNameSurname"
                inputType="text"
                inputPlaceHolder="Adınız Soyadınız"
                inputMode={mode}
              />
              <Input
                value={registerData.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setRegisterData((prev: RegisterData) => ({
                    ...prev,
                    email: e.target.value.replace(" ", ""),
                  }))
                }
                name="RegisterEmail"
                inputType="email"
                inputPlaceHolder="E-Posta Adresiniz"
                inputMode={mode}
              />
              <Input
                value={registerData.password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setRegisterData((prev: RegisterData) => ({
                    ...prev,
                    password: e.target.value.replace(" ", ""),
                  }))
                }
                name="RegisterPassword"
                inputType="text"
                inputPlaceHolder="Parolanız"
                inputMode={mode}
              />
            </div>
          ) : null}
          <Button
            mode={mode}
            buttonType="submit"
            buttonText={
              mode === "Login"
                ? "Giriş Yap"
                : mode === "Register"
                ? "Üye Ol"
                : ""
            }
          />
        </form>
      </Card>
      <Popup open={openPopup} setOpen={() => setOpenPopup(!openPopup)}>
        <h3 className="popup__text">{errorMessage}</h3>
      </Popup>
    </div>
  );
};

export default Login;
