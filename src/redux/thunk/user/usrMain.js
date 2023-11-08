import { createAsyncThunk } from "@reduxjs/toolkit";
import httpsClient from "../../../services/httpsClient";
import { userApi } from "../../../services/apiEndpoints";
import {
  hideLoader,
  hideRootLoader,
  showLoader,
  showRootLoader,
} from "../../reducers/common/appSlice";

// Create an async thunk
export const userSignUp = createAsyncThunk(
  "user/userSignUp",
  async (data, thunkAPI) => {
    try {
      // Perform your asynchronous operation here, e.g., an API call
      const config = {
        method: "post",
        url: userApi.userSignup,
        data: data,
      };
      thunkAPI.dispatch(showLoader());
      const response = await httpsClient(config);
      thunkAPI.dispatch(hideLoader());
      return response;
    } catch (error) {
      console.log("error", error);
      thunkAPI.dispatch(hideLoader());
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//-------------------user login---------------------//
// export const userLogin = createAsyncThunk(
//   "user/userLogin",
//   async (data, thunkAPI) => {
//     try {
//       const config = {
//         method: "post",
//         url:userApi.userLogin,
//         data:data,
//       };
//       const response =  httpsClient( config,userApi.userLogin);

//       return response.data;
//     } catch (error) {
//       // Handle errors
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
const { usrLogin } = userApi;

export const userLogin = createAsyncThunk(
  "user/userLogin",
  async (data, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const { values } = data;
    try {
      const config = {
        method: "post",
        url: usrLogin,
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
// reset password

const { usrResetPass } = userApi;

export const resetPassword = createAsyncThunk(
  "user/resetPassword",
  async (data, thunkAPI) => {
    try {
      const config = {
        method: "post",
        url: usrResetPass,
        data: data,
      };
      thunkAPI.dispatch(showLoader());
      const response = await httpsClient(config);
      thunkAPI.dispatch(hideLoader());
      return response;
    } catch (error) {
      console.log("error", error);
      thunkAPI.dispatch(hideLoader());
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// FORGET PASSWORD--------------------

const { usrForgetPass } = userApi;

export const forgotPassword = createAsyncThunk(
  "user/forgotPassword",
  async (data, thunkAPI) => {
    try {
      const config = {
        method: "post",
        url: usrForgetPass,
        data: data,
      };
      thunkAPI.dispatch(showLoader());
      const response = await httpsClient(config);
      thunkAPI.dispatch(hideLoader());
      return response;
    } catch (error) {
      console.log("error", error);
      thunkAPI.dispatch(hideLoader());
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// verify otp

const { usrVerify } = userApi;

export const userVerifyNum = createAsyncThunk(
  "user/userVerifyNum",
  async (data, thunkAPI) => {
    const {
      values,
    } = data;

    try {
      const config = {
        method: "post",
        url: `${usrVerify}`,
        data:values

        // data: data,
      };
      thunkAPI.dispatch(showLoader());
      const response = await httpsClient(config);
      thunkAPI.dispatch(hideLoader());
      return response;
    } catch (error) {
      console.log("error", error);
      thunkAPI.dispatch(hideLoader());
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
