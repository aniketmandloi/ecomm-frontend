import API from "./client";

export const register = async (data: any) => {
  try {
    const response = await API.post("auth/register", data);

    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};
