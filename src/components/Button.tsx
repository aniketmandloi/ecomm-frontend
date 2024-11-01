import React from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { ButtonProps as MUIButtonProps } from "@mui/material/Button";

// Define the props, extending MUI ButtonProps
interface CustomButtonProps extends MUIButtonProps {
  isLoading?: boolean;
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  isLoading = false,
  ...rest
}) => {
  return (
    <Button {...rest}>
      {/* {!isLoading && children} */}
      {isLoading ? <CircularProgress color="secondary" size={24} /> : children}
    </Button>
  );
};

export default CustomButton;
