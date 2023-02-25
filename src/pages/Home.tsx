import React, { useEffect, useState } from "react";
import { checkAuth, logout } from "../utils/authentication";
import { useNavigate } from "react-router-dom";
import "../styles/index.scss";
import Button from "../components/Inputs/Button/Button";

interface RegisterData {
  nameSurname: string;
  email: string;
  password: string;
}

const Home = () => {
  const [userData, setUserData] = useState<RegisterData>();
  const [logoutResp, setLogoutResp] = useState<number>();

  const navigate = useNavigate();

  //if user logs out re executes the getAuthState function
  useEffect(() => {
    getAuthState();
  }, [logoutResp]);

  const getAuthState = async () => {
    const auth = await checkAuth();
    if (auth === null) {
      navigate("/");
    } else {
      setUserData(auth);
    }
  };

  //deletes the locally storage data and response taken into a state variable to re render the page
  const handleLogout = async () => {
    const logoutResp = await logout();
    setLogoutResp(logoutResp);
  };

  return (
    <div className="home__container">
      <div className="home__content">
        <div className="home__text-container">
          <h3 className="home__text">Hoşgeldiniz!</h3>
          <h3 className="home__text">Ad Soyad: {userData?.nameSurname}</h3>
          <h3 className="home__text">Email: {userData?.email}</h3>
        </div>
        <Button
          buttonType="button"
          buttonText="Çıkış Yap"
          mode="Register"
          onClick={() => handleLogout()}
        />
      </div>
    </div>
  );
};

export default Home;
