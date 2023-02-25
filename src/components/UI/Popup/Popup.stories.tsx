import { ComponentMeta, ComponentStory } from "@storybook/react";
import Popup, { IPopup } from "./Popup";
import { mockPopupprops } from "./Popup.mocks";

export default {
  title: "UI/Popup",
  component: Popup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Popup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Popup> = (args) => (
  <Popup {...args}>Test</Popup>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockPopupprops.base,
} as IPopup;
