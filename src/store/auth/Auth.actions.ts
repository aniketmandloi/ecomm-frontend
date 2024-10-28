import { createAsyncThunk } from "@reduxjs/toolkit";
import { register } from "../../apis/auth";

interface RegisterCredentials {
  email: string;
  password: string;
}

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
