import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { useField, FieldHookConfig } from "formik";

// Define a type that combines FieldHookConfig and MUI's TextFieldProps
type BasicTextFieldProps = FieldHookConfig<string> & TextFieldProps;

const BasicTextField: React.FC<BasicTextFieldProps> = (props) => {
  const { name, ...rest } = props; // Extract 'name' from props
  const [field, { error, touched }] = useField(name); // Use formik's field API

  return (
    <TextField
      {...field}
      {...rest}
      error={touched && Boolean(error)} // Display error only if touched
      helperText={touched && error ? error : ""}
      variant="outlined"
      fullWidth // Optional for consistent layout
    />
  );
};

export default BasicTextField;
