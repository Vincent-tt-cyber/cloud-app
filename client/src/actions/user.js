import axios from "axios";

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
