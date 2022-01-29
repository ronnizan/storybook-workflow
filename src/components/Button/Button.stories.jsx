import React from 'react';

import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  // decorators: [(story) => <div style={{ padding: '3rem' }}>{story()}</div>],
  argTypes: { login: { action: 'login' } },
};

const Template = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  color: 'red',
  children: 'button',
  handleClick: function () {
    this.children = 'wwwww';
  },
};

export const Green = Template.bind({});
Green.args = {
  color: 'green',
  children: 'button',
};
