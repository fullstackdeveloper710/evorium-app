import { createAsyncThunk } from "@reduxjs/toolkit";
import httpsClient from "../../../services/httpsClient";
import { userApi } from "../../../services/apiEndpoints";
import { hideLoader, showLoader } from "../../reducers/common/appSlice";

const { usrPrograms, usrFilterPrograms,usrMyAccount } = userApi;

// get USER categories list thunk
export const getUserProgramList = createAsyncThunk(
  "user/getUserProgramList",
  async (data, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const { values } = data;
    try {
      const config = {
        method: "get",
        url: `${usrPrograms}?course_type=${values?.course_type}`,
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

// filter programs
export const userFilterPrograms = createAsyncThunk(
  "user/userFilterPrograms",
  async (data, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const { userAuthtoken, values } = data;
    try {
      const config = {
        method: "get",
        url: `${usrFilterPrograms}?categories=${values?.categories}&speakers=${values.speakers}&sort_by=${values.sort_by}`,
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
