import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {},
  isAuth: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.currentUser = action.payload;
      state.isAuth = true;
    },
    userLogout: (state) => {
      localStorage.removeItem("token");
      state.currentUser = {};
      state.isAuth = false;
    },
  },
});

export const { userLogin, userLogout } = userSlice.actions;
export default userSlice.reducer;
