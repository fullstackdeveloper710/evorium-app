import { createAsyncThunk } from "@reduxjs/toolkit";
import httpsClient from "../../../services/httpsClient";
import { userApi } from "../../../services/apiEndpoints";

// Create an async thunk
export const userSignUp = createAsyncThunk(
  "user/userSignUp",
  async (params, thunkAPI) => {
    try {
      // Perform your asynchronous operation here, e.g., an API call
      const config = {
        method: "post",
      };
      const response = httpsClient(true, false, config,userApi.userSignup);

      // return data;
    } catch (error) {
      // Handle errors
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
