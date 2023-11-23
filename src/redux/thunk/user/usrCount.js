import { createAsyncThunk } from "@reduxjs/toolkit";
import httpsClient from "../../../services/httpsClient";
import { userApi } from "../../../services/apiEndpoints";
import { hideLoader, showLoader } from "../../reducers/common/appSlice";

const { usrViewCount} = userApi;

export const userViewCount = createAsyncThunk(
  "user/userViewCount",
  async (data, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const { userAuthtoken, values } = data;
    try {
      const config = {
        method: "post",
        url: usrViewCount,
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



// RECENT PROGRAMS

const { usrRecentProgram} = userApi;

export const userRecentProgram = createAsyncThunk(
  "user/userRecentProgram",
  async (data, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const { userAuthtoken, values } = data;
    try {
      const config = {
        method: "post",
        url: usrRecentProgram,
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
