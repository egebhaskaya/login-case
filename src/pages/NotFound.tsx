import Button from "../components/Inputs/Button/Button";
import "../styles/index.scss";
import { useNavigate } from "react-router-dom";
import { checkAuth } from "../utils/authentication";

const NotFound = () => {
  const navigate = useNavigate();

  //checks auth state before routing then routes to either "/" or "/home"
  const handleGoBack = async () => {
    const auth = await checkAuth();
    if (auth !== null) {
      navigate("/home");
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <div className="notfound__container">
        <div className="notfound__content">
          <h3 className="notfound__text">Sanırım Kayboldunuz :&#41;</h3>
          <Button
            buttonText="Geri Dön"
            buttonType="button"
            onClick={() => handleGoBack()}
            mode={"Login"}
          />
        </div>
      </div>
    </>
  );
};

export default NotFound;
