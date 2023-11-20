import { createAsyncThunk } from "@reduxjs/toolkit";
import httpsClient from "../../../services/httpsClient";
import { userApi } from "../../../services/apiEndpoints";
import { hideLoader, showLoader } from "../../reducers/common/appSlice";

const { usrEditProfile } = userApi;

export const userEditProfile = createAsyncThunk(
  "user/userEditProfile",
  async (data, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const { userAuthtoken, values } = data;
    try {
      const config = {
        method: "put",
        url: usrEditProfile,
        data: values,
        
      };
      dispatch(showLoader());
      const response = await httpsClient(config, userAuthtoken);
      dispatch(hideLoader());
      return response;
  
    } catch (error) {
      dispatch(hideLoader());
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

