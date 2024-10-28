import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as Yup from "yup";
import { registerUser } from "../../store/auth/Auth.actions";
import "../Register/Register.css";
import TextField from "../../components/TextField";

type RegisterFormValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleRegister = async (
    credentials: Omit<RegisterFormValues, "confirmPassword">
  ) => {
    try {
      setIsLoading(true);
      await dispatch(registerUser(credentials) as any);
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
    <div className="app">
      <div className="formComp">
        <div className="formWrapper">
          <Formik
            initialValues={initialValues}
            validationSchema={registrationSchema}
            validateOnBlur
            onSubmit={async (data) => {
              const { confirmPassword, ...credentials } = data;
              await handleRegister(credentials);
            }}
          >
            <Form className="baseForm">
              <header className="baseFormHeader">
                <h1>Register</h1>
              </header>
              <TextField label="Email" name="email" id="email-input" />
              <TextField
                label="Password"
                name="password"
                id="password-input"
                type="password"
              />
              <TextField
                label="Confirm Password"
                name="confirmPassword"
                id="confirm-password-input"
                type="password"
              />
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;
