import { Story, Meta } from "@storybook/react";
import { SimpleButton, TSimpleButton } from "./SimpleButton";

export default {
  title: "MyComponents/SimpleButton",
  component: SimpleButton,
  argTypes: {
    background: {
      control: "color",
    },
  },
} as Meta;

const Template: Story<TSimpleButton> = (args) => <SimpleButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Primary SimpleButton",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
};
