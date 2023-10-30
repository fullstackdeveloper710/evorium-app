import { createAsyncThunk } from "@reduxjs/toolkit";

// Create an async thunk
export const fetchData = createAsyncThunk(
  "data/fetchData",
  async (params, thunkAPI) => {
    try {
      // Perform your asynchronous operation here, e.g., an API call
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();

      return data;
    } catch (error) {
      // Handle errors
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
