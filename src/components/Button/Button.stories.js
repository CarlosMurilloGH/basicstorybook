import React from "react";
import Button from "./Button";

export default{
    // name on storybook
    title: "Components/Button",
    // name of the component
    component: Button,
    argTypes:{ onClick: {action: "onClick"}},
}


const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    backgroundColor: "#7f5af0",
    label:"Press me",
    size:"md"
}

export const Secondary = Template.bind({});
Secondary.args = {
    backgroundColor: "#16161a",
    label:"Press me",
    size:"md"
}
