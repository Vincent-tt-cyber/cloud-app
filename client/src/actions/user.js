import axios from "axios";
import { userLogin } from "../store/slices/userSlice";

export const register = async (fullName, email, password) => {
  try {
    const response = await axios.post("http://localhost:3000/api/register", {
      fullName,
      email,
      password,
    });
    alert(response.data.message);
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post("http://localhost:3000/api/login", {
      email,
      password,
    });
    // console.log(response.data);
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      // dispatch(userLogin(response.data.user)); // Передать данные пользователя в userLogin
    }
  } catch (error) {
    alert(error.response.data.message);
  }
};
export const auth = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/auth", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    console.log("auth => ", response);
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      // dispatch(userLogin(response.data.user)); // Передать данные пользователя в userLogin
    }
  } catch (error) {
    alert(error.response.data.message);
    localStorage.removeItem("token");
  }
};
