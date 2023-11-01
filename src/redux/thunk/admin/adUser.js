import { createAsyncThunk } from "@reduxjs/toolkit";
import httpsClient from "../../../services/httpsClient";
import { adminApi } from "../../../services/apiEndpoints";
import { hideLoader, showLoader } from "../../reducers/common/appSlice";

const { adUserList } = adminApi;

// admin login thunk
export const adminUserList = createAsyncThunk(
  "admin/adminUserList",
  async (data, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const { adminToken, values } = data;
    try {
      const config = {
        method: "get",
        url: adUserList,
      };
      dispatch(showLoader());
      const response = await httpsClient(config, adminToken);
      dispatch(hideLoader());
      return response;
    } catch (error) {
      dispatch(hideLoader());
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
