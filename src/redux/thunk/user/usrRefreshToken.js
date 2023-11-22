import { createAsyncThunk } from "@reduxjs/toolkit";
import httpsClient from "../../../services/httpsClient";
import { commonApi, userApi } from "../../../services/apiEndpoints";
import {
  hideLoader,
  hideRootLoader,
  showLoader,
  showRootLoader,
} from "../../reducers/common/appSlice";

// Create an async thunk
// REFRESH TOKEN

const {usrRefreshToken}= userApi
export const userRefreshToken = createAsyncThunk(
    "user/userRefreshToken",
    async (data, thunkAPI) => {
      const { dispatch } = thunkAPI;
      const { values } = data;
      try {
        const config = {
          method: "post",
          url: usrRefreshToken,
          data: values,
        };
        dispatch(showRootLoader());
        const response = await httpsClient(config);
        dispatch(hideRootLoader());
        return response;
      } catch (error) {
        dispatch(hideRootLoader());
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );