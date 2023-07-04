import { Children, cloneElement } from "react";
import { Control, Controller, FieldErrors, FieldValues } from "react-hook-form";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextProps,
  View,
  ViewProps,
} from "react-native";

function Main<T>({
  children,
  control,
  errors,
}: {
  children: JSX.Element[] | JSX.Element;
  control: Control<T extends FieldValues ? T : FieldValues, any>;
  errors: FieldErrors<T extends FieldValues ? T : FieldValues>;
}) {
  return (
    <>
      {Children.map(children, (child) => {
        const isReactElement =
          child &&
          typeof child === "object" &&
          "type" in child &&
          "props" in child;

        if (!isReactElement) return null;

        return (
          <Controller
            control={control}
            name={child.props.name}
            render={({ field: { onChange, value } }) => {
              return cloneElement(child, { onChange, value, errors });
            }}
          />
        );
      })}
    </>
  );
}

interface Erros {
  [key: string]: {
    message: string;
  };
}

interface InputProps extends TextInputProps {
  label?: string;
  name: string;
  onChange?: (...event: any[]) => void;
  errors?: Erros;
  _containerProps?: ViewProps;
  _errorTextProps?: TextProps;
}

function Input(props: InputProps) {
  return (
    <View style={styles.container} {...props._containerProps}>
      <Text style={styles.errorText} {...props._errorTextProps}>
        {props.errors?.[props.name]?.message}
      </Text>
      <TextInput
        style={styles.inputText}
        onChangeText={props.onChange}
        placeholder={props.name ?? props.placeholder}
        value={props.value}
        {...props}
      />
    </View>
  );
}

function TextArea(props: InputProps) {
  return (
    <View style={styles.container} {...props._containerProps}>
      <Text style={styles.errorText} {...props._errorTextProps}>
        {props.errors?.[props.name]?.message}
      </Text>
      <TextInput
        multiline
        numberOfLines={4}
        style={styles.inputTextArea}
        onChangeText={props.onChange}
        placeholder={props.name ?? props.placeholder}
        value={props.value}
        {...props}
      />
    </View>
  );
}

const Form = Object.assign(Main, { Input, TextArea });

const inputCommonStyles = {
  width: "100%",
  backgroundColor: "#fff",
  borderWidth: 0.5,
  borderColor: "gray",
  padding: 5,
  borderRadius: 5,
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: 250,
  },
  errorText: {
    color: "red",
  },
  inputText: inputCommonStyles,
  inputTextArea: {
    ...inputCommonStyles,
    textAlignVertical: "top",
  },
});
export default Form;
