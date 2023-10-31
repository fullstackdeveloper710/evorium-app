import { createAsyncThunk } from "@reduxjs/toolkit";
import httpsClient from "../../../services/httpsClient";
import { adminApi } from "../../../services/apiEndpoints";

const { adLogin } = adminApi;

// admin login thunk
export const adminLogin = createAsyncThunk(
  "admin/adminLogin",
  async (data, thunkAPI) => {
    console.log(data, "data");
    try {
      const config = {
        method: "post",
        url: adLogin,
      };
      // Perform your asynchronous operation here, e.g., an API call
      const response = await httpsClient(true, true, config, data);
      const result = await response.json();
      return result;
    } catch (error) {
      // Handle errors
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
