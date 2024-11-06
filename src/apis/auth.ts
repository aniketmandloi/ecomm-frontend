import API from "./client";

type LoginCredentials = {
  username: string;
  password: string;
};

// API interface for registering a user
export const register = async (data: any) => {
  try {
    const response = await API.post("auth/register", data);

    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

// API interface for logging in a user
export const login = async (credentials: LoginCredentials) => {
  try {
    const response = await API.post("auth/login", credentials);
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

// API interface for verifying the logged in status of a user
export const isLoggedIn = async () => {
  try {
    const response = await API.get("auth/logged_in");

    return response.data;
  } catch (err: any) {
    throw err.response.data;
  }
};
