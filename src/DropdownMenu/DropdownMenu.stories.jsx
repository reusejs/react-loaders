import React from 'react';
import DropdownMenu from './index';

export default {
    title: 'Dropdowns/DropdownMenu',
    component: DropdownMenu,
};

const Template = (args) => <div className="flex justify-end"><DropdownMenu {...args}/></div>;

export const Default = Template.bind({});

Default.args = {
  profilePictureUrl:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  teams:[
    { name: "Beta", href: "#", current: false },
    { name: "Betalectic", href: "#", current: true },
  ]
};

