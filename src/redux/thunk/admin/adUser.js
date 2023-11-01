import { createAsyncThunk } from "@reduxjs/toolkit";
import httpsClient from "../../../services/httpsClient";
import { adminApi } from "../../../services/apiEndpoints";
import { hideLoader, showLoader } from "../../reducers/common/appSlice";

const { adUserList, adUserDetail } = adminApi;

// get admin users list thunk
export const getAdminUserList = createAsyncThunk(
  "admin/getAdminUserList",
  async (data, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const { adminAuthtoken, values } = data;
    console.log(data, "data");
    try {
      const config = {
        method: "get",
        url: `${adUserList}?pageNo=${values?.pageNo}&pageSize=${values?.pageSize}`,
      };
      dispatch(showLoader());
      const response = await httpsClient(config, adminAuthtoken);
      dispatch(hideLoader());
      return response;
    } catch (error) {
      dispatch(hideLoader());
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// get admin user detail thunk
export const getAdminUserDetail = createAsyncThunk(
  "admin/getAdminUserDetail",
  async (data, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const { adminAuthtoken, values } = data;
    try {
      const config = {
        method: "get",
        url: `${adUserDetail}/id`,
      };
      dispatch(showLoader());
      const response = await httpsClient(config, adminAuthtoken);
      dispatch(hideLoader());
      return response;
    } catch (error) {
      dispatch(hideLoader());
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
