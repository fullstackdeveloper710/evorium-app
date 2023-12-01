import { createSlice } from "@reduxjs/toolkit";

// Create a slice for user credentials
const credentialsSlice = createSlice({
  name: "userCredentials",
  initialState: {
    rememberMe: false,
    email: "",
    password: "",
  },
  reducers: {
    saveCredentials: (state, action) => {
      state.rememberMe = true;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    clearCredentials: (state) => {
      state.rememberMe = false;
      state.email = "";
      state.password = "";
    },
  },
});

// Export the action creators
export const { saveCredentials, clearCredentials } = credentialsSlice.actions;

// Export the reducer
export default credentialsSlice.reducer;
