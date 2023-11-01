import { createAsyncThunk } from "@reduxjs/toolkit";
import httpsClient from "../../../services/httpsClient";
import { adminApi } from "../../../services/apiEndpoints";
import { hideLoader, showLoader } from "../../reducers/common/appSlice";

const { adLogin } = adminApi;

// admin login thunk
export const adminLogin = createAsyncThunk(
  "admin/adminLogin",
  async (data, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const { values } = data;
    try {
      const config = {
        method: "post",
        url: adLogin,
        data: values,
      };
      dispatch(showLoader());
      const response = await httpsClient(config);
      dispatch(hideLoader());
      return response;
    } catch (error) {
      dispatch(hideLoader());
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
