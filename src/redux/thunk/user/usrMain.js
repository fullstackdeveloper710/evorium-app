import { createAsyncThunk } from "@reduxjs/toolkit";
import httpsClient from "../../../services/httpsClient";

// Create an async thunk
export const fetchData = createAsyncThunk(
  "data/fetchData",
  async (params, thunkAPI) => {
    try {
      // Perform your asynchronous operation here, e.g., an API call
      const config = {
        method: "get",
      };
      const response = httpsClient(true, false, config, "posts");

      // return data;
    } catch (error) {
      // Handle errors
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
