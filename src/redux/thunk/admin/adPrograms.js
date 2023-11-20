import { createAsyncThunk } from "@reduxjs/toolkit";
import httpsClient from "../../../services/httpsClient";
import { adminApi } from "../../../services/apiEndpoints";
import { hideLoader, showLoader } from "../../reducers/common/appSlice";

const { adPrograms, adSearchProgram, adAddProgram, adDelProgram } = adminApi;

// get admin program list thunk
export const getAdminProgramList = createAsyncThunk(
  "admin/getAdminProgramList",
  async (data, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const { adminAuthtoken, values } = data;
    try {
      const config = {
        method: "get",
        url: `${adPrograms}?pageNo=${values?.pageNo}&pageSize=${values?.pageSize}`,
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

// search admin program
export const searchAdminProgram = createAsyncThunk(
  "admin/searchAdminProgram",
  async (data, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const {
      adminAuthtoken,
      values,
      query: { search },
    } = data;
    try {
      const config = {
        method: "get",
        url: `${adSearchProgram}?query=${search}`,
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

// add admin program
export const addAdminProgram = createAsyncThunk(
  "admin/addAdminProgram",
  async (data, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const { adminAuthtoken, values } = data;
    try {
      const config = {
        method: "post",
        url: `${adAddProgram}`,
        data: values,
        headers: {
          "Content-Type": "multipart/form-data",
        },
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

// delete admin program
export const deleteAdminProgram = createAsyncThunk(
  "admin/deleteAdminProgram",
  async (data, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const { adminAuthtoken, query, pagination } = data;
    try {
      const config = {
        method: "delete",
        url: `${adDelProgram}/${query.id}`,
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
