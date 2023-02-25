import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input, { IInput } from "./Input";
import { mockInputprops } from "./Input.mocks";

export default {
  title: "Inputs/Input",
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Green = Template.bind({});
export const Red = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Green.args = {
  ...mockInputprops.Green,
} as IInput;

Red.args = {
  ...mockInputprops.Red,
} as IInput;
