import React from 'react';

import  Button  from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  color: 'red',
  children:'button'
};

export const Green = Template.bind({});
Green.args = {
  color: 'green',
  children:'button'
};
