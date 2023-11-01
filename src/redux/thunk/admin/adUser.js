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
