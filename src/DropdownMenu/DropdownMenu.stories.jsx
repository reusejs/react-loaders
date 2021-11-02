import React from 'react';
import DropdownMenu from './index';
import { CheckCircleIcon } from "@heroicons/react/outline";

export default {
  title: 'Dropdowns/DropdownMenu',
  component: DropdownMenu,
};

const Label = ({ }) => {
  return <div><img
    className="h-8 w-8 rounded-full"
    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    alt=""
  /></div>
}

const Template = (args) => <div className="flex justify-end"><DropdownMenu {...args} /></div>;

export const Default = Template.bind({});

Default.args = {
  label: <Label />,
  sections: [
    {
      label: "Manage Account",
      items: [
        { label: "Your Profile", href: "#", active: false },
        { label: "Settings", href: "#", active: true }
      ]
    },
    {
      label: "Team Switcher",
      items: [
        { label: "Beta", href: "#", active: false },
        { label: "Betalectic", href: "#", active: true }
      ],
      activeIcon: <CheckCircleIcon className="text-green-500 h-6 w-6 mr-1" />
    },
    {
      items: [
        { label: "Sign Out", href: "#", active: false },
      ]
    }
  ],
};

const DarkTemplate = (args) => <div className="flex dark"><DropdownMenu {...args} /></div>;

export const Dark = DarkTemplate.bind({});

Dark.args = {
  label: <Label />,
  sections: [
    {
      label: "Manage Account",
      items: [
        { label: "Your Profile", href: "#", active: false },
        { label: "Settings", href: "#", active: true }
      ]
    },
    {
      label: "Team Switcher",
      items: [
        { label: "Beta", href: "#", active: false },
        { label: "Betalectic", href: "#", active: true }
      ],
      activeIcon: <CheckCircleIcon className="text-green-500 h-6 w-6 mr-1" />
    },
    {
      items: [
        { label: "Sign Out", href: "#", active: false },
      ]
    }
  ],
  positionClasses: "origin-top-left absolute left-0"
};