import { FC } from "react";
import "../../../styles/index.scss";
import cn from "classnames";

export interface ICard {
  mode: string;
  children?: any;
}

const Card: FC<ICard> = (props) => {
  const { mode, children } = props;

  return (
    <>
      <div
        data-testid="card"
        className={cn([
          mode === "Login" && "card__container-login",
          mode === "Register" && "card__container-register",
        ])}
      >
        {children}
      </div>
    </>
  );
};

export default Card;
