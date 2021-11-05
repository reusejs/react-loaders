import React from "react";
import Loader from "./index";

export default {
  title: "Loaders/Loader",
  component: Loader,
};

const Template = (args) => (
  <div className="h-full flex justify-center items-center">
    <Loader {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  message: "Loading...",
  color: "text-blue-500",
  height: "h-24",
  width: "w-24",
  textStyle: "font-medium text-xl tracking-tight mt-6",
};
