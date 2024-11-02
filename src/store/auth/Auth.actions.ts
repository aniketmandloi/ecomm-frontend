import { createAsyncThunk } from "@reduxjs/toolkit";
import { register } from "../../apis/auth";

type RegisterCredentials = {
  email: string;
  password: string;
};

type LoginCredentials = {
  username: string;
  password: string;
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (credentials: RegisterCredentials) => {
    try {
      await register(credentials);
      return {};
    } catch (error) {
      throw error;
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials: LoginCredentials) => {
    try {
      const response = await register(credentials);
      return {
        user: response,
        isAuthenticated: true,
      };
    } catch (error) {
      throw error;
    }
  }
);
