import React, { FC } from "react";
import "../../../styles/index.scss";

export interface IPopup {
  open: boolean;
  setOpen: () => void;
  children?: any;
}

const Popup: FC<IPopup> = ({ open, children, setOpen }) => {
  return (
    <>
      {open && (
        <>
          <div className="popup__background" onClick={setOpen}>
            <div
              className="popup__content-container"
              onClick={(e: any) => e.stopPropagation()}
            >
              <div className="popup__close-button-container">
                <button
                  data-testid="closeButton"
                  className="popup__close-button"
                  onClick={setOpen}
                >
                  x
                </button>
              </div>
              <div className="popup__content">{children}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Popup;
