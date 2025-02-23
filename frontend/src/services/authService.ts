import axios from "axios";

const API_URL = "http://localhost:8000/api/auth";

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Login failed");
    }
    throw new Error("An unexpected error occurred");
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getUserProfile = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) return null;

    const response = await axios.get(`${API_URL}/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    return null;
  }
};
