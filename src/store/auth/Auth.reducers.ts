import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./Auth.actions";

interface AuthState {
  isFetching: boolean;
  isAuthenticated: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isFetching: false,
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state) => {
      state.isAuthenticated = false;
      state.error = null;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      const error = action.error?.message || "Registration failed";
      state.isAuthenticated = false;
      state.error = error;
    });
  },
});

export default authSlice.reducer;
