import { createAsyncThunk } from "@reduxjs/toolkit";
import httpsClient from "../../../services/httpsClient";
import { adminApi } from "../../../services/apiEndpoints";
import { hideBtnLoader, hideLoader, showBtnLoader, showLoader } from "../../reducers/common/appSlice";

const {
  adLatestPrograms
} = adminApi;

export const getAdminLatestPrograms = createAsyncThunk(
  "admin/getAdminLatestPrograms",
  async (data, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const { adminAuthtoken } = data;
    try {
      const config = {
        method: "get",
        url: `${adLatestPrograms}`,
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


// delete admin category thunk
