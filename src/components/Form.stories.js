import React from "react";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import { Form } from "./Form";

export default {
  component: Form,
  title: "Form",
};

const Template = (args) => <Form {...args} />;

export const Default = Template.bind({});

export const WithEmailFilled = Template.bind({});

WithEmailFilled.play = async ({ canvasElement }) => {
  // Starts querying the component from its root
  const canvas = within(canvasElement);

  // Looks up the input and fills it.
  const emailInput = canvas.getByLabelText("email", {
    selector: "input",
  });

  await userEvent.type(emailInput, "Example");
};

export const WithPasswordFilled = Template.bind({});
WithPasswordFilled.play = async ({ canvasElement }) => {
  // Starts querying the component from its root
  const canvas = within(canvasElement);

  // Looks up the input and fills it.
  const passwordInput = canvas.getByLabelText("password", {
    selector: "input",
  });

  await userEvent.type(passwordInput, "Example");
};

export const FilledForm = Template.bind({});
FilledForm.play = async ({ canvasElement }) => {
  // Starts querying the component from its root
  const canvas = within(canvasElement);

  // Looks up the input and fills it.
  const emailInput = canvas.getByLabelText("email", {
    selector: "input",
  });

  await userEvent.type(emailInput, "Example");
  // Looks up the input and fills it.
  const passwordInput = canvas.getByLabelText("password", {
    selector: "input",
  });

  await userEvent.type(passwordInput, "Example");
};

export const WithHoverState = Template.bind({});
WithHoverState.play = async ({ canvasElement }) => {
  // Starts querying the component from its root
  const canvas = within(canvasElement);

  // Looks up the input and fills it.
  const emailInput = canvas.getByLabelText("email", {
    selector: "input",
  });

  await userEvent.type(emailInput, "Example");

  // Looks up the button and interacts with it.
  const submitButton = canvas.getByRole("button");
  await userEvent.click(submitButton);

  // Triggers the hover state
  await waitFor(async () => {
    await userEvent.hover(canvas.getByLabelText("Email error"));
  });
};

export const WithFocusState = Template.bind({});
WithFocusState.play = async ({ canvasElement }) => {
  // Starts querying the component from its root
  const canvas = within(canvasElement);

  // Looks up the inputs and fills them.
  const emailInput = canvas.getByLabelText("email", {
    selector: "input",
  });
  await userEvent.type(emailInput, "Example");

  const passwordInput = canvas.getByLabelText("password", {
    selector: "input",
  });

  await userEvent.type(passwordInput, "Example");

  /*   // Looks up the button and interacts with it.
  const submitButton = canvas.getByRole("button");
  await userEvent.click(submitButton); */

  // Sets focus on the email input
  emailInput.focus();
};
