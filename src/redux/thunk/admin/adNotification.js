import { createAsyncThunk } from "@reduxjs/toolkit";
import httpsClient from "../../../services/httpsClient";
import { adminApi } from "../../../services/apiEndpoints";
import { hideRootLoader, showRootLoader } from "../../reducers/common/appSlice";

const { adNotification } = adminApi;

// get admin categories list thunk
export const getAdminNotifications = createAsyncThunk(
  "admin/getAdminNotification",
  async (data, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const { adminAuthtoken } = data;
    try {
      const config = {
        method: "get",
        url: `${adNotification}`,
      };
      dispatch(showRootLoader());
      const response = await httpsClient(config, adminAuthtoken);
      dispatch(hideRootLoader());
      return response;
    } catch (error) {
      dispatch(hideRootLoader());
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
