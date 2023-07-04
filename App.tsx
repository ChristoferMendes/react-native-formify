import { Button, StyleSheet, Text, View } from "react-native";
import Form from "./src";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data: any) => {
    console.warn(data);
  };

  console.log(errors);

  return (
    <View style={styles.container}>
      <Text>Simple usage of the lib!</Text>
      <Form control={control} errors={errors}>
        <Form.Input name="name" />
        <Form.TextArea name="description" placeholder="description" />
      </Form>
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
