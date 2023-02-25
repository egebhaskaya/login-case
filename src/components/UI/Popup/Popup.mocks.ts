import { IPopup } from "./Popup";

const base: IPopup = {
  open: true,
  setOpen: () => console.log("test"),
};

export const mockPopupprops = {
  base,
};
