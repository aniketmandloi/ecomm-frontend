import React from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { ButtonProps as MUIButtonProps } from "@mui/material/Button";
import { Link } from "react-router-dom";

// Define the props, extending MUI ButtonProps
interface CustomButtonProps extends MUIButtonProps {
  isLoading?: boolean;
  children: React.ReactNode;
  to?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  isLoading = false,
  to,
  ...rest
}) => {
  return (
    <Button
      {...rest}
      component={to ? Link : "button"}
      to={to}
      disabled={isLoading}
    >
      {/* {!isLoading && children} */}
      {isLoading ? <CircularProgress color="secondary" size={24} /> : children}
    </Button>
  );
};

export default CustomButton;
