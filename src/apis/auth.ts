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
