// src/components/DateAvailable/DateAvailable.stories.tsx
import React from "react";
import { Meta, Story } from "@storybook/react";
import { DateAvailableProps } from "../DateAvailable";
import DateAvailable from "../DateAvailable"; // Importe o componente e o tipo DateAvailableProps

export default {
  title: "Components/DateAvailable",
  component: DateAvailable,
} as Meta;

const Template: Story<DateAvailableProps> = (args: DateAvailableProps) => (
  <DateAvailable {...args} />
);

export const Example = Template.bind({});
Example.args = {
  text: "Exemplo de Texto",
  isoDate: "2023-09-30T14:30:00.000Z",
};
