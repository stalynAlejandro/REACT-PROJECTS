import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'My Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'My Secondary Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'My large Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'My Small Button',
};
