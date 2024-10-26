import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as Yup from "yup";

type RegisterFormValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleRegister = async (
    credentials: Omit<RegisterFormValues, "confirmPassword">
  ) => {
    try {
      setIsLoading(true);
      await dispatchEvent(registerUser(credentials) as any);
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      setIsLoading(false);
    }
  };

  // Validation schema for registration form
  const registrationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email address is required"),

    password: Yup.string().required("Password is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const initialValues: RegisterFormValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <div>
      <div>
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={registrationSchema}
            validateOnBlur
            onSubmit={async (data) => {
              const { confirmPassword, ...credentials } = data;
              await handleRegister(credentials);
            }}
          ></Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;
