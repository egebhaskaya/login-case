import { ComponentMeta, ComponentStory } from "@storybook/react";
import Card, { ICard } from "./Card";
import { mockCardprops } from "./Card.mocks";

export default {
  title: "UI/Card",
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>Test</Card>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCardprops.base,
} as ICard;
