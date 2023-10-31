import { createAsyncThunk } from "@reduxjs/toolkit";
import httpsClient from "../../../services/httpsClient";
import { adminApi } from "../../../services/apiEndpoints";
import { hideLoader, showLoader } from "../../reducers/common/appSlice";

const { adLogin } = adminApi;

// admin login thunk
export const adminLogin = createAsyncThunk(
  "admin/adminLogin",
  async (data, thunkAPI) => {
    try {
      const config = {
        method: "post",
        url: adLogin,
        data: data,
      };
      thunkAPI.dispatch(showLoader());
      const response = await httpsClient(config);
      thunkAPI.dispatch(hideLoader());
      return response;
    } catch (error) {
      console.log("error", error);
      thunkAPI.dispatch(hideLoader());
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
