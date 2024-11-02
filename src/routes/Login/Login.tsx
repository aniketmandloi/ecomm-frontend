import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";
import BasicTextField from "../../components/TextField";
import CustomButton from "../../components/Button";
import { Divider } from "@mui/material";
import { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { loginUser } from "../../store/auth/Auth.actions";

type LoginFormValues = {
  username: string;
  password: string;
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { error } = useAppSelector((state) => state.auth);

  const handleLogin = async (credentials: LoginFormValues) => {
    try {
      setIsLoading(true);
      await dispatch(loginUser(credentials) as any);
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      setIsLoading(false);
    }
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email address is required"),

    password: Yup.string().required("Password is required"),
  });

  return (
    <div className="app">
      <div className="formComp">
        <div className="formWrapper">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            validateOnBlur
            onSubmit={async (values) => {
              const { email, password } = values;
              await handleLogin({ username: email, password });
            }}
          >
            <Form className="baseForm">
              <header className="baseFormHeader">
                <h1 className="baseFormHeading">Log in</h1>
              </header>
              <BasicTextField label="Email" name="email" id="email-input" />
              <BasicTextField
                label="Password"
                name="password"
                id="password-input"
              />
              {error && <div>{error}</div>}
              <CustomButton
                variant="contained"
                color="primary"
                type="submit"
                isLoading={isLoading}
              >
                Submit
              </CustomButton>
              <p>Forgotten your password?</p>
              <Divider />
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <p>Sign in with</p>
              </div>
              <div className="social-btn-container">
                <CustomButton
                  variant="contained"
                  sx={{ backgroundColor: "#4267b2", color: "#ffffff" }}
                  href="/api/auth/facebook"
                >
                  Facebook
                </CustomButton>
                <CustomButton
                  variant="contained"
                  sx={{ backgroundColor: "#db4437", color: "#ffffff" }}
                  href="/api/auth/google"
                >
                  Google
                </CustomButton>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
