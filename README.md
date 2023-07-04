# REACT NATIVE FORMIFY

REACT NATIVE FORMIFY is a powerful form handling library for React Native integrated with React Hook Form. It simplifies the process of building and managing forms in React Native applications, allowing developers to focus on creating great user experiences.

## Features

- Easy setup and usage with React Hook Form.
- Automated form validation and error handling.
- Flexible and customizable form controls.
- Streamlined data binding and input handling.

## Installation

You can install React Native Formify using npm or Yarn:

```bash
npm install react-native-formify

```

or

```bash

yarn add react-native-formify
```

## Usage

Here's a basic example of how to use Formify in your React Native application:

```jsx
import { Button } from "react-native";
import Form from "react-native-formify";

const MyForm = () => {
  const { control, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    // Handle form submission
  };

  return (
    <>
      <Form control={control} errors={errors}>
        <Form.Input name="name" />
        <Form.TextArea name="description" />
      </Form>
      <Button onPress={handleSubmit(onSubmit)} title="Submit" />;
    </>
  );
};
```
